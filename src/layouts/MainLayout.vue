<template>
  <div class="main-layout">
    <div><AppSideBar /></div>
    <div>
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss">
.main-layout {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
