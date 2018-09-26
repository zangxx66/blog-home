<template>
  <div id="app">
    <mu-appbar style="width:100%" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Satania
      <div slot="right">
        <mu-text-field v-model="keyword" label="Search" label-float icon="search"></mu-text-field>
        <mu-button icon color="secondary">
          
        </mu-button>
      </div>
    </mu-appbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
