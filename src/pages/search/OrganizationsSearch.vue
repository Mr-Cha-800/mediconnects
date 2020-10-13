<template>
  <State :status="status" :empty="!getOrgs.length">
    <q-card flat>
      <q-list bordered>
        <template v-for="org in getOrgs">
          <PublicOrganizationTile :org="org"/>
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
  import PublicOrganizationTile from 'components/public/PublicOrganizationTile.vue';

  export default Vue.extend({
    name: 'OrganizationsSearch',
    components: { State, PublicOrganizationTile },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status'])
    }
  });
</script>
