<template>
  <div class="logo">
    <div>
      <RouterLink to="/">
        <img src="../assets/webase.png" />
      </RouterLink>
    </div>
  </div>
  <el-sub-menu index="1">
    <template #title>
      <span>IHMA</span>
    </template>
    <!-- <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/ihma">
        <el-menu-item index="1-1">ELD</el-menu-item>
      </RouterLink>
      <RouterLink style="text-decoration: none" to="/ihma">
        <el-menu-item index="1-2">INS</el-menu-item>
      </RouterLink>
    </el-menu-item-group> -->
  </el-sub-menu>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

.logo {
  height: 54px;
  cursor: pointer;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
}
.logo img {
  width: 150px;
}
.menu {
  width: 20px;
  padding: 2px 4px;
}
.el-menu {
  border: none !important;
  padding: 0 !important;
}
.el-sub-menu {
  height: 50px !important;
  margin: 10px !important;
  border-radius: 10px !important;
  background: #ecf5ff !important;
  
}

.el-sub-menu__title {
  height: 50px !important;
  border-radius: 10px !important;
}
.el-sub-menu__title span {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: rgba(102,153,97) !important;
  font-weight: 600;
  font-size: 14px;
}

.el-menu-item {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: rgba(102,153,97) !important;
  height: 50px !important;
  margin: 10px !important;
  border-radius: 10px !important;
  letter-spacing: 1px !important;
}
.el-menu-item:hover {
  color: rgba(102,153,97) !important;
  background: #ECF2EC !important;
  padding-right: 10px !important;
}
.el-menu-item.is-active {
  color: rgba(102,153,97) !important;
  background: #ECF2EC !important;
}
.el-menu-item-group__title {
  padding: 0 !important;
}
</style>
