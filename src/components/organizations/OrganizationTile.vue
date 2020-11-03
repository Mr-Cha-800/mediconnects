<template>
  <q-item clickable :to="{ name: 'organizationProfile', params: { orgId: $props.org.id } }">
    <q-item-section class="q-ml-none" avatar>
      <q-avatar size="6rem" square>
        <AvatarMedia :content="org.avatar"/>
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
        <q-checkbox size="md" v-model="isSelected" color="primary" @click.stop="isSelected = !isSelected"/>
        <q-btn size="md" flat dense round icon="more_vert" @click="(e) => {e.preventDefault();}">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup :to="{name: 'EditOrganization', params: { orgId: $props.org.id }}">
                <q-item-section>Edit Organization</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{name: 'OrganizationMembers', params: { orgId: $props.org.id }}">
                <q-item-section>Members</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">

  import AvatarMedia from 'components/common/media/AvatarMedia.vue';

  export default {
    name: 'OrganizationTile',
    props: {
      org: {
        type: Object,
        default: () => ({})
      }
    },
    components: { AvatarMedia },
    data() {
      return {
        isSelected: false
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
