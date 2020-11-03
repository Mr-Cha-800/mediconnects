<template>
<div>
  <q-item clickable >
    <q-item-section class="q-ml-none" avatar>
      <q-avatar size="6rem" square>
        <AvatarMedia :content="$props.tenant.avatar"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        <span class="text-h6 text-grey-6">{{$props.tenant.firstName}}  {{$props.tenant.lastName}}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <span class="text-body1 text-grey-6">{{$props.tenant.description}}</span>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <DeleteTenant  :idTenant="$props.tenant.id" :idGroup="$route.params.groupId"/>
      </div>
    </q-item-section>
  </q-item>

</div>

</template>

<script lang="ts">
  import DeleteTenant from 'components/groups/DeleteTenant.vue';
  import AvatarMedia from 'components/common/media/AvatarMedia.vue';
  export default {
    name: 'TenantsTile',
    components: { DeleteTenant, AvatarMedia },
    props: {
      tenant: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
