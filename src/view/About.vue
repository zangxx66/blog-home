<template>
    <mu-container>
        <div class="about-box">
            <mu-container class="about-container">
                <div class="about-info">
                    <div class="about-title">
                        关于
                        <br>
                        <span style="font-size:10px;font-weight:400;">v0.1.0 Beta</span>
                    </div>
                    <br>
                    <div class="about-tag">
                        <span class="about-font-6">Language</span>&nbsp;
                        <mu-button color="indigo400" class="about-btn">C#</mu-button>
                        <mu-button color="indigo400" class="about-btn">JavaScript</mu-button>
                        <mu-button color="indigo400" class="about-btn">C</mu-button>
                        <div class="about-br"></div>
                        <span class="about-font-6">Browser</span>&nbsp;
                        <mu-button color="indigo400" class="about-btn">
                            <i class="fa fa-chrome">&nbsp;Chrome</i>
                        </mu-button>
                        <div class="about-br"></div>
                        <span class="about-font-6">System</span>&nbsp;
                        <mu-button color="indigo400" class="about-btn">
                            <i class="fa fa-windows">&nbsp;10</i>
                        </mu-button>
                        <mu-button color="indigo400" class="about-btn">
                            <i class="fa fa-apple">&nbsp;Mojave</i>
                        </mu-button>
                        <div class="about-br"></div>
                        <span class="about-font-6">Contact</span>
                        <mu-button color="indigo400" class="about-btn about-btn-main" @click="copymail">
                            <i class="fa fa-envelope">&nbsp;service@satania.app</i>
                        </mu-button>
                    </div>
                </div>
                    <div class="about-main">
                        <div class="about-main-ul">
                            <div class="about-li">
                            &nbsp;&nbsp;非盈利小站，不接广告，网站其他功能检修中
                        </div>
                        <div class="about-li">
                            &nbsp;&nbsp;美工苦手（本来就不是干这个的），本职.Net开发，会点前端
                        </div>
                        <div class="about-li">
                            &nbsp;&nbsp;崩崩崩萌新，求大佬带我飞，iOS服46975669，我是头发浓密的舰长，才不是秃子
                        </div>
                        <div class="about-li">
                            &nbsp;&nbsp;欢迎讨论技术，以及各种问题，虽然我有好多不懂的但可以一起学习研究
                        </div>
                        </div>
                    </div>
                    <div class="about-timeline" v-if="items.length>0">
                        <div class="about-timeline-border">
                            <ul class="about-timeline-ul">
                            <li v-for="item in items" :key="item.id">
                                <b></b>
                                <span></span>
                                <div class="about-timeline-li-item">
                                    <div class="about-timeline-content">
                                        <div class="about-timeline-date">
                                            {{item.createDate | filterTime}}
                                        </div>
                                        <div class="about-timeline-txt">
                                           {{item.content}}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
            </mu-container>
        </div>
    </mu-container>
</template>
<script>
import Axios from "axios";

export default {
  name: "about",
  data() {
    return {
      items: [],
      reqUrl: this.$store.getters.getReqUrl()
    };
  },
  mounted() {
    this.init();
    document.querySelector('.about-container').style.height = window.innerHeight - 60 + 'px'
  },
  methods: {
    init: function() {
      const apiUrl = this.reqUrl + "/TimeLine/Get";

      Axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";

      Axios.get(apiUrl)
        .then(response => {
          this.items = response.data;
        })
        .catch(e => {
          this.$alert("获取列表错误");
          console.error(e);
        });
    },
    copymail:function(){
      window.location.href = 'mailto:service@satania.app'
    }
  },
  filters: {
    filterTime: function(param) {
      let result = String(param);
      result = result.replace(/T/g, " ");
      result = result.substring(0, 19);
      return result;
    }
  }
};
</script>
<style scoped>
.about-box {
  padding-top: 10%;
  margin-left: 256px;
}
.about-container{
 overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.about-info {
  margin: 10px;
  background: #fff;
  border-radius: 10px;
}
.about-title {
  padding-top: 5px;
  padding-left: 50%;
  font-size: 34px;
  font-weight: 400;
  color: #ff9800;
}
.about-tag {
  padding-left: 30px;
}
.about-font-6 {
  font-size: 20px;
  font-weight: 500;
}
.about-btn {
  margin: 8px;
  text-transform: none;
  cursor: context-menu;
}
.about-btn-main{
  cursor: pointer;
}
.about-main {
  margin: 10px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  background: #fff;
  border-radius: 10px;
}
.about-main-ul {
  padding: 20px;
}
.about-br {
  border: none;
  height: 1px;
  margin: 20px 0;
}
.about-timeline {
  padding-left: 30px;
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  margin-top: 15px;
}
.about-timeline-border{
    padding: 20px;
}
.about-li {
  border-left-color: #4dd0e1;
  border-left-width: 5px;
  border-left-style: solid;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
}
.about-timeline-ul {
  list-style-type: none;
  border-left: 1px solid #707070;
  padding: 0px;
  height: auto;
}
.about-timeline-ul li {
  height: 100px;
  position: relative;
}
.about-timeline-ul li a {
  display: inline-block;
  margin-left: 20px;
  margin-top: 15px;
  text-decoration: none;
  color: #000;
}
.about-timeline-ul li b::before {
  content: "";
  position: absolute;
  left: -10px;
  width: 18px;
  height: 18px;
  border: 2px solid #ff4801;
  border-radius: 10px;
  background: #ff4801;
}
.about-timeline-ul li span {
  position: absolute;
  color: #fff;
  top: 18px;
  left: -6px;
}
.about-timeline-li-item {
  padding-left: 30px;
}
.about-timeline-txt{
  margin: 10px;
}
</style>
