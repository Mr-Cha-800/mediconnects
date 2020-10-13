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
        <q-btn round flat color="primary" @click="$router.push({ name: 'grouptenants', params: { groupId: org.id, groupName: org.name } })" icon="groups">
            <q-tooltip>Tenants</q-tooltip>
        </q-btn>
        <UpdateGroup  :id="$props.org.id" :name="$props.org.name"/>
        <DeleteGroup  :id="$props.org.id"/>
      </div>
    </q-item-section>
  </q-item>

</div>

</template>

<script>
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import { mapActions } from 'vuex';
  import DeleteGroup from 'components/groups/DeleteGroup.vue';
  import UpdateGroup from 'components/groups/UpdateGroup.vue';
  export default {
    name: 'OrganizationTile',
    components: { DeleteGroup, UpdateGroup },
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
