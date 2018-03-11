<template>
  <div class="loading">
    <img width="80" height="80" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .loading
    width: 100%
    margin-top: 180px
    text-align: center
    .desc
      line-height: 28px
      font-size: 28px
      color: #ccc
</style>
