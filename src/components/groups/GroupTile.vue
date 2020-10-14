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
        <span class="text-h4 text-grey-6">{{$props.group.name}}</span>
      </q-item-label>
      <q-item-label lines="1">
        <span class="text-body1 text-grey-6">{{$props.group.description}}</span>
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label caption lines="1">
        <span class="text-body1 text-grey-6">{{$props.group.tenants}} Tenants</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <span class="text-body2 text-grey-6">Created By: {{$props.group.createdBy.firstName}} {{$props.group.createdBy.lastName}}</span>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn size="md" flat dense round icon="more_vert" @click="(e) => {e.preventDefault();}">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup :to="{name: 'groupEdit', params: { groupId: $props.group.id }}">
                <q-item-section>Edit Group</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'groupTenants', params: { groupId: group.id, groupName: group.name } }">
                <q-item-section>Group Tenants</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="deletegroupp">
                <q-item-section class="text-negative">Delete group</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-item-section>
  </q-item>

</div>

</template>

<script>
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import { mapActions } from 'vuex';
  export default {
    name: 'OrganizationTile',
    components: {  },
    props: {
      group: {
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
        return avatarMediaObject(this.$props.group.avatar);
      }
    },
    methods: {
      ...mapActions('GroupsModule', ['deleteGroup']),
      deletegroupp(){
        this.deleteGroup({
          id: this.org.id
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
