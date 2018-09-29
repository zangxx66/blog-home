<template>
    <mu-container>
        <div class="detail-paper">
            <div class="detail-title">
                {{item.title}}
                &nbsp;
                <mu-badge :content="item.category" color="secondary" class="badge"></mu-badge>
            </div>
            <div class="detail-info">
                {{item.createDate | filterTime}}
            </div>
            <mu-divider></mu-divider>
            <div class="detail-context">

            </div>
        </div>
        <div class="share-box">
            <div class="share">
                分享至：
                <share :config="config"></share>
            </div>
            </div>
        <div class="valine-paper">
            <div id="valine"></div>
        </div>
    </mu-container>
</template>
<script>
import Valine from 'valine'
export default {
  data() {
    return {
      item: [],
      vueValine: this.$store.getters.getValine(),
      config:{
          sites:['qzone','qq','weibo','google','facebook','twitter'],
          disabled:['wechat','douban']
      }
    }
  },
  mounted() {
    window.AV = require('leancloud-storage')
    new Valine({
      el: '#valine',
      appId: this.vueValine.appId,
      appKey: this.vueValine.appKey,
      avatar: 'mp',
      visitor: true,
      placeholder:'支持使用Markdown语法！'
    })
  },
  methods: {
    init: function(param) {
      this.item = param
      document.querySelector('.detail-context').innerHTML = param.context
    }
  },
  filters: {
    filterTime: function(param) {
      let result = String(param)
      result = result.replace(/T/g, ' ')
      result = result.substring(0, 19)
      return result
    }
  }
}
</script>
<style scoped>
.detail-paper {
  margin-top: 15%;
  background: #fff;
  border-radius: 10px;
}
.detail-title {
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail-info {
  font-size: 20px;
  padding: 20px;
}
.detail-context {
  padding: 20px;
}
.valine-paper {
  margin-top: 15px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
}
#valine{
    padding: 15px;
}
.share-box{
    margin-top:15px;
    background: #fff;
    border-radius: 10px;
}
.share{
    margin: 15px;
}
</style>
