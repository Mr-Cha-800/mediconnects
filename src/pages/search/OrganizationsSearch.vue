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
  import { mapGetters } from 'vuex';
  import State from 'components/common/State.vue';

  export default Vue.extend({
    name: 'OrganizationsSearch',
    components: { State },
    computed: {
      ...mapGetters('orgProfileModule', ['getOrgs', 'status'])
    },
  });
</script>
