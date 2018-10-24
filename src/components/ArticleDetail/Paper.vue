<template>
    <mu-container>
        <div class="detail-paper">
          <mu-breadcrumbs>
          <mu-icon value="forward" slot="divider"></mu-icon>
          <mu-breadcrumbs-item v-for="item in navs" :key="item.text" :disabled="item.disabled" :to="item.to">{{item.text}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>
            <div class="detail-title">
                {{item.title}}
                &nbsp;
                <mu-badge :content="item.category" color="secondary" class="badge"></mu-badge>
            </div>
            <div class="detail-info">
                {{item.createDate | filterTime}}&nbsp;&nbsp;
                <!-- id 将作为查询条件 -->
                <span id="item.id" class="leancloud-visitors" data-flag-title="item.title">
                    <em class="post-meta-item-text">阅读量 </em>
                    <i class="leancloud-visitors-count"></i>
                </span>
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
import Valine from "valine";
export default {
  data() {
    return {
      item: [],
      navs: [
        {
          text: "首页",
          to: "/",
          disabled: false
        },
        { text: "", disabled: true, to: this.$route.path }
      ],
      vueValine: this.$store.getters.getValine(),
      config: {
        title: "萨塔喵的后院",
        image: "https://www.satania.app/static/img/avatar.jpg",
        url: "https://www.satania.app" + this.$route.path,
        source: "https://www.satania.app" + this.$route.path,
        sites: ["qzone", "qq", "weibo", "google", "facebook", "twitter"],
        disabled: ["wechat", "douban"]
      }
    };
  },
  methods: {
    init: function(param) {
      this.item = param;
      this.config.title = this.navs[1].text = this.item.title;
      document.querySelector(".leancloud-visitors").id = this.config.url;
      document
        .querySelector(".leancloud-visitors")
        .setAttribute("data-flag-title", this.item.title);
      document.querySelector(".detail-context").innerHTML = decodeURIComponent(
        param.context
      );
      window.AV = require("leancloud-storage");
      new Valine({
        el: "#valine",
        appId: this.vueValine.appId,
        appKey: this.vueValine.appKey,
        avatar: "mp",
        visitor: true,
        placeholder: "支持使用Markdown语法！",
        path: "https://www.satania.app" + this.$route.path
      });
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
.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.valine-paper {
  margin-top: 15px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
}
#valine {
  padding: 15px;
}
.share-box {
  margin-top: 15px;
  background: #fff;
  border-radius: 10px;
}
.share {
  margin: 15px;
}
</style>
