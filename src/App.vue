<template>
  <div id="App">
    <vue-uploader icon="cloud_upload" outline>Select a file</vue-uploader>
  </div>
</template>

<script lang="ts">
import VueUploader from './VueUploader.vue';

export default {
  name: 'App',
  components: {
    VueUploader,
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    onClickUpload(value: any) {
      (this as any).error = value;
    },
  },
};
</script>
