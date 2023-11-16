<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-img"><img src="../assets/webase.png" /></div>
      <el-button class="header-menu" @click="drawer = true">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="rgba(0, 0, 21, 0.5)"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </el-button>
    </div>
  </div>

  <el-drawer v-model="drawer" :show-close="false">
    <template #header="{ close }">
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <el-menu>
      <SideBar />
    </el-menu>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.header-img img {
  width: 120px;
}
.header-menu svg {
  width: 26px;
}
.el-drawer__body {
  padding: 0 !important;
}
.el-drawer {
  width: 70% !important;
}
.el-drawer__header {
  margin-bottom: 0 !important;
}
</style>
