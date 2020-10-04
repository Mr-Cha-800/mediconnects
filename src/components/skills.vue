<template>
    <div>
        <q-chip outline color="grey-5" clickable  text-color="white">All</q-chip>
        <q-chip removable v-model="Experience" outline color="grey-8" clickable  text-color="white">Experience</q-chip>
        <q-chip  color="teal" clickable  text-color="white">Education</q-chip>
        <q-chip  outline color="grey-8" clickable  text-color="white">Companies</q-chip>
        <q-chip  outline color="grey-8" clickable  text-color="white">Family</q-chip>
        <q-chip outline color="grey-8" clickable  text-color="white">Music</q-chip>
        <q-btn outline round @click="prompt = true" color="grey-8" size="sm" icon="add" />
        <q-dialog v-model="prompt" persistent>
      <q-card class="" style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Add skill</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense color="white" text-color="white" v-model="skill" autofocus @keyup.enter="submitskill" />
        </q-card-section>

        <q-card-actions align="right" class="q-pt-none float-right ">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat @click="submitskill" label="Add " v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'skills',
  components: {   },
  data() {
    return {
        skill: null,
        prompt: false,
        Experience: true
    }
  },
  methods:{
    submitskill(){
        //use this method to send to database
      this.prompt = false
      this.skill = null
      this.$q.notify({
          progress: true,
          color: 'teal-6',
          textColor: 'white',
          icon: 'done',
          message: ' Skill added'
        })
    }
  }

});
</script>