<template>
  <div class="back-button">
    <div class="back-button__icon">
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="arrow left short"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi-arrow-left-short b-icon bi"
      >
        <g>
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="back-button__text">Orqaga</div>
  </div>
</template>

<style lang="scss">
.back-button {
  display: flex;
  align-items: center;
  width: 85px;
  background-color: #e55353;
  border-radius: 3px;
  padding: 1px 15px 1px 10px;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &__icon {
    padding-top: 3.5px;
    svg path {
      color: #fff;
    }
  }
  &__text {
    font-family: $base-font;
    font-size: 12px;
    color: #fff;
  }
}
</style>
