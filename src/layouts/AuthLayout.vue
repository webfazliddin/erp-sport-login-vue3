<template>
  <div class="layoutAuth">
    <div class="layoutAuth__left"></div>
    <div class="layoutAuth__right"><RouterView /></div>
  </div>
</template>

<style lang="scss">
.layoutAuth {
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  @include breakpoint('md') {
    grid-template-columns: 3fr 1fr;
  }
  &__left {
    height: 100%;
    background-image: url(../assets/loginbgerp.svg);
    background-size: cover;
    background-repeat: no-repeat;
    display: none;

    @include breakpoint('md') {
      display: block;
    }
  }

  &__right {
    display: grid;
    align-content: center;
    width: 100%;
    padding: 48px;
  }
}
</style>
