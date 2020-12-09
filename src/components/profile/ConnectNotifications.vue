<template>
    <q-btn round dense :to="{name: 'UserConnectRequests'}" flat icon="notifications">
        <q-badge color="red" text-color="white" floating>
            {{userConnectsRequests.length}} 
        </q-badge>
        <q-tooltip>Notifications</q-tooltip>
    </q-btn>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapActions, mapGetters } from 'vuex';
    import { mapCacheActions } from 'vuex-cache';
    export default Vue.extend({
    computed: {
      ...mapGetters('followConnectModule', ['userConnectsRequests', 'status'])
    },
    methods: {
      ...mapCacheActions('followConnectModule', ['getConnectRequests'])
    },
    created() {
      this.getConnectRequests();
    }
    });
</script>

<style>

</style>