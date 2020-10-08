<template>
  <div>
    <q-item>
      <q-item-section class="q-ml-none" avatar>
        <q-avatar size="6rem" square>
          <q-img
            :src="avatar"/>
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
      <q-item-section side>
        <q-btn no-caps size="md" flat color="primary" @click="acceptConnect($props.connectRequest.id)">
          Accept
        </q-btn>
      </q-item-section>
      <q-item-section side>
        <q-btn no-caps size="md" flat color="negative" @click="rejectConnect($props.connectRequest.id)">
          Reject
        </q-btn>
      </q-item-section>
    </q-item>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import { date } from 'quasar'
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import { mapActions } from 'vuex';

  export default Vue.extend({
    name: 'ConnectRequestTile',
    props: {
      connectRequest: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {};
    },
    computed: {
      avatar() {
        return avatarMediaObject(this.$props.connectRequest.createdBy.avatar);
      }
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
