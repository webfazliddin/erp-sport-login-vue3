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

<style>
.el-progress-bar__outer {
  height: 15px !important;
  margin-bottom: 10px;
}
.el-progress-bar__innerText {
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  margin-bottom: 4px;
}
</style>
