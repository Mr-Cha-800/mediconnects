<template>
  <div class="q-mb-md">
    <div v-for="{ section, id } in filtersections" :key="section.id">
      <q-card flat square class="q-mt-md q-py-lg">
        <TextCard v-if="section.type === postingTypes.TEXT" :post="section"/>
        <ImageCard v-if="section.type === postingTypes.IMAGE" :post="section"/>
        <VideoCard v-if="section.type === postingTypes.VIDEO" :post="section"/>
        <AudioCard v-if="section.type === postingTypes.AUDIO" :post="section"/>
        <div class="absolute-right">
          <!--<MoveUpSection :id="id" />-->
          <q-btn flat round color="primary" @click="$router.push({ name: 'EditSection', params: { Id: id, sectionId: section.id } })" icon="edit">
            <q-tooltip>Edit</q-tooltip>
          </q-btn>
          <!--<MoveDownSection :id="id"  />-->
          <DeleteSection :sectionId="id"/>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { PostingTypesEnum } from 'src/store/posting/state';
  import TextCard from 'components/posts/TextCard.vue';
  import ImageCard from 'components/posts/ImageCard.vue';
  import DeleteSection from 'components/posts/DeleteSection.vue';
  import MoveUpSection from 'components/posts/MoveUpSection.vue';
  import MoveDownSection from 'components/posts/MoveDownSection.vue';
  import { mapGetters } from 'vuex';
  import VideoCard from 'components/posts/VideoCard.vue';
  import AudioCard from 'components/posts/AudioCard.vue';

  export default Vue.extend({
    name: 'ProfileSections',
    components: { TextCard, ImageCard, VideoCard, AudioCard, DeleteSection, MoveUpSection, MoveDownSection },
    computed: {
      ...mapGetters('userProfileModule', ['profile', 'filtersections']),
      postingTypes: () => PostingTypesEnum
    }
  });
</script>
