<template>
  <div id="app">
    <div class="appbar">
      <mu-appbar style="width:100%" :z-depth="24" color="primary">
        <mu-button icon slot="left" @click="openDrawer = !openDrawer">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <span style="cursor: context-menu;color:#fff;">Satania.app</span>
        <div slot="right">
          <a tabindex="0" href="https://weibo.com/u/2576211917" target="_blank" class="mu-button mu-icon-button link-hover">
            <div class="mu-button-wrapper">
              <div class="mu-ripple-wrapper"></div><i class="fa fa-weibo"></i>
            </div>
          </a>
          <a tabindex="1" href="https://github.com/zangxx66" target="_blank" class="mu-button mu-icon-button link-hover">
            <div class="mu-button-wrapper">
              <div class="mu-ripple-wrapper"></div><i class="fa fa-github"></i>
            </div>
          </a>
        </div>
      </mu-appbar>
    </div>

    <div class="blur"></div>

    <router-view></router-view>

    <context-menu class="right-menu" :target="contextMenuTarget" :show="contextMenuVisible" @update:show="(show) => contextMenuVisible = show">
      <a href="javascript:;" @click="copyMsg">右键？不存在的</a>
    </context-menu>

    <mu-drawer :open.sync="openDrawer" :docked="false" :right="false" :z-depth="24" class="drawer">
      <mu-list class="mulist">
        <mu-list-item :style="{height:'100px'}">
          <mu-row class="avatar-box">
            <mu-avatar :size="100">
              <img :src="'../static/img/avatar.jpg'" alt="S">
            </mu-avatar>
          </mu-row>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title class="textcenter satanya">
            萨塔喵
          </mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :to="'/'">
          <mu-list-item-title class="textcenter">首页</mu-list-item-title>
        </mu-list-item>
        <li>
          <a href="https://pixiv.satania.app" class="mu-item-wrapper" target="_blank">
          <div class="mu-item">
            <div class="mu-ripple-wrapper"></div>
            <div class="mu-item-title textcenter">Pixiv镜像站</div>
            </div>
            </a>
            </li>
        <!--<mu-list-item button :to="'/Link'">
          <mu-list-item-title class="textcenter comment">&lt;!-- 友链 -- &gt;</mu-list-item-title>
        </mu-list-item> -->
        <mu-list-item button :to="'/About'">
          <mu-list-item-title class="textcenter">关于我</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
import { component as VueContextMenu } from "@xunlei/vue-context-menu";

export default {
  name: "app",
  data() {
    return {
      openDrawer: false,
      contextMenuTarget: document.body,
      contextMenuVisible: false
    };
  },
  mounted() {
    document.querySelector(".blur").style.height =
      window.innerHeight - 60 + "px";
  },
  methods: {
    copyMsg() {
      this.$toast.message("你就不能做点什么吗！你不是天使吗？！");
      this.contextMenuVisible = false;
    }
  },
  components: {
    "context-menu": VueContextMenu
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.blur {
  background: url("../static/img/bg.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(10px);
  width: 100%;
  z-index: 0;
  position: absolute;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  z-index: 1;
  margin-top: 60px;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: rgba(50, 50, 50, 0.3);
}
::-webkit-scrollbar-track {
  border-radius: 1em;
  background-color: rgba(50, 50, 50, 0.1);
}
</style>
<style scoped>
.mulist {
  height: 100%;
  top: 10%;
}
.avatar-box {
  clear: both;
  margin: auto;
  display: block;
}
.textcenter {
  text-align: center;
}
.satanya {
  font-size: 20px;
  font-weight: 500;
}
.drawer {
  overflow: hidden;
}
.comment {
  color: green;
}
.mu-appbar .mu-icon-button .fa-weibo {
  color: red;
}
.mu-appbar .mu-icon-button .fa-github {
  color: #212121;
}
.appbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.link-hover:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: auto;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
.right-menu {
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
}
.right-menu a {
  padding: 2px;
}
.right-menu a:hover {
  background: #ff4081;
}
</style>
