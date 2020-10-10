<template>
  <q-card flat>
    <State :status="status" :empty="!getOrgs.length">
      <q-list bordered>
        <template v-for="org in getOrgs">
          {{org}}
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
  import { OrgSearchScopeEnum } from 'src/services/organisations.service';

  export default Vue.extend({
    name: 'OrganizationsSearch',
    components: { State },
    methods: {
      ...mapActions('orgProfileModule', ['search'])
    },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status'])
    },
    created() {
      const { $route: { query: { q: keyword = '' } = {} } = {} } = this;
      this.search({
        keyword,
        scope: OrgSearchScopeEnum.PUBLIC
      });
    }
  });
</script>
