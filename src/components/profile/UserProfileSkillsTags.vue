<template>
  <div>
    <q-chip
      v-for="skill in skills"
      :outline="!skill.active"
      size="1rem"
      :color="skill.active ? 'primary' : 'grey-8'"
      :outline-color="skill.active ? 'primary' : 'grey-8'"
      clickable
      :text-color="skill.active ? 'white' : ''"
    >{{skill.name}}
    </q-chip>

    <q-btn outline round @click="prompt = true" color="grey-8" size="sm" icon="add"/>
    <q-dialog v-model="prompt" persistent>
      <q-card class="" style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Add skill</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense color="white" text-color="white" v-model="newSkill" autofocus @keyup.enter="submitskill"/>
        </q-card-section>

        <q-card-actions align="right" class="q-pt-none float-right ">
          <q-btn flat label="Cancel" v-close-popup/>
          <q-btn flat @click="submitskill" label="Add " v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'UserProfileSkillsTags',
    components: {},
    data() {
      return {
        newSkill: null,
        prompt: false,
        Experience: true,
        skills: [
          {
            name: 'All',
            active: false
          },
          {
            name: 'Experience',
            active: false
          },
          {
            name: 'Education',
            active: true
          },
          {
            name: 'Companies',
            active: false
          },
          {
            name: 'Family',
            active: false
          },
          {
            name: 'Music',
            active: false
          }
        ]
      };
    },
    methods: {
      submitskill() {
        //use this method to send to database
        this.prompt = false;
        this.newSkill = null;
        this.$q.notify({
          progress: true,
          color: 'teal-6',
          textColor: 'white',
          icon: 'done',
          message: ' Skill added'
        });
      }
    }

  });
</script>
