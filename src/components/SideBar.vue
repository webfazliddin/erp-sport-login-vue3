<template>
  <div class="logo">
    <div>
      <img src="../assets/webase.png" />
    </div>
    <!-- <div class="menu" @click="toggleSidebar">
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="rgba(0, 0, 21, 0.5)"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </div> -->
  </div>
  <el-sub-menu index="1">
    <template #title>
      <span>IHMA</span>
    </template>
    <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/ihma"
        ><el-menu-item index="1-1">1-bosqich</el-menu-item></RouterLink
      >
    </el-menu-item-group>
  </el-sub-menu>

  <el-sub-menu index="2">
    <template #title>
      <span>Sport</span>
    </template>
    <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/sport"
        ><el-menu-item index="1-2">1-bosqich</el-menu-item></RouterLink
      >
    </el-menu-item-group>
  </el-sub-menu>
</template>

<script setup>
// import { ref, defineEmits } from 'vue'
// const showLogo = ref(true)

// const emit = defineEmits(['toggle-sidebar'])

// const toggleSidebar = () => {
//   emit('toggle-sidebar')
//   showLogo.value = !showLogo.value
// }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');

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
.el-sub-menu:hover .el-sub-menu__title span {
  margin-left: 4px;
  transition: 0.5s;
}
.el-sub-menu__title span {
  font-family: 'Nunito', sans-serif;
  color: #5469d6;
  font-weight: 600;
  font-size: 14px;
}

.el-menu-item {
  font-family: 'Nunito', sans-serif;
  color: #5469d6 !important;
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
</style>
