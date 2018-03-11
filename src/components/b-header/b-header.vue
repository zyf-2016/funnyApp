<template>
  <div class="header">
    <i class="icon-side"></i>
    <h2 class="title">悦读新闻</h2>
    <div class="title-right-icon">
      <i class="icon-pancel"></i>
      <i class="icon-bell"></i>
      <i class="icon-omit"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    z-index: 99
    width: 100%
    height: 80px
    padding-top: 50px
    background: #fb3d4f
    font-size: 0
    .icon-side
      display: inline-block
      padding: 0 22px 0 18px
      color: #fff
      font-size: 44px
    /*px*/
    .title
      display: inline-block
      color: #fff
      font-size: 44px; /*px*/
      font-weight: 600
    .title-right-icon
      display: inline-block
      float: right
      margin-right: 5px
    .icon-pancel, .icon-bell, .icon-omit
      display: inline-block
      padding: 0 5px
      color: #fff
      font-size: 44px
</style>
