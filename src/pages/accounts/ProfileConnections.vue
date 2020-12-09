<template>
<State :status="userStatus" :empty="!profile.contactList.connections.length">
   <q-card flat>
      <q-list bordered>
        <template v-for="user in profile.contactList.connections">
          <PublicUsersTile :user="user" />
          <q-separator/>
        </template>
      </q-list>
    </q-card>
</State>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  import State from 'components/common/State.vue';
  import PublicUsersTile from 'components/public/PublicUsersTile.vue';

  export default Vue.extend({
    name: 'ProfilesSearch',
    components: { State, PublicUsersTile },
    methods: {
      ...mapActions('userProfileModule', ['getContacts'])
    },
    computed: {
      ...mapGetters('userProfileModule', ['users', 'userStatus', 'profile'])
    },
    created(){
        this.getContacts()
    }
  });
</script>
