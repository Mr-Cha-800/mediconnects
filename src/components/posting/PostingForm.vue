<template>
  <q-form @submit.prevent="submitProfile" ref="updateForm">
    <NavBanner>
      <slot name="action"><span class="text-h4 center-post-label absolute text-primary">Profile Post</span></slot>
    </NavBanner>
    <div class="q-ma-md">
      <q-select 
        v-model="sectionGroup" 
        :options="filtersections" 
        label="Select Profile Section*"
        transition-show="jump-up"
        transition-hide="jump-down"
        clearable
         />
      <q-select 
        v-model="organization" 
        :options="organizations" 
        label="Post in Organization"
        transition-show="jump-up"
        transition-hide="jump-down"
        emit-value
        map-options
        clearable
         />
      <q-select 
        v-model="connection" 
        :options="connections" 
        label="Send to connection"
        transition-show="jump-up"
        transition-hide="jump-down"
        emit-value
        map-options
        clearable
         />

    </div>
    <q-item>
      <q-item-section>
        <q-input
          class="full-width"
          placeholder="Say something..."
          rows="10"
          v-model="payload.title"
          type="text"
        />
      </q-item-section>

    </q-item>
    <div class="full-width">
         <q-card flat>
            <q-card-section>
              <q-input
                v-model="payload.description"
                class="full-width"
                placeholder="Add a description..."
                type="textarea"
              />
            </q-card-section>
          </q-card>
    </div>
    <PostMediaSelection @streamSelected="streamSelected"/>

    <q-item class="q-pa-sm">
      <q-item-section class="q-pa-md">
        <q-btn type="submit" label="Post" @click="submitPost" color="primary" >
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Posting...
          </template>
        </q-btn>
      </q-item-section>
    </q-item>
  </q-form>
</template>
<script lang="ts">
  import Vue from 'vue';
  import PostingState from 'components/common/PostingState.vue';

  import { VForm } from 'src/types';
  import { mapActions,mapGetters } from 'vuex';
  import { validateRequired } from 'src/formValidators';
  import { PostingRequestInterface, PostingTypesEnum } from 'src/store/posting/state';
  import AddUserIdtoPost from 'components/posting/AddUserIdtoPost.vue';
  import AddOrgIdtoPost from 'components/posting/AddOrgIdtoPost.vue';
  import PostMediaSelection from 'components/posting/PostMediaSelection.vue';
  import NavBanner from 'components/common/NavBanner.vue';
  import { OrgSearchQueryInterface, OrgSearchScopeEnum } from 'src/services/organisations.service';

  export default Vue.extend({
    name: 'PostingForm',
    components: { AddUserIdtoPost, AddOrgIdtoPost, PostMediaSelection, PostingState, NavBanner },
    props: {
      profile: {
        type: Object,
        default: (): Record<string, unknown> => ({}),
      },
      submitting: {
        type: Boolean,
        default: (): boolean => false,
      },
      type:{
        type: String,
        required: true
      }
    },
    data() {
        const payload: PostingRequestInterface = {
        type: PostingTypesEnum.TEXT,
        title: '',
        description: '',
      };
      return {
        postType: 'users',
        imageStream: null,
        videoStream: null,
        payload,
        sectionGroup:'',
        organization:'',
        connection:''
      }
    },
    computed: {
      ...mapGetters('orgProfileModule',['getOrgs']),
      ...mapGetters('userProfileModule',['filtersections','users']),
      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm
      },
      organizations(){
        return this.getOrgs.map((o : { name:string,id:string }) => { return { label:o!.name,value:o!.id }});
      },
      connections(){
        return this.users.map((o :Record<string,string>) =>{ return { label:o!.firstname + o!.lastname, value:o!.id }} )
      }
    },
    methods: {
      ...mapActions('postingModule', ['addPost']),
      ...mapActions('orgProfileModule', ['search']),
      validateRequired: validateRequired,
      submitProfile(): void {
        if (this.vUpdateForm.validate()) {
          this.$emit('submit', { profile: this.$props.profile });
        }
      },
      streamSelected({ mediaSource, type }: { mediaSource?: File, type: PostingTypesEnum }): void {
        this.payload = { ...this.payload, mediaSource, type };
      },
      submitPost() {
        this.addPost(this.payload)
        this.payload = {
          type: PostingTypesEnum.TEXT,
          title: '',
          description: '',
        };
      }
    },
    mounted(){
      this.search({ scope: OrgSearchScopeEnum.ACCOUNT });
    }
  });
</script>
<style lang="scss" scoped>
.center-post-label{
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>