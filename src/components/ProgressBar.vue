<template>
  <el-progress :percentage="percentage" :status="status" :text-inside="showText"></el-progress>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: 'success'
    },
    showText: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.el-progress-bar__outer {
  height: 12px !important;
  margin-bottom: 3px;
}
.el-progress-bar__innerText {
  font-family: 'Nunito', sans-serif;
  font-size: 10px;
  margin-bottom: 8px;
}


</style>
