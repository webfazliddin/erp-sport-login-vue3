<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="appSidebar">
        <el-menu>
          <SideBar />
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="elHeader"> <AppHeader /></el-header>
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
.elHeader {
  display: none;
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  .appSidebar {
    display: none;
  }
  .elHeader {
    display: block;
  }
}
</style>
