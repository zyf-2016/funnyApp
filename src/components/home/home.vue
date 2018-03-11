<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in homeList" :key="item.document_id" class="item" @click="changeColor(index)" :class="{gray:index === Nindex}">
        <a :href="['http://baozouribao.com/documents/' + item.document_id]">
          <img v-lazy="item.thumbnail" alt="">
          <div class="text">
            <h4 class="title">{{item.title}}</h4>
            <p class="author"><span>{{item.author_name}}</span><span class="sign">|</span><span class="">{{item.section_name}}</span></p>
          </div>
        </a>
      </li>
    </ul>
    <div v-show="!homeList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  export default {
    data() {
      return {
        homeList: [],
        Nindex: '-1'
      }
    },
    components: {
      Loading
    },
    created () {
      this._getHomeList()
    },
    methods: {
      _getHomeList() {
        this.$http.get('/api/api/v31/documents/latest').then((result) => {
          this.homeList = result.data.data
        }).catch((err) => {
          console.log('error:' + err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    /*background-color: #eee*/
    ul
      width: 98%
      margin-left: 1%
      background-color: #eee
      .item
        width: 100%
        height: 184px
        margin-bottom: 20px
        background-color: #fff
        box-shadow: 0 1px 1px 2px #cbcbcb
        a
          box-sizing: border-box
          display: flex
          align-items: center
          img
            width: 118px
            height: 118px
            margin: 34px
            flex: 0
          .text
            padding-right: 34px
            flex: 1
            display: flex
            flex-direction: column
            justify-content: center
            .title
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
              font-size: 32px
              color: #131313
              margin-bottom: 28px
              font-weight: 600
              flex: 1
            .gray
              border: 1px solid #f00
            .author
              font-size: 22px
              color: #a0a0a0
              flex: 1
              .sign
                padding: 0 6px
</style>
