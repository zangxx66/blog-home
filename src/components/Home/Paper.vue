<template>
    <mu-container>
        <mu-paper class="paper-article" :depth="10" @click="openDetail(item.id)">
            <div class="title">
                {{item.title}}
            </div>
            <div class="summary">
                {{item.context | filterContext}}
            </div>
        </mu-paper>
    </mu-container>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    openDetail: function(param) {
      this.$router.push({ name: 'ArticleDetail', params: { id: param } })
    }
  },
  filters: {
    filterContext: function(str) {
      str = str.replace(/<\/?[^>]*>/g, '') //去除HTML tag
      str = str.replace(/[ | ]*\n/g, '\n') //去除行尾空白
      //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/ /gi, '') //去掉
      return str
    }
  }
}
</script>
<style scoped>
.paper-article {
  cursor: pointer;
}
.title{
    padding: 20px;
}
.summary{
    padding:20px;
}
</style>
