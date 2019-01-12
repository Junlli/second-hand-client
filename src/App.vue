<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import 'src/sass/base.scss';

html, body, #app {
  height: 100%;
}
</style>
