<template>
    <div class="page-box">
        <mu-pagination raised circle :total="total" :current.sync="current" @change="page"></mu-pagination>
    </div>
</template>
<script>
export default {
  props: ['total', 'current'],
  methods: {
    page: function () {
      this.$emit('changePage', this.current)
    }
  }
}
</script>
<style scoped>
.page-box {
  margin-top: 10px;
  bottom: 10px;
  left:50%;
  position: absolute;
  background:none;
}
</style>
