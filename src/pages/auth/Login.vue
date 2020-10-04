<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <q-form @submit.prevent="handleSubmit" class="row" ref="loginForm">
      <div class="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <div class="row">
          <div class="col-4 offset-4 q-my-md">
            <q-img src="../../assets/logo.png"/>
          </div>
          <div class="col-12 q-my-md">
            <p class="text-center text-h3">Welcome Back</p>
            <p class="text-center text-subtitle1">Don't miss your next opportunity. Sign in to stay updated on your Global Health Network.</p>
          </div>
          <div class="col-12 q-my-xs">
            <q-input outlined v-model="userLogin.email" label="Email" :rules="[validateEmail]" lazy-rules/>
          </div>
          <div class="col-12 q-my-xs">
            <q-input type="password" outlined v-model="userLogin.password" label="Password" :rules="[validatePassword]" lazy-rules/>
          </div>
          <div class="col-12 q-my-lg">
            <q-btn type="submit" color="primary" size="lg" class="full-width" label="Login"/>
          </div>
          <div class="col-12 q-my-xs">
            <p class="text-center text-subtitle1">New to MediConnects?
              <q-btn flat color="primary" dense label="Join Now" to="/auth/register" />
            </p>
          </div>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
  import { mapState, mapActions } from 'vuex'
  import Vue from 'vue';
  import { VForm } from 'src/types';
  import { validateEmail, validatePassword } from 'src/formValidators';

  interface Login {
    email: string;
    password: string;
  }

  export default Vue.extend({
    name: 'PageLogin',
    data() {
      const userLogin: Login = {
        email: '',
        password: ''
      };
      return { userLogin };
    },
    computed: {
      ...mapState('accountModule', ['status']),
      validatePassword: validatePassword,
      validateEmail: validateEmail,
      vLoginForm(): VForm {
        return this.$refs.loginForm as VForm
      }
    },
    methods: {
      ...mapActions('accountModule', ['login', 'logout']),
      handleSubmit(): void {
        if (this.vLoginForm.validate()) {
          const { userLogin: { email: user, password } } = this;
          this.login({ user, password })
        }
      }
    }
  });
</script>
