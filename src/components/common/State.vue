<template>
  <div>
    <template v-if="status.error">
      <ErrorState>{{status.error}}</ErrorState>
    </template>
    <template v-if="status.loading">
      <Loader />
    </template>
    <template v-else-if="empty">
      <EmptyState />
    </template>
    <slot v-if="!status.loading && !empty" />
  </div>
</template>

<script>

  import Loader from './Loader';
  import ErrorState from './ErrorState';
  import EmptyState from 'components/common/EmptyState';

  export default {
    name: 'State',
    props: {
      status: {
        type: Object,
        default: () => ({})
      },
      empty: {
        type: Boolean,
        default: () => false,
      }
    },
    components: { Loader, ErrorState, EmptyState }
  };
</script>

<style lang="scss" scoped>
</style>
