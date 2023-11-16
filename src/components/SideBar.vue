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
    <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/ihma">
        <el-menu-item index="1-1">1-bosqich</el-menu-item>
      </RouterLink>
    </el-menu-item-group>
  </el-sub-menu>

  <el-sub-menu index="2">
    <template #title>
      <span>SPORT</span>
    </template>
    <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/sport"
        ><el-menu-item index="1-2">1-bosqich</el-menu-item></RouterLink
      >
    </el-menu-item-group>
  </el-sub-menu>

  <el-sub-menu index="3">
    <template #title>
      <span>SSP</span>
    </template>
  </el-sub-menu>

  <el-sub-menu index="4">
    <template #title>
      <span>CRM</span>
    </template>
  </el-sub-menu>

  <el-sub-menu index="5">
    <template #title>
      <span>MINVUZ</span>
    </template>
  </el-sub-menu>

  <el-sub-menu index="6">
    <template #title>
      <span>OMBUDSMAN</span>
    </template>
  </el-sub-menu>

  <el-sub-menu index="7">
    <template #title>
      <span>IJODKORLAR</span>
    </template>
  </el-sub-menu>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');

.logo {
  height: 54px;
  cursor: pointer;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
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

.el-sub-menu.is-active {
  background: #ecf5ff !important;
}
.el-sub-menu:hover .el-sub-menu__title span {
  margin-left: 4px;
  transition: 0.5s;
}
.el-sub-menu__title {
  height: 40px !important;
}
.el-sub-menu__title span {
  font-family: 'Montserrat', sans-serif;
  color: #5469d6;
  font-weight: 600;
  font-size: 14px;
}

.el-menu-item {
  font-family: 'Montserrat', sans-serif;
  color: #5469d6 !important;
  height: 40px !important;
}
.el-menu-item:hover {
  color: #fff !important;
  background: #5469d6 !important;
  padding-right: 10px !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background: #5469d6 !important;
}
.el-menu-item-group__title {
  padding: 0 !important;
}
</style>
