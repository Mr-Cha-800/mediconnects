<template>
  <q-item clickable :to="{ name: 'organizationProfile', params: { orgId: $props.org.id } }">
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
      <q-checkbox size="md" v-model="isSelected" color="primary" @click.stop="isSelected = !isSelected"/>
    </q-item-section>
    <q-item-section side>
      <q-btn size="md" flat rounded color="primary" @click="(e) => {e.preventDefault(); $router.push({name: 'EditOrganization', params: { orgId: $props.org.id }})}">
        <q-icon name="edit"></q-icon>
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script>

  import { avatarMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'OrganizationTile',
    props: {
      org: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        isSelected: false
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
