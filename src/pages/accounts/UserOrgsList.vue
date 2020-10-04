<template>
  <div>
    <q-card flat>
      <div class="flex q-pa-md">
        <q-chip outline color="grey-8" clickable text-color="white">Your Orgs</q-chip>
        <q-chip color="teal" clickable text-color="white">Orgs</q-chip>
        <q-chip outline color="grey-8" clickable text-color="white">Discover</q-chip>
        <q-chip outline color="grey-8" class="q-ml-auto" text-color="white" clickable @click="prompt = true">
          <q-icon name="add" size="sm"/>
        </q-chip>
      </div>
      <q-separator/>
      <q-list bordered>
        <q-item clickable v-ripple v-for="i in [1,2,3,4,5,6,7,8,9,10]" to="/profile/organizations/0">
          <q-item-section class="q-ml-none" avatar>
            <q-avatar size="5rem" square>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///84RXVChfXn7v0cL2gpefQaLWfm6O0+g/UiM2tnmfbi5OoxP3LR09zm6vNxeZjy8vY+bcU/dNPKzdg7W6FBfOM8YKtBgOs5S4E9Y7I7V5k6VJM9Z7nR1uU5TocncOPS2u4iUagkZc0bOHwlRIogS51zgKrS4PwjWbgfRZJnlOpgaYx2m+Z0jcV1lddzh7hmjNpjfblicZ6rr8B3ovRjd6xlh86Rlq1PWYK4u8oNJmSGjKUADloAGF4AbfMABFgtVS9wAAAErklEQVR4nO3dfVfTSBTH8Q4bAiHTbSmPiquLIoJ1V3e7aymCvv93ZZvmee4ktzhlcnN+H87xH03D1wyddibAYAAAAAAAAAAAAAAAAAAAALnfNvO7W3uN4rGLwO+7ZW8Ibwk3pMuby7L3JbdlV7dXK+9MYRgsPzIPRy4Kd3dyZ7mTzORkYjqcHNa9Sr1InRaOcy/XLiper53n1LnKRENfhSZr4XFbIZG4jcL9pdUfZiJVSEZWC8uNtcCWi6hTjgsP1j4efCR8qfv65WuTf+r+r/rXalritHD/wMEDuTbSKGRCoTcoZEOhNyhkQ6E3KGRDoTcoZEOhNyhkQ6E3KGRDoTcoZEOhNyhkQ6E3z1kYU7uzG56G3OFtPOIZC+MfoelxttFZFo/EY/xoTHzGwr1QEYKNttgj8iG6XahHG5xkpAUWqpB/F8GQfoSuFyrFPofl+M4X6jnzFDNyjAooVOEe6wxj2/HdL9RT1hmmlksooFBFC8YJFoHtcAGFSjMmRdsVbCuc3gfBo//C9knx21ML42EcD53cufcrhSps+0+2TIWMQmd+rVC3TYp39mNlFLZNijPyBamowuZJ0ToVSipsnBStU6GkwqZJ0T4ViipU2npk4xWUVPjNcuC8L4Xqnp4U4/uW4+QUqjvyuLuWSyipUFPLUo1TobRCFZqvH8fNz6PSColJkV58EluogvqkeMQ5SFKhMSm2X0FxhdVJsW0qFFiowvKnG7MOEVaoy5Ni61QosVBFxaS4aJ0KRRYWezVjKpC4qp0upN745ctS1FQYEc89XS6MYuoLLd2roRaf9HxoXtguFwb0m9v1pEj8hVKDI2GFY3KBIlmWoqbC5fsreYXkItNyUqS+alcvB+QVkuN0OSmS13YgspBuoZ5Hk4VxiYXkO0CqOnnJKrGQ8S5+XZg8ishC3svPdJaUWdi8aJ9ewfSVjsxCzjjN3hoLLWwfp/ldN1ILW9fD801iqYVt4zTKH0VsYfM4DYslOLmFew27E+UbGeQWDub2cVq+GUVwof1mhMoyseRC29JhdalfcqFt+be6XSO6kF63qO3vyy6kxml9O0p2ITVO6/9EeKE5TqP6trD0wvoaqbllKr2wfpOlue0tvrC6JWqM0T4Ulscpda+b/MLyOA2I+xV7UFg8nxJjtB+F2e0XmrxFqg+F2b7hPXlPbS8K18+n5BjtS+FqnNJjtC+Fq3EaWj7tnhQOdGS7d78vhQvr91/0pdAOhduDQhRyoXB7UIhCLhRuDwpRyIXC7UEhCrlQuD0oXBY+BHUPTyh8NB+lK4WD2LT5ecZOHuUpOvtzE51BoXwolA+F8qFQvs4WLmaz2Zz3syebdbZwGmlt+dk+m+lsIX6eNxsKvUEhGwq9QSEbCr1BIRsKvUEhGwq9QSFbUrjzX80nwt8t/iJ8Nlx/viaNrkdVq2+gdla4s587y5zkJqTDuleJF7nTzHHhZeqi7PXaeULnlNPC1JnZN6ECjbqsrygs+k6NwIsLe+FKsYfqr9B2Bd0Unjsu/L5beEN5S7qhXFa9L7lNXK0+DO9SUZ2T3+Ax/mDx51P9kfzBN2zg4jd4AAAAAAAAAAAAAAAAAAD0xU8bihwySErKCwAAAABJRU5ErkJggg==">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <span class="text-h6 text-grey-6">Mediconnects News</span>
            </q-item-label>
            <q-item-label caption lines="1">
              <span class="text-body1 text-grey-6">All</span>
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-checkbox size="md" value="true" color="primary" />
          </q-item-section>
          <q-item-section side>
            <q-btn flat>
              <q-icon name="more_vert"></q-icon>
            </q-btn>
          </q-item-section>
        </q-item>
        <q-separator/>
      </q-list>
      <q-dialog v-model="prompt" persistent>
        <q-card class="" style="width: 90%">
          <q-card-section>
            <div class="text-h6">Add</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense color="white" text-color="white" v-model="org" autofocus @keyup.enter="submitorg"/>
          </q-card-section>

          <q-card-actions align="right" class="q-pt-none float-right ">
            <q-btn flat label="Cancel" v-close-popup/>
            <q-btn flat @click="submitorg" label="Add " v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card>
    <q-bar class="bg-grey-4" style="height:50px">

    </q-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Organization',
    components: {},
    data() {
      return {
        checkedNames: [],
        org: null,
        prompt: false,
        Experience: true
      };
    },
    methods: {
      submitorg() {
        //use this method to send to database
        this.prompt = false;
        this.org = null;
        this.$q.notify({
          progress: true,
          color: 'teal-6',
          textColor: 'white',
          icon: 'done',
          message: ' Organisation added'
        });
      }
    }

  });
</script>
<style lang="css" scoped>

</style>
