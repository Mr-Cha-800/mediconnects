<template>
<div>
  <q-item clickable >
    <q-item-section class="q-ml-none" avatar>
      <q-avatar size="6rem" square>
        <q-img
          :src="avatar"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        <span class="text-h6 text-grey-6">{{$props.org.name}}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <span class="text-body1 text-grey-6">{{$props.org.description}}</span>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <DeleteTenant  :id="$props.org.id"/>
      </div>
    </q-item-section>
  </q-item>

</div>

</template>

<script>
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import { mapActions } from 'vuex';
  import DeleteTenant from 'components/groups/DeleteTenant.vue';
  import UpdateGroup from 'components/groups/UpdateGroup.vue';
  export default {
    name: 'OrganizationTile',
    components: { DeleteTenant },
    props: {
      org: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
      };
    },
    computed: {
      avatar() {
        return avatarMediaObject(this.$props.org.avatar);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
