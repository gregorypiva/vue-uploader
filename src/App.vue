<template>
  <div id="App">
    <vue-uploader>Select a file</vue-uploader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import VueUploader from './VueUploader.vue';

@Component({
  components: {
    VueUploader,
  },
})
export default class App extends Vue {

  error: any = null;

  onClickUpload(value: any) {
    this.error = value;
  }
}
</script>
