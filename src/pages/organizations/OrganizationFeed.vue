<template>
    <div class="bg-grey-4">
      <q-card class="my-card " flat>
        <table class="grid bg-grey-2 q-pl-sm q-pr-sm" style="width:100%">
            <td  colspan="8">
                <q-chip  outline color="grey-8" clickable  text-color="white">Your Orgs</q-chip>
                <q-chip  color="teal" clickable  text-color="white">Orgs</q-chip>
                <q-chip  outline color="grey-8" clickable  text-color="white">Discover</q-chip>
            </td>
            <td colspan="4" >
            <q-btn outline round @click="prompt = true" color="grey-8" size="sm" icon="add" />
            </td>
        </table>
        <q-list  bordered>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///84RXVChfXn7v0cL2gpefQaLWfm6O0+g/UiM2tnmfbi5OoxP3LR09zm6vNxeZjy8vY+bcU/dNPKzdg7W6FBfOM8YKtBgOs5S4E9Y7I7V5k6VJM9Z7nR1uU5TocncOPS2u4iUagkZc0bOHwlRIogS51zgKrS4PwjWbgfRZJnlOpgaYx2m+Z0jcV1lddzh7hmjNpjfblicZ6rr8B3ovRjd6xlh86Rlq1PWYK4u8oNJmSGjKUADloAGF4AbfMABFgtVS9wAAAErklEQVR4nO3dfVfTSBTH8Q4bAiHTbSmPiquLIoJ1V3e7aymCvv93ZZvmee4ktzhlcnN+H87xH03D1wyddibAYAAAAAAAAAAAAAAAAAAAALnfNvO7W3uN4rGLwO+7ZW8Ibwk3pMuby7L3JbdlV7dXK+9MYRgsPzIPRy4Kd3dyZ7mTzORkYjqcHNa9Sr1InRaOcy/XLiper53n1LnKRENfhSZr4XFbIZG4jcL9pdUfZiJVSEZWC8uNtcCWi6hTjgsP1j4efCR8qfv65WuTf+r+r/rXalritHD/wMEDuTbSKGRCoTcoZEOhNyhkQ6E3KGRDoTcoZEOhNyhkQ6E3KGRDoTcoZEOhNyhkQ6E3z1kYU7uzG56G3OFtPOIZC+MfoelxttFZFo/EY/xoTHzGwr1QEYKNttgj8iG6XahHG5xkpAUWqpB/F8GQfoSuFyrFPofl+M4X6jnzFDNyjAooVOEe6wxj2/HdL9RT1hmmlksooFBFC8YJFoHtcAGFSjMmRdsVbCuc3gfBo//C9knx21ML42EcD53cufcrhSps+0+2TIWMQmd+rVC3TYp39mNlFLZNijPyBamowuZJ0ToVSipsnBStU6GkwqZJ0T4ViipU2npk4xWUVPjNcuC8L4Xqnp4U4/uW4+QUqjvyuLuWSyipUFPLUo1TobRCFZqvH8fNz6PSColJkV58EluogvqkeMQ5SFKhMSm2X0FxhdVJsW0qFFiowvKnG7MOEVaoy5Ni61QosVBFxaS4aJ0KRRYWezVjKpC4qp0upN745ctS1FQYEc89XS6MYuoLLd2roRaf9HxoXtguFwb0m9v1pEj8hVKDI2GFY3KBIlmWoqbC5fsreYXkItNyUqS+alcvB+QVkuN0OSmS13YgspBuoZ5Hk4VxiYXkO0CqOnnJKrGQ8S5+XZg8ishC3svPdJaUWdi8aJ9ewfSVjsxCzjjN3hoLLWwfp/ldN1ILW9fD801iqYVt4zTKH0VsYfM4DYslOLmFew27E+UbGeQWDub2cVq+GUVwof1mhMoyseRC29JhdalfcqFt+be6XSO6kF63qO3vyy6kxml9O0p2ITVO6/9EeKE5TqP6trD0wvoaqbllKr2wfpOlue0tvrC6JWqM0T4Ulscpda+b/MLyOA2I+xV7UFg8nxJjtB+F2e0XmrxFqg+F2b7hPXlPbS8K18+n5BjtS+FqnNJjtC+Fq3EaWj7tnhQOdGS7d78vhQvr91/0pdAOhduDQhRyoXB7UIhCLhRuDwpRyIXC7UEhCrlQuD0oXBY+BHUPTyh8NB+lK4WD2LT5ecZOHuUpOvtzE51BoXwolA+F8qFQvs4WLmaz2Zz3syebdbZwGmlt+dk+m+lsIX6eNxsKvUEhGwq9QSEbCr1BIRsKvUEhGwq9QSFbUrjzX80nwt8t/iJ8Nlx/viaNrkdVq2+gdla4s587y5zkJqTDuleJF7nTzHHhZeqi7PXaeULnlNPC1JnZN6ECjbqsrygs+k6NwIsLe+FKsYfqr9B2Bd0Unjsu/L5beEN5S7qhXFa9L7lNXK0+DO9SUZ2T3+Ax/mDx51P9kfzBN2zg4jd4AAAAAAAAAAAAAAAAAAD0xU8bihwySErKCwAAAABJRU5ErkJggg==">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >Mediconnects News</q-item-label>
          <q-item-label caption lines="1"><b>All</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="1" id="checkbox" />
              <label for="checkbox"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side><q-btn flat><q-icon name="more_vert"></q-icon></q-btn></q-item-section>
      </q-item>
      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >MeduWeb.org</q-item-label>
          <q-item-label caption lines="1"><b>20K members</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="2" id="checkbox1" />
              <label for="checkbox1"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side><q-btn flat icon="more_vert"> </q-btn></q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="https://d3p2qewzsoh75c.cloudfront.net/uploads/conferences/logo/200/harvard_medical_school_hms_1517891864.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >Harvard Medical</q-item-label>
          <q-item-label caption lines="1"><b>150k members</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="3" id="checkbox2" />
              <label for="checkbox2"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side><q-btn flat><q-icon name="more_vert"></q-icon></q-btn></q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="https://api.2ndvote.com/file/3076-organization/w400/5662685806985216.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >Dana-Farber</q-item-label>
          <q-item-label caption lines="1"><b>1.7M members</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="4" id="checkbox3" />
              <label for="checkbox3"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side><q-btn flat><q-icon name="more_vert"></q-icon></q-btn></q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="https://clipartart.com/images/bcbstx-clipart.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >Blue-Cross Blue-Shield</q-item-label>
          <q-item-label caption lines="1"><b>1.7 members</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="5" id="checkbox4" />
              <label for="checkbox4"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side><q-btn flat><q-icon name="more_vert"></q-icon></q-btn></q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section  class="q-ml-none" avatar>
          <q-avatar style="width:65px;height:65px" square>
            <img src="https://logosvector.net/wp-content/uploads/2011/08/3m-logo.gif">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label style="color:grey" >3M</q-item-label>
          <q-item-label caption lines="1"><b>1.7M members</b> </q-item-label>
          </q-item-section>
        <q-item-section side >
          <div class="container">
            <div class="round">
              <input type="checkbox" v-model="checkedNames" value="6" id="checkbox5" />
              <label for="checkbox5"></label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side>
        <q-btn flat><q-icon name="more_vert"></q-icon></q-btn></q-item-section>
      </q-item>
      <q-separator />
    </q-list>
        <q-dialog v-model="prompt" persistent>
        <q-card class="" style="width: 90%">
        <q-card-section>
          <div class="text-h6">Add</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense color="white" text-color="white" v-model="org" autofocus @keyup.enter="submitorg" />
        </q-card-section>

        <q-card-actions align="right" class="q-pt-none float-right ">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat @click="submitorg" label="Add " v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-card>
    <q-bar class="bg-grey-4" style="height:50px">

    </q-bar>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Organization',
  components: {   },
  data() {
    return {
        checkedNames: [],
        org: null,
        prompt: false,
        Experience: true
    }
  },
  methods:{
    submitorg(){
        //use this method to send to database
      this.prompt = false
      this.org = null
      this.$q.notify({
          progress: true,
          color: 'teal-6',
          textColor: 'white',
          icon: 'done',
          message: ' Organisation added'
        })
    }
  }

});
</script>
<style lang="css" scoped>

.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: teal;
  border-color: teal;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
/* general styling */
html, body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f1f2f3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container {
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .my-card{
    width: 100%
  }
  .q-btn__wrapper {
    padding: 0px 0px;
  }
  .textsize{
    color:black;
  }
  .condtent{
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
    font-size: 2px;
    background: #A0C5E8;
    padding: 25px 10px 6px 10px;
  }
  .content{
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 400px;
    font-size: 8.5px;
  }
}
@media screen and (min-width: 600px)  and (max-width: 950px){
  .my-card{
  margin: auto;
  width: 75%;
  }
  .textsize{
    font-size:14px;
    color:black;
  }
  .condtent{
    display: flex;
    justify-content: space-between;
    min-width: 400px;
    margin:  auto;
    background: #A0C5E8;
    padding: 25px 10px 6px 10px;
  }
  .content{
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 951px)  and (max-width: 2000px) {
   .my-card{
  margin: auto;
  width: 50%;
  }
  .textsize{
    font-size:14px;
    color:black;
  }

  .condtent{
    display: flex;
    justify-content: space-between;
    min-width: 400px;
    margin:  auto;
    background: #A0C5E8;
    padding: 25px 10px 6px 10px;
  }
  .content{
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 2000px)  {
  .screenlarge{
  }

}

</style>