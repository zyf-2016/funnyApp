<template>
  <div id="app">
    <b-header></b-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import BHeader from 'components/b-header/b-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    BHeader,
    Tab
  }
}
</script>

<style scope lang="stylus" rel="styleshett/stylus">

</style>
