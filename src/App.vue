<template>
  <div id="app">
    <div class="appbar">
      <mu-appbar style="width:100%" color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>

        <div slot="right">
          <mu-button icon color="secondary" href="https://weibo.com/u/2576211917">
            <i class="fa fa-weibo"></i>
          </mu-button>
          <mu-button icon color="scondary" href="https://github.com/zangxx66">
            <i class="fa fa-github"></i>
          </mu-button>
        </div>
      </mu-appbar>
    </div>

    <router-view></router-view>

    <mu-drawer :open.sync="openDrawer" :docked="true" :right="false">
      <mu-list class="mulist">
        <mu-list-item>
          <mu-row class="avatar-box">
            <img :src="'./static/img/avatar.jpg'" alt="avatar">
          </mu-row>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-title class="textcenter">
            <!-- 萨塔喵 -->
          </mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button :to="'/'">
          <mu-list-item-title>首页</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/Message'">
          <mu-list-item-title>留言</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/Link'">
          <mu-list-item-title>友链</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :to="'/About'">
        <mu-list-item-title>关于</mu-list-item-title>
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
}
.avatar-box {
  display: inline-block;
  text-align: center;
  margin-top:20%;
}
.avatar-box img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
.textcenter{
  text-align: center;
}
</style>
