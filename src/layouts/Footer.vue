<template>
<div>
      <q-footer class="bg-white smallscreen text-primary" style="height:40px" elevated>
    <q-btn color="teal" label="+ Create post" style="width:50%" size="sm" class="absolute-center" />
      </q-footer>
          <q-page-sticky class="largescreen" position="bottom-right" :offset="[18, 18]">
            <q-fab color="teal"  icon="keyboard_arrow_up" direction="up">
                <q-fab-action external-label label-position="left" label="Live" color="primary"  icon="videocam" />
                <q-fab-action external-label label-position="left" label="Photos" color="secondary"  icon="photo" />
                <q-fab-action external-label label-position="left" label="Docs" color="secondary" icon="description" />
                <q-fab-action external-label label-position="left" label="Video" color="secondary" icon="ondemand_video" />
            </q-fab>
          </q-page-sticky>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

@media screen and (max-width: 600px) {
    .smallscreen{
        display: block;
    }
    .largescreen{
        display: none;
    }
  }

@media screen and (min-width: 601px) {
    .smallscreen{
        display: none;
    }
    .largescreen{
        display: block;
        padding: 30px;
    }
  }
</style>