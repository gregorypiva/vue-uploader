<template>
  <div id="Uploader">
    <div>
      <label
        :class="[
          vuetify ? 'v-btn' : 'upload-btn',
          dark ? 'theme--dark' : 'theme--light',
          fab ? 'v-btn--floating' : '',
          flat ? 'v-btn--flat' : '',
          large ? 'v-btn--large' : '',
          outline ? 'v-btn--outline v-btn--depressed' : '',
          color ? vuetify ? `${color}--text` : color : '',
        ]"
        for="upload"
      >
        <div v-if="vuetify" class="v-btn__content" style="font-family: 'Roboto', sans-serif;">
          <v-icon v-if="icon" left>
            {{icon}}
          </v-icon>
          <slot></slot>
        </div>
        <div v-else class="text"><slot></slot></div>
      </label>
      <input
        class="upload-input"
        id="upload"
        type="file"
        :accept="accept"
        @change="onSelectFile($event)"
      />
      <span v-if="selected" class="input-value text">{{file.name}}</span>
    </div>
 </div>
</template>

<script lang="ts">

export default {
  name: 'Uploader',
  props: {
    accept: String,
    target: String,
    color: String,
    selected: Boolean,
    vuetify: Boolean,
    dark: Boolean,
    fab: Boolean,
    flat: Boolean,
    large: Boolean,
    icon: String,
    outline: Boolean,
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

.text {
  font-family: 'Roboto', Arial, sans-serif;
}
</style>
