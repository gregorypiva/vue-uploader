<template>
  <div id="Uploader">
    <div v-if="vuetify">
      <!-- todo: vuetify button -->
    </div>
    <div v-else>
      <label class="upload-btn" for="upload"><slot></slot></label>
      <input multiple
        class="upload-input"
        id="upload"
        type="file"
        :accept="accept"
        @change="onSelectFile($event)"
      />
      <span class="input-value">{{file.name}}</span>
    </div>
 </div>
</template>

<script lang="ts">

export default {
  name: 'Uploader',
  props: {
    vuetify: Boolean,
    accept: String,
    target: String,
    send: Boolean,
  },
  data() {
    return {
      file: {},
    };
  },
  methods: {
    onSelectFile(e: any) {
      (this as any).file = e.target.files[0];
      (this as any).upload((this as any).file);
    },
    async upload(file: any) {

      const formData = new FormData();
      formData.append('file', file);

      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: formData,
      };

      try {
        let response: any = await fetch((this as any).target, requestOptions);
        response = await (this as any).handleResponse(response);
        this.$emit('upload', response);
      } catch (e) {
        this.$emit('upload', e);
      }
    },
    async handleResponse(response: any) {
      try {
        const error = (response && response.message) || response.statusText;
        if (error) {
          return Promise.reject(error);
        }
        const text = await response.text();
        if (!response.ok) {
          return Promise.reject(JSON.parse(text));
        }
        const data = text && JSON.parse(text);
        return Promise.resolve(data);
      } catch (e) {
        return Promise.reject('Internal Server Error');
      }
    },
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}

.input-value {
  font-size: 11px;
}

.upload-btn {
	display: inline-block;
  border: 1px solid #c4c4c4;
	font-size: 11px;
	border-radius: 2px;
	padding: 5px 12px;
	margin-right: 10px;
}
</style>
