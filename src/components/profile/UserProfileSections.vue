<template>
  <div>
    <q-chip
      :outline="!isActive('All')"
      size="1rem"
      :color="isActive('All') ? 'primary' : 'grey-8'"
      :outline-color="isActive('All') ? 'primary' : 'grey-8'"
      clickable
      :text-color="isActive('All') ? 'white' : ''"
      @click="toggleAllSection"
    >All
    </q-chip>
    <q-chip
      v-for="section in sections"
      :key="section.id"
      :outline="!isActive(section.name)"
      size="1rem"
      :color="isActive(section.id) ? 'primary' : 'grey-8'"
      :outline-color="isActive(section.id) ? 'primary' : 'grey-8'"
      clickable
      :text-color="isActive(section.id) ? 'white' : ''"
      @click="toggleSection(section.id)"
    >{{section.name}}
    </q-chip>
    <q-btn color="primary" class="q-mx-sm" unelevated  size="md" rounded icon="add"  @click="editMode=true" />
    <q-dialog v-model="editMode" persistent>
      <q-card class="q-pa-md" style="width:50%">
        <q-card-section class="row items-center">
          <div class="text-h6 text-primary">New section group</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-input 
            v-model="newSectionGroup" 
            type="text" 
            label="Name"
            :rules="[ val => val && val.length > 0 || 'field cannot be empty']"
            lazy-rules
            ref="newGroup"
             />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat color="negative" label="Cancel" v-close-popup />
          <q-btn  flat color="primary" label="Add group"  @click="addNewSectionGroup" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
        newSectionGroup: '',
        editMode: false,
        Experience: true,
      };
    },
    computed:{  
      sections():Record<string,string>[]{
        
        return this.$props.userSections;
      }
    },
    methods: {
      ...mapGetters('userProfileModule', ['filtersections']),
      ...mapActions('userProfileModule', ['filterSectionss','addSectionGroup'] ),
      isActive(sectionName: string): boolean {
        if(sectionName == "All")
        {
         return this.filtersections().length == this.sections.length ? true : false;
        }
        return this.filtersections().includes(sectionName.toLowerCase());
      },
      setSection(sectionName: string): void {
        // this.activeSection = sectionName
        // this.filterSectionss(this.activeSection)
      },
      resetSection(): void {
        this.newSectionGroup = '';
        this.editMode = false;
      },
      addNewSectionGroup(): void {
        if(this.$refs.newGroup.validate())
        {
          this.addSectionGroup( this.newSectionGroup );
          this.resetSection();
        }
      },
      toggleSection(sectionName: string){
        var filteredSections : string[]=this.filtersections();
        filteredSections.includes(sectionName) ? 
        this.filterSectionss(filteredSections.filter(sec => sec !== sectionName)) :
        this.filterSectionss([...filteredSections,sectionName]);
      },
      toggleAllSection(){
        this.filtersections().length != this.sections.length ? this.filterSectionss([...this.sections.map((o ) => o!.id)]) : this.filterSectionss([]);
      }
    }
  });
</script>
