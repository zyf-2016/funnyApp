<template>
  <div class="video">
    <ul>
      <li v-for="item in videoList" :key="item.document_id" class="item">
        <video :src="item.file_url" :poster="item.image" controls="controls"></video>
        <p class="title">{{item.title}}</p>
        <div class="info">
          <span class="play_count">{{item.play_count}}&nbsp;播放</span>
          <span class="icon-support"></span>&nbsp;<span class="vote_count">{{item.vote_count === 0? '赞':item.vote_count}}</span>
          <span class="icon-comment"></span>&nbsp;<span>{{item.comment_count === 0? '评论':item.comment_count}}</span>
          <img class="share" src="./share.png" alt="分享">
        </div>
      </li>
    </ul>
    <div v-show="!videoList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  export default {
    data() {
      return {
        videoList: []
      }
    },
    components: {
      Loading
    },
    created () {
      this._getVideoList()
    },
    methods: {
      _getVideoList() {
        this.$http.get('/api/api/v31/documents/videos/latest').then((result) => {
          this.videoList = result.data.data
          console.log(this.homeList)
        }).catch((err) => {
          console.log('error:' + err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .video
    ul
      width: 98%
      margin-left: 1%
      background-color: #eee
      .item
        position: relative
        margin-bottom: 20px
        padding: 8px 1%
        background-color: #fff
        box-shadow: 0 1px 1px 2px #cbcbcb
        video
          width: 98%
          height: 400px
          margin-left: 1%
        .title
          font-size: 34px
          color: #090909
          margin: 18px 0 18px 1%
          font-weight: 500
        .info
          padding-left: 1%
          margin: 36px 0
          color: #a0a0a0
          font-size: 30px
          .play_count
            margin-right: 206px
          .vote_count
            margin-right: 48px
          .share
            position: absolute
            bottom: 30px
            right: 34px
            width: 60px
            height: 60px
</style>
