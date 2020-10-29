<template>
  <div>
    <q-dialog v-model="postingStatus.loading" seamless position="bottom">
      <q-card style="width: 350px">
        <q-card-section class="row no-wrap">
          <div>
            <div class="text-weight-bold" v-if="loadingDetails.type === 'section'"> Your section is being updated...</div>
            <div class="text-weight-bold" v-else-if="loadingDetails.type === 'org'"> Your organization is being updated...</div>
            <div class="text-weight-bold" v-else-if="loadingDetails.type === 'group'">Your group is being updated...</div>
            <div class="text-weight-bold" v-else-if="loadingDetails.type === 'post'"> Your post is going global...</div>
            <div class="text-weight-bold" v-else-if="loadingDetails.type === 'profile'">Your profile is being updated...</div>
            <div class="text-grey" v-if="postingContent.title">{{postingContent.title}}</div>
          </div>

          <q-space />

          <Loader />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">

  import { mapGetters } from 'vuex';
  import Loader from 'components/common/Loader.vue';

  export default {
    name: 'PostingState',
    components: { Loader },
    computed: {
      ...mapGetters('postingModule', ['postingStatus', 'postingContent']),
    },
    props: {
      loadingDetails: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
