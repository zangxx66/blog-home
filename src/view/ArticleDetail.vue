<template>
    <mu-container>
        <div class="detail-box">
            <Paper ref="detail"></Paper>
        </div>
    </mu-container>
</template>
<script>
import Paper from '../components/ArticleDetail/Paper'
import Axios from 'axios'
export default {
  name: 'ArticleDetail',
  data() {
    return {
      items: [],
      reqUrl: this.$store.getters.getReqUrl()
    }
  },
  mounted() {
    document.querySelector('.detail-box').style.height = window.innerHeight + 'px'
    const id = this.$route.params.id
    this.init(id)
  },
  methods: {
    init: function(param) {
      const apiUrl = this.reqUrl + 'Article/Detail'
      const args = param
      Axios.get(apiUrl, { params: { artid: args } })
        .then(response => {
          if (response.status == 404) {
            this.$alert('未找到实体')
          } else if (response.status == 200) {
            const callback = response.data
            this.items = callback
            this.$refs.detail.init(this.items)
            this.$progress.done()
          } else {
            this.$alert('获取实体报错,' + response.status)
          }
        })
        .catch(err => {
          this.$alert('获取实体错误')
          console.error(err)
        })
    }
  },
  components: {
    Paper
  }
}
</script>
<style scoped>
.detail-box {
  margin-left: 256px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
</style>
