<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url('./style/common.less');

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.el-loading-spinner .path {
  stroke: @common-color !important;
}
</style>
