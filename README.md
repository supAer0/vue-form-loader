# Vue Form Loader Directive

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-form-loader.svg?style=flat-square)](https://npmjs.com/package/vue-form-loader)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Us ethis Vue directive to automatically add a button loader on a `<form>`-element.

## Installation

You can install the package via yarn:

```bash
yarn add vue-form-loader
```

or npm:

```bash
npm install vue-form-loader --save
```

## Usage

Use the directive:

```javascript
// in app.js
import FormLoader  from "vue-form-loader";
Vue.use(FormLoader);
```

Add the directive to a regular `<form>`:
```html
<form v-loader>
    <button type="submit">Submit form</button>
</form>
```
or add the directive to a Vue-component `<form>`:
```html
<template>
    <form v-loader="loading">
        <button type="submit">Submit form</button>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                loading: false
            }
        }
    }
</script>
```

You need to create the css for button loader youself. When a form submits,
the class `is-loading` will be added to the submit button (must be of type="submit").

### Testing

```bash
yarn test
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please contact Victor Eliasson instead of using the issue tracker.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Credits

- [Victor Eliasson](https://github.com/viirre)
- [All Contributors](../../contributors)