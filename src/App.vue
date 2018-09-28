<template>
  <div id="app">
    <div class="appbar">
      <mu-appbar style="width:100%" color="primary">
        <mu-button icon slot="left" @click="openDrawer = !openDrawer">
          <mu-icon value="menu"></mu-icon>
        </mu-button>

        <div slot="right">
          <mu-button icon href="https://weibo.com/u/2576211917">
            <i class="fa fa-weibo"></i>
          </mu-button>
          <mu-button icon href="https://github.com/zangxx66">
            <i class="fa fa-github"></i>
          </mu-button>
        </div>
      </mu-appbar>
    </div>

    <router-view></router-view>

    <mu-drawer :open.sync="openDrawer" :docked="true" :right="false" class="drawer">
      <mu-list class="mulist">
        <mu-list-item :style="{height:'100px'}">
          <mu-row class="avatar-box">
            <mu-avatar :size="100">
              <img :src="'./static/img/avatar.jpg'" alt="avatar">
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
          <mu-list-item-title class="textcenter comment">&lt;!-- 首页 -- &gt;</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/Message'">
          <mu-list-item-title class="textcenter comment">&lt;!-- 留言 -- &gt;</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/Link'">
          <mu-list-item-title class="textcenter comment">&lt;!-- 友链 -- &gt;</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/About'">
          <mu-list-item-title class="textcenter comment">&lt;!-- 关于我 -- &gt;</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      openDrawer: true
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style scoped>
.mulist {
  height: 100%;
  top:10%;
}
.avatar-box{
  clear: both;
  margin: auto;
  display: block;
}
.textcenter {
  text-align: center;
}
.satanya{
  font-size:20px;
  font-weight:500;
}
.drawer{
  overflow: hidden;
}
.comment{
  color:green;
}
.mu-appbar .mu-icon-button .fa-weibo{
  color:red;
}
.mu-appbar .mu-icon-button .fa-github{
  color:#212121;
}
.appbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
