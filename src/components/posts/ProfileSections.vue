<template>
  <div>
    <div v-for="{ section } in profile.sections" :key="section.id">
      <q-card flat square class="q-mt-md">
        <TextCard v-if="section.type === postingTypes.TEXT" :post="section"/>
        <ImageCard v-if="section.type === postingTypes.IMAGE" :post="section"/>
        <div class="absolute-right">
          <q-btn flat round color="primary" icon="keyboard_arrow_up"/>
          <q-btn flat round color="primary" @click="$router.push({ name: 'EditSection', params: { sectionId: section.id } })" icon="edit"/>
          <q-btn flat round color="primary" icon="keyboard_arrow_down"/>
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
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'ProfileSections',
    components: { TextCard, ImageCard },
    computed: {
      ...mapGetters('userProfileModule', ['profile']),
      postingTypes: () => PostingTypesEnum
    }
  });
</script>
