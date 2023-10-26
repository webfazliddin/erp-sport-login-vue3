<template>
  <div class="create-button">
    <div class="create-button__icon">
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="plus"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi-plus b-icon bi"
      >
        <g>
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="text">Yaratish</div>
  </div>
</template>

<style lang="scss">
.create-button {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 85px;
  border: 1px solid #4791ff;
  border-radius: 3px;
  padding: 1px 15px 1px 10px;
  opacity: 0.9;
  cursor: pointer;

  &__icon {
    padding-top: 3.5px;
    svg path {
      color: #4791ff;
    }
  }
  .text {
    font-family: $base-font;
    font-size: 12px;
    color: #4791ff;
  }

  &:hover {
    background-color: #4791ff;
    svg path {
      color: #fff;
    }
    .text {
      color: #fff;
    }
  }
}
</style>
