<template>
    <div class="home-box">
        <div class="paper-box">
            <Paper v-for="item in items" :key="item.id" :item="item"></Paper>
             <Pagination :total="total" :current="current" v-on:changePage="init"></Pagination>
        </div>
        <!-- <Pagination :total="total" :current="current" v-on:changePage="init"></Pagination> -->
    </div>
</template>
<script>
import Axios from "axios";
import Paper from "../components/Home/Paper";
import Pagination from "../components/Home/Pagination";

export default {
  data() {
    return {
      reqUrl: this.$store.getters.getReqUrl(),
      items: [],
      total: 0,
      current: 1
    };
  },
  mounted() {
    this.$progress.start();
    document.querySelector(".paper-box").style.height =
      window.innerHeight - 60 - 32 + "px";
    this.init(1);
  },
  methods: {
    init: function(page) {
      const apiUrl = this.reqUrl + "Article/Get";
      Axios.get(apiUrl, { params: { Page: page } })
        .then(response => {
          if (response.status === 200) {
            const callback = response.data;
            this.total = callback.total;
            this.current = callback.current;
            this.items = callback.data;
            this.$progress.done();
          } else {
            this.$alert("获取列表失败");
          }
        })
        .catch(err => {
          this.$alert("获取列表异常");
          console.error(err);
        });
    }
  },
  components: {
    Paper,
    Pagination
  }
};
</script>
<style scoped>
.home-box {
  left: 50%;
  width: 100%;
  transform: translate3d(0px, 0px, 0px);
  transition: transform ease-in-out 0.38s, visibility 0.38s,
    -webkit-transform ease-in-out 0.38s;
}
.paper-box {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
</style>
