<template>
  <div>
    <q-item :to="{name: 'UserProfile', params: { userId:  $props.connectRequest.createdBy.id}}">
      <q-item-section class="q-ml-none" avatar>
        <q-avatar size="6rem" square>
          <AvatarMedia :content="$props.connectRequest.createdBy.avatar"/>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <div class="flex fit row items-center">
            <span class="text-h6 text-grey-6 q-mr-sm">
            {{$props.connectRequest.createdBy.firstName}} {{$props.connectRequest.createdBy.lastName}}
          </span>
            <span class="text-body2 text-grey-6">
            {{this.formatDate($props.connectRequest.timestamp)}}
          </span>
          </div>

        </q-item-label>
        <q-item-label caption>
          <q-icon name="mail" size="sm" color="text-grey q-mr-sm"></q-icon>
          <span class="text-body1 text-grey-6">{{$props.connectRequest.data.message}}</span>
        </q-item-label>
      </q-item-section>
      <q-item-section side class="xs-hide" @click="(e) => {e.preventDefault();}">
        <q-btn
          no-caps
          size="md"
          flat color="primary"
          @click="acceptConnect($props.connectRequest.id)"
          :disable="status.accepting"
          :loading="status.accepting"
        >
          Accept
        </q-btn>
      </q-item-section>
      <q-item-section side class="xs-hide" @click="(e) => {e.preventDefault();}">
        <q-btn
          no-caps
          size="md"
          flat
          color="negative"
          @click="rejectConnect($props.connectRequest.id)"
          :disable="status.rejecting"
          :loading="status.rejecting"
        >
          Reject
        </q-btn>
      </q-item-section>
    </q-item>
    <q-item class="xs" @click="(e) => {e.preventDefault();}">
      <q-item-section>
        <q-btn no-caps size="md" flat color="primary" @click="acceptConnect($props.connectRequest.id)">
          Accept
        </q-btn>
      </q-item-section>
      <q-item-section>
        <q-btn no-caps size="md" flat color="negative" @click="rejectConnect($props.connectRequest.id)">
          Reject
        </q-btn>
      </q-item-section>
    </q-item>
    <div class="q-mb-md flex row items-center justify-center" v-if="status.error">
      <q-icon name="error_outline" color="negative" class="q-mr-sm"></q-icon>
        <span class="text-negative text-body2">{{status.error}}</span>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { date } from 'quasar'
  import { mapActions, mapGetters } from 'vuex';
  import AvatarMedia from 'components/common/media/AvatarMedia.vue';

  export default Vue.extend({
    name: 'ConnectRequestTile',
    props: {
      connectRequest: {
        type: Object,
        default: (): Record<string, unknown> => ({})
      }
    },
    components: { AvatarMedia },
    data() {
      return {};
    },
    computed: {
      ...mapGetters('followConnectModule', ['requestStatus']),
      status(): Record<string, unknown> {
        return this.requestStatus(this.$props.connectRequest.id) || {}
      },
    },
    methods: {
      ...mapActions('followConnectModule', ['acceptConnect', 'rejectConnect']),
      formatDate(stringDate: string) {
        return date.formatDate(stringDate, ' Do MMM, YY ha');
      },
    }
  });
</script>

<style lang="scss" scoped>
</style>
