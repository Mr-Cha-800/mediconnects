<template>
  <div class="q-pa-sm">
    <q-item class="flex fit justify-start items-center">
      <div class="q-pr-lg q-pr-xl-md">
        <q-avatar size="8rem">
          <q-img :src="avatar" height="100%"/>
        </q-avatar>
      </div>
      <div class="self-center">
        <q-item-label>
          <span class="text-h5 text-primary">{{group.name}}</span>
        </q-item-label>
        <q-item-label caption lines="3">
          <span class="text-body1">
            {{group.description}}
          </span>
        </q-item-label>
        <q-item-label>
          <div class="q-mt-md">
            <q-btn
              no-caps
              outline
              color="primary"
              @click="sendPM = true">
              <span>
                 Message
              </span>
            </q-btn>
          </div>
        </q-item-label>
      </div>
    </q-item>
    <q-item>
      <q-item-label caption>
        <div v-if="sendPM">
          <form
            @submit.prevent.stop="onPmSubmit"
            @reset.prevent.stop="onReset"
            class="q-gutter-md q-pt-md row"
          >
            <div class="col-12">
              <q-input
                dense
                filled
                autofocus
                clearable
                type="textarea"
                v-model="pm"
                label="Say Hello"
                ref="pmInput"
                lazy-rules
                :rules="[ val => !!val || 'Please type your message']"
              />
            </div>

            <div class="col-12 text-right">
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
              />
              <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm"/>
            </div>
          </form>
        </div>
      </q-item-label>
    </q-item>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { avatarMediaObject } from 'src/helpers/parseMediaOject';
  import * as CometChat from 'src/services/cometChat.service';

  export default Vue.extend({
    name: 'GroupHeader',
    props: {
      group: {
        type: Object,
        default: (): Record<string, unknown> => ({})
      }
    },
    data() {
      return {
        sendPM: false,
        showMessage: false,
        message: '',
        pm: ''
      };
    },
    methods: {
      onReset() {
        this.pm = '';
        this.showMessage = false;
      },
      onPmSubmit() {
        if ((this.$refs.pmInput as any).validate()) {
          this.sendPM = false;
          CometChat.sendGroupMessage({
            receiverID: this.$props.group.id,
            messageText: this.pm,
          });
          this.onReset();
        }
      }
    },
    computed: {
      avatar(): string {
        return avatarMediaObject(this.$props.group.avatar);
      }
    }

  });
</script>
