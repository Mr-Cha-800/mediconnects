<template>
  <State :status="userStatus" :empty="!users.length">
    <q-card flat>
      <q-list bordered>
        <template v-for="user in users">
          {{user}}
          <q-separator/>
        </template>
      </q-list>
    </q-card>
  </State>
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
