<template>
  <div class="wrap">
    <router-link tag='div' class="item" to='/home'>首页</router-link>
    <router-link tag='div' class="item" to='/user'>用户投稿</router-link>
    <router-link tag='div' class="item" to='/video'>视频</router-link>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    position: relative
    z-index: 9
    display: flex
    height: 88px
    line-height: 88px
    box-sizing: border-box
    font-size: 32px /*px*/
    box-shadow: 0 2px 4px #c7c7c7
    background-color: #fff
    outline: #eee solid 8px
    .item
      flex: 1
      text-align: center
      color: #fb3d4f
      &.router-link-active
        border-bottom: 6px solid #fb3d4f
</style>
