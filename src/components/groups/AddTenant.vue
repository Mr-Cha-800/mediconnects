<template>
  <div class="flex q-pa-md">
        <div class="q-gutter-md row">
        <q-btn flat>
        <q-icon name="groups" v-if="type === 'user'" color="primary"></q-icon>
        <q-icon name="apartment" v-else color="primary"></q-icon>
        <q-menu>
            <q-list>
            <q-item clickable v-close-popup @click="type ='user'">
                <q-item-section avatar>
                <q-avatar icon="groups" text-color="primary"/>
                </q-item-section>
                <q-item-section>
                <q-item-label>Profiles</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="type = 'organization'">
                <q-item-section avatar>
                <q-avatar icon="apartment" text-color="primary"/>
                </q-item-section>
                <q-item-section>
                <q-item-label>Organizations</q-item-label>
                </q-item-section>
            </q-item>
            </q-list>
        </q-menu>
        </q-btn>
          <q-select
            v-if="type === 'organization'"
            v-model="tenantID"
            :options="option"
            option-value="id"
            option-label="name"
            hint="Search organization"
            emit-value
            map-options
            @filter="filterFn"
            use-input
            input-debounce="0"
            style="min-width: 250px; max-width: 300px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            v-if="type === 'user'"
            v-model="tenantID"
            :options="option"
            option-value="id"
            option-label="name"
            hint="Search user"
            emit-value
            map-options
            @filter="filterFn"
            use-input
            input-debounce="0"
            style="min-width: 250px; max-width: 300px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <q-btn  rounded class="q-ml-auto" color="primary" icon="done" @click="addtenant"/>
      </div>
</template>

<script lang="ts">
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
    name: 'AddTenant',
    data() {
      return {
      type: 'user',
      tenantID: null,
      options: stringOptions
      };
    },
    created() {
      this.getGroups({
        scope: 'account'
      })
    },
    computed: {
      option(){
          return this.groups()
      }
    },
    methods: {
      ...mapGetters('GroupsModule', ['groups', 'status']),
      ...mapActions('GroupsModule', ['addTenant', 'getTenants', 'getGroups']),
      addtenant(){
        this.addTenant({
          groupId: this.$route.params.groupId,
          payload: {
              tenant: this.tenantID,
              type: this.type
          }
        }).then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      },

    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
    }
  });
</script>

<style>

</style>