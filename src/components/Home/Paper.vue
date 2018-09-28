<template>
    <mu-container>
        <div class="paper-article" @click="openDetail(item.id)">
            <div class="title">
                {{item.title}}
            </div>
            <div class="summary">
                
            </div>
        </div>
    </mu-container>
</template>
<script>
export default {
  props: ["item"],
  mounted() {
    document.querySelector(".summary").innerHTML = this.item.summary;
  },
  methods: {
    openDetail: function(param) {
      this.$router.push({ name: "ArticleDetail", params: { id: param } });
    }
  }
};
</script>
<style lang="stylus" scoped>
.paper-article {
  cursor: pointer;
  background: #fff;
  border-radius: 10px;
}
.paper-article:hover {
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    .title{
        text-decoration: underline;
        font-weight :bold;
    }
}
.title {
  padding: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.summary {
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
