<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)
const showLogo = ref(true)

const isOpen = () => {
  isCollapse.value = !isCollapse.value
  showLogo.value = !showLogo.value
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="appSidebar" v-model="isCollapse">
        <el-menu default-active="2" :collapse="isCollapse" class="el-menu-vertical-demo">
          <SideBar @toggle-sidebar="isOpen" />
        </el-menu>
      </el-aside>
      <el-container>
        <el-main> <RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-main {
  padding: 5px 15px !important;
}
.el-aside {
  border-right: 1px solid #f4f3f3;
  width: auto !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
.el-menu {
  height: 100%;
}

.appSidebar {
  display: block;
}

@media screen and (max-width: 768px) {
  .appSidebar {
    display: none;
  }
}
</style>
