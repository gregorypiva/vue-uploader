# vue-uploader

[![GitHub last commit](https://img.shields.io/github/last-commit/tityus/vue-uploader.svg?style=flat-square)](https://github.com/tityus/vue-uploader)
[![GitHub issues](https://img.shields.io/github/issues/tityus/vue-uploader.svg?style=flat-square)](https://github.com/tityus/vue-uploader/issues)
[![license](https://img.shields.io/github/license/tityus/vue-uploader.svg?style=flat-square)](https://github.com/tityus/vue-uploader)

upload component for Vue.

## Install

#### Using NPM

```
npm install @tityus/vue-uploader
```

#### Import

``` vue
import VueUploader from '@tityus/vue-uploader';
```

#### In your component

``` vue
var app = new Vue({
  el: '#app',
  data: {},
  component: {
    VueUploader
  }
})

```

#### In your template

``` vue
<vue-uploader></uploader>

```

## Configuration (props)

`accept` : `[String, default : '']` : Specifies what file types the user can pick.

`vuetify` : `[Boolean, default: false]` : Specifies aspect of input

`target` : `[String, default : '']` : Target of your API/Backend

#### Slot

## Example template

``` vue
<vue-uploader
  accept="image/*"
  vuetify
  target="/api/upload"
>
  Select a file // You can change slot's message
</vue-uploader>

```

## Contribution

For contribute, you can help by submitting an issue or a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)
