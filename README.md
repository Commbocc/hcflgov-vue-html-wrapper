# @hcflgov/vue-html-wrapper

![NPM](https://img.shields.io/npm/v/@hcflgov/vue-html-wrapper.svg)

## Installation

### NPM

```bash
npm i --save @hcflgov/vue-html-wrapper
```

```js
import HcHtmlWrapper from '@hcflgov/vue-html-wrapper'
Vue.use(HcHtmlWrapper)
```

### CDN

[https://unpkg.com/@hcflgov/vue-html-wrapper/dist/](https://unpkg.com/@hcflgov/vue-html-wrapper/dist/)

```html
<script src="https://unpkg.com/@hcflgov/vue-html-wrapper"></script>
```

## Basic Use

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@hcflgov/vue-html-wrapper@3.0.1/dist/HcHtmlWrapper.css"
    />
  </head>
  <body>
    <div id="hc-main" class="d-flex flex-column">
      <!-- header -->
      <header>
        <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
        <nav
          is="hc-navbar"
          logo-href="./"
          skip-content-link="#main-content"
          class="v-card"
        ></nav>

        <ol is="hc-banner" title="Page Title">
          <li class="breadcrumb-item"><a href="./">Home</a></li>
        </ol>
      </header>

      <main id="main-content">
        <!-- content goes here -->
      </main>

      <!-- footer -->
      <footer is="hc-footer" class="mt-auto"></footer>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>

    <script src="https://unpkg.com/vue@2.6.6/dist/vue.js"></script>
    <script src="https://unpkg.com/@hcflgov/vue-html-wrapper@3.0.1/dist/HcHtmlWrapper.umd.min.js"></script>

    <script type="text/javascript">
      new Vue().$mount('#hc-main')
    </script>
  </body>
</html>
```

## Components

[View the documentation.](https://commbocc.github.io/hcflgov-vue-html-wrapper/docs/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
