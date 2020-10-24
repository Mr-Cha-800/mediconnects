<template>
  <div>
    <q-chip
      :outline="!isActive('')"
      size="1rem"
      :color="isActive('') ? 'primary' : 'grey-8'"
      :outline-color="isActive('') ? 'primary' : 'grey-8'"
      clickable
      :text-color="isActive('') ? 'white' : ''"
      @click="setSection('')"
    >All
    </q-chip>
    <q-chip
      v-for="section in sections"
      :outline="!isActive(section.name)"
      size="1rem"
      :color="isActive(section.name) ? 'primary' : 'grey-8'"
      :outline-color="isActive(section.name) ? 'primary' : 'grey-8'"
      clickable
      :text-color="isActive(section.name) ? 'white' : ''"
      @click="setSection(section.name)"
    >{{section.name}}
    </q-chip>

    <!--<q-btn outline round @click="editMode = true" color="grey-8" size="sm" icon="add"/>
    <q-form @submit.prevent="addSection" ref="addSectionForm" v-if="editMode" class="row">
      <q-input bottom-slots v-model="newSection" placeholder="Add Section" autofocus class="col-6" />
      <div class="col-6 flex row items-center">
        <q-btn flat label="Save" type="submit"/>
        <q-btn flat label="Cancel" @click="resetSection()" />
      </div>
    </q-form>-->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters,mapActions } from 'vuex';
  export default Vue.extend({
    name: 'UserProfileSections',
    props: {
      userSections: {
        type: Array,
        default: (): Record<string, unknown>[] => ([])
      },
    },
    components: {},
    data() {
      const sections: Record<string, unknown>[] = [];
      return {
        sections,
        newSection: '',
        editMode: false,
        Experience: true,
        activeSection: '',
      };
    },
    methods: {
      ...mapGetters('userProfileModule', ['filtersections']),
      ...mapActions('userProfileModule', ['filterSectionss'] ),
      isActive(sectionName: string): boolean {
        return this.activeSection === sectionName;
      },
      setSection(sectionName: string): void {
        this.activeSection = sectionName
        this.filterSectionss(this.activeSection)
      },
      resetSection(): void {
        this.newSection = '';
        this.editMode = false;
      },
      addSection(): void {
        if (this.newSection) {
          this.sections.push({
            name: this.newSection,
          });
          this.resetSection();
        }
      }
    },
    mounted() {
      this.sections = [...this.$props.userSections];
    }
  });
</script>
