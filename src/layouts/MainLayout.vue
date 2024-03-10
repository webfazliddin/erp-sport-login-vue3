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
.el-container { 
  background: #f7fbff;
  
}
.el-main {
  padding: 5px 15px !important;
}
.el-aside {
  border-right: 1px solid #f4f3f3;
  width: 270px !important;
  margin: 20px !important;
  border-radius: 10px !important;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16) !important;
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
@media screen and (max-width: 992px) {
  .appSidebar {
    display: none;
  }
  .elHeader {
    display: block;
  }
}
</style>
