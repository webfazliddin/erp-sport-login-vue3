<script setup lang="ts">
import { computed, ref } from 'vue'

const isSidebarOpen = ref(true)
const drawer = ref(false)

import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()

const headerIsElevated = computed(() => {
  return y.value > 10
})

const togleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const togleSidebarMobile = () => {
  drawer.value = true
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside v-if="isSidebarOpen" width="350px" class="appSidebar">
        <div><AppSideBar /></div>
      </el-aside>
      <el-drawer v-model="drawer" :direction="'ltr'"> <AppSideBar /> </el-drawer>
      <el-container>
        <el-header>
          <AppHeader
            :elevated="headerIsElevated"
            @togle-sidebar="togleSidebar"
            @togle-sidebar-mobile="togleSidebarMobile"
        /></el-header>
        <el-main> <RouterView /></el-main>
        <el-footer> <AppFooter /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.main-layout {
  display: grid;
  grid-template-columns: auto 1fr;
}
.appSidebar {
  display: none;

  @include breakpoint('lg') {
    display: block;
  }
}
.el-container {
  background: #f7f9fa !important;
  height: 100vh;
}
.el-header {
  background: #fff;
  width: 100% !important;
}
.el-aside {
  background: #fff !important;
}
.el-footer {
  position: fixed;
  bottom: 0 !important;
  width: 100%;
  padding: 0 !important;
  background: #ebedef !important;
  border-top: 1px solid #d8dbe0 !important;
}
.el-drawer__body {
  padding: 0 !important;
}
.el-drawer {
  width: 85% !important;
}
.el-drawer__header {
  display: none !important;
}
</style>
