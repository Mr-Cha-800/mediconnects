<template>
  <q-card flat>
    <State :status="userStatus" :empty="!users.length">
      <q-list bordered>
        <template v-for="user in users">
          {{user}}
          <q-separator/>
        </template>
      </q-list>
    </State>
  </q-card>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'ProfilesSearch',
    components: { State },
    computed: {
      ...mapGetters('userProfileModule', ['users', 'userStatus'])
    }
  });
</script>
