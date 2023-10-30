<template>
  <div class="search">
    <div class="wrapper">
      <input v-model="inputValue" class="input" placeholder="Qidirish" type="text" required />
    </div>

    <div class="clear-button" @click="clearInput">
      <div>
        <svg
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="x"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-x b-icon bi"
        >
          <g>
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            ></path>
          </g>
        </svg>
      </div>
      <div>Tozalash</div>
    </div>

    <div class="search-button" @click="search">
      <div>
        <svg
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="search"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-search b-icon bi"
        >
          <g>
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            ></path>
          </g>
        </svg>
      </div>
      <div>Qidirish</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, defineEmits } from 'vue'

const inputValue = ref('')

const emit = defineEmits(['update:modelValue'])

const clearInput = () => {
  inputValue.value = ''
  emit('update:modelValue', inputValue.value)
}

const search = () => {
  emit('update:modelValue', inputValue.value)
}
</script>

<style lang="scss">
.search {
  display: flex;
  align-items: center;
  font-family: $base-font;
  font-size: 14px;
}
.clear-button {
  display: flex;
  padding: 7px 12px;
  font-family: $base-font;
  font-size: 14px;
  color: #e55353;
  border-top: 1px solid #e55353;
  border-left: 1px solid #e55353;
  border-bottom: 1px solid #e55353;
  cursor: pointer;

  svg {
    margin-top: 1.7px;
  }
  &:hover {
    background: #e55353;
    color: #fff;
  }
}
.search-button {
  display: flex;
  padding: 7px 12px;
  font-family: $base-font;
  font-size: 14px;
  color: #4791ff;
  border: 1px solid #4791ff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;

  svg {
    margin-top: 1.7px;
    margin-right: 4px;
  }
  &:hover {
    background: #4791ff;
    color: #fff;
  }
}
input {
  font-family: $base-font;
  border: none;
  outline: none;
  border: 1px solid #d8dbe0;
  border-radius: 3px 0 0 3px;
  padding: 8px 12px;
  color: #768192;

  &:focus {
    border-color: #958bef;
    box-shadow: 0 0 0 0.2rem rgba(50, 31, 219, 0.25);
  }
}
</style>
