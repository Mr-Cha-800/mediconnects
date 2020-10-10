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
  import { mapActions, mapGetters } from 'vuex';
  import State from 'components/common/State.vue';
  import { UsersSearchScopeEnum } from 'src/services/userProfile.service';

  export default Vue.extend({
    name: 'ProfilesSearch',
    components: { State },
    methods: {
      ...mapActions('userProfileModule', ['search'])
    },
    computed: {
      ...mapGetters('userProfileModule', ['users', 'userStatus'])
    },
    created() {
      const { $route: { query: { q: keyword = '' } = {} } = {} } = this;
      this.search({
        keyword,
        scope: UsersSearchScopeEnum.PUBLIC
      });
    }
  });
</script>
