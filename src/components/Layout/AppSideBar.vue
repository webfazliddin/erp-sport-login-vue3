<template>
  <div class="logo">
    <img src="../../assets/logo-sidebar.svg" />
  </div>
  <el-sub-menu index="1">
    <template #title>
      <el-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          class="c-sidebar-nav-icon"
        >
          <path
            d="M4.766 18.75h16.984v-18h-17.031c-1.568 0.005-2.839 1.275-2.844 2.843v16.575h0.001c-0 0.007-0.001 0.014-0.001 0.021 0 1.659 1.302 3.061 2.844 3.061h17.031v-1.5h-17.031c-0.703 0-1.344-0.744-1.344-1.561 0-0.78 0.637-1.439 1.391-1.439zM16.875 2.266v8.101l-2.269-1.992-2.231 1.98v-8.089zM10.875 2.25v10.125h1.483l2.254-2 2.278 2h1.486v-10.125h1.875v15h-13.871l-0.004-15zM4.719 2.25h0.156l0.004 15h-0.113c-0.512 0-0.991 0.137-1.404 0.377l0.013-0.007v-14.014c0-0.001 0-0.003 0-0.004 0-0.744 0.601-1.347 1.343-1.351h0z"
          ></path>
        </svg>
      </el-icon>
      <span>Malumotlar</span>
    </template>
    <el-menu-item-group>
      <RouterLink style="text-decoration: none" to="/home/currency"
        ><el-menu-item index="1-1">Valyuta</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-2">Sport passport serialari</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-3">Bank</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-4">Valyutalar kursi</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-5">Harajat moddasi</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-6">O'lchov birliklari</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-7">Jadval ustunlari shablonlari</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-8">Kontragent</el-menu-item></RouterLink
      >
      <RouterLink style="text-decoration: none" to="/home"
        ><el-menu-item index="1-9">Qaytarish sababi turlari</el-menu-item></RouterLink
      >
    </el-menu-item-group>
  </el-sub-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  background: #1c60b1;
  height: 54px;
  cursor: pointer;
  position: sticky;
  z-index: 9999;
  top: 0;
}
.sidebar {
  &-title {
    font-family: $base-font;
    font-weight: 700;
    font-size: 80%;
    padding: 0 20px;
    color: #1c60b1;
  }
}
.el-menu {
  border: none !important;
}

.el-sub-menu__title {
  svg path {
    color: #1c60b1;
  }
  span {
    font-family: $base-font;
    color: #1c60b1;
  }
  &:hover {
    --el-menu-hover-bg-color: #1c60b1;
    svg path {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
}
.el-menu-item {
  font-family: $base-font;
  color: #1c60b1 !important;
  &:hover {
    color: #fff !important;
    background: #437cc1 !important;
  }
  &.is-active {
    color: #fff !important;
    background: #1c60b1 !important;
  }
}
</style>
