<template>
  <q-form @submit.prevent="submitPost" ref="updateForm">
    <NavBanner>
      <slot name="action"><span class="text-h4 center-post-label absolute text-primary">{{ postType === 'profile'?'Profile Post':(postType === 'feed')?'Create Post': false }}</span></slot>
    </NavBanner>
    <div class="q-ma-md">
      <q-select
        v-model="postDetails.sectionGroup"
        :options="sectionGroups"
        label="Select Profile Section"
        class="requiredAsterik"
        transition-show="jump-up"
        transition-hide="jump-down"
        v-if=" postType === 'profile'"
        emit-value
        map-options
        clearable
        ref="stupid"
        :rules="[ val => val && val.length > 0 || 'Profile Section is required']"
         />
      <q-select
        v-model="organization"
        :options="organizations"
        label="Post in Organization"
        transition-show="jump-up"
        transition-hide="jump-down"
        emit-value
        v-if="postType !== 'profile'"
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
        v-if="postType !== 'profile' "
         />

    </div>
    <q-item>
      <q-item-section>
        <q-input
          class="full-width"
          placeholder="Say something..."
          rows="10"
          v-model="postDetails.title"
          type="text"
        />
      </q-item-section>

    </q-item>
    <div class="full-width">
         <q-card flat>
            <q-card-section>
              <q-input
                v-model="postDetails.description"
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
        <q-btn  label="Post" @click="submitPost" color="primary" >
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
    data() {
      return {
        postType: 'profile',
        imageStream: null,
        videoStream: null,
        //single or muliple
        organization:'',
        connection:'',
        //
        postDetails:{
          type: PostingTypesEnum.TEXT,
          title: '',
          description: '',
          organizations:[],
          sectionGroup:'',
        }
      }
    },
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
    computed: {
      ...mapGetters('orgProfileModule',['getOrgs']),
      ...mapGetters('userProfileModule',['getSectionGroups','users']),

      vUpdateForm(): VForm {
        return this.$refs.updateForm as VForm;
      },
      organizations(): Record<string, unknown> {
        return this.getOrgs.map((o : { name:string,id:string }) => { return { label:o!.name,value:o!.id }});
      },
      connections(): Record<string, unknown> {
        return this.users.map((o :Record<string,string>) =>{ return { label:o!.firstname + o!.lastname, value:o!.id }} )
      },
      sectionGroups(): Record<string, unknown> {
        return this.getSectionGroups.map((o:Record<string,string>) => {return { label:o!.name ,value:o!.id }})
      }
    },
    methods: {
      ...mapActions('postingModule', ['addPost','addProfilePost']),
      ...mapActions('orgProfileModule', ['search']),
      validateRequired: validateRequired,
      submitProfile(): void {
        if ((this.vUpdateForm as VForm).validate()) {
          this.$emit('submit', { profile: this.$props.profile });
        }
      },
      streamSelected({ mediaSource, type }: { mediaSource?: File, type: PostingTypesEnum }): void {
        // @ts-ignore
        this.postDetails = { ...this.postDetails as PostingRequestInterface, mediaSource, type };
      },
      submitPost(): void {
        if((this.vUpdateForm as VForm).validate()){
          (this.postDetails.organizations as string[]).push(this.organization);
            //@ts-ignore
            this.postType ==='profile' ? this.addProfilePost(this.postDetails) : this.addPost(this.postDetails);
            this.organization = '';
            this.postDetails = {
              type: PostingTypesEnum.TEXT,
              title: '',
              description: '',
              organizations:[],
              sectionGroup:''
            };
              (this.vUpdateForm as VForm).resetValidation();
              // @ts-ignore
              this.postDetails.sectionGroup = this.filtersections[1];
              this.$q.notify({
                message: 'Post Successful',
                icon: 'check',
                color:'primary',
              })
        }
      }
    },
    mounted(): void {
      //@ts-ignore
      this.search({ scope: OrgSearchScopeEnum.ACCOUNT });
      var routeParam=this.$route.params.type;
      if(routeParam === 'profile' || routeParam === 'feed')
      this.postType=routeParam;
      else
      alert('HMPH :/');
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
<style lang="scss">
.requiredAsterik .q-field__label::after{
  content: '*';
  color: red;
}
</style>
