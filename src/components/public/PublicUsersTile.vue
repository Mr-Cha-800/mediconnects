<template>
  <q-item clickable :to="{ name: 'UserProfile', params: { userId: $props.user.id } }">
    <q-item-section class="q-ml-none" avatar>
      <q-avatar size="6rem" square>
        <q-img
          :src="avatar"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">
        <span class="text-h6 text-grey-6">{{$props.user.firstName}} {{$props.user.lastName}}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <span class="text-body1 text-grey-6">{{$props.user.description}}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <span class="text-body2 text-grey-6" v-if="$props.user.followers">{{$props.user.followers}} Followers,</span>
        <span class="text-body2 text-grey-6" v-if="$props.user.posts">{{$props.user.posts}} Posts</span>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
    </q-item-section>
  </q-item>
</template>

<script>

  import { avatarMediaObject } from 'src/helpers/parseMediaOject';

  export default {
    name: 'PublicUsersTile',
    props: {
      user: {
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
        return avatarMediaObject(this.$props.user.avatar);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
