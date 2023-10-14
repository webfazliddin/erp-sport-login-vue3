<script setup lang="ts">
import classnames from 'classnames'
import { withDefaults } from 'vue'

export interface IBaseInput {
  label: string
  value: string
  placeholder?: string
  type?: string
  showPassword?: boolean
  disabled?: boolean
  error?: string
}

withDefaults(defineProps<IBaseInput>(), {
  placeholder: '',
  type: 'text',
  showPassword: false,
  disabled: false,
  error: ''
})

const emit = defineEmits<{
  (e: 'on-password-toggle'): void
  (e: 'on-input', newValue: string): void
}>()

const togglePasswordShow = () => {
  emit('on-password-toggle')
}

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('on-input', target.value)
}
</script>

<template>
  <div :class="$style.baseInput">
    <label :class="$style.label" for="email">{{ label }}</label>

    <div :class="classnames($style.wrapper, { [$style.hasError]: !!error })">
      <input
        :class="$style.input"
        :value="value"
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
        :placeholder="placeholder"
        @input="handleInputChange"
        required
        :disabled="disabled"
      />

      <div v-if="type === 'password'" :class="$style.append">
        <button v-if="showPassword" :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg
            data-v-0c7ffb22=""
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="eye"
            color="#4791FF"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-eye b-icon bi"
          >
            <g data-v-0c7ffb22="">
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
              ></path>
              <path
                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
              ></path>
            </g>
          </svg>
        </button>

        <button v-else :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.999" height="9" viewBox="0 0 16.999 9">
            <path
              id="Контур_175"
              data-name="Контур 175"
              d="M-904-444v0Zm5-.733,2,3.464Zm-10,0-2,3.464ZM-912-448s3.1,4,8,4,8-4,8-4a10.8,10.8,0,0,1-8,4A10.8,10.8,0,0,1-912-448Z"
              transform="translate(912.5 448.5)"
              fill="none"
              stroke="#4791ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="!!error" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<style module lang="scss">
.baseInput {
  position: relative;
  width: 100%;
  padding: 1 16px 32px 0;
  margin-bottom: 12px;
  border-radius: 12px;
  background: #f7f7f7;
}
.label {
  position: absolute;
  display: block;
  font-family: Montserrat, sans-serif;
  padding: 5px 0 0 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  color: #707070;
}
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  border-radius: 8px;
  box-sizing: border-box;
  background: #f7f7f7;
  overflow: hidden;
}

.hasError {
  border: 0px solid $color-error;
}
.input {
  color: $color-dark;
  width: 100%;
  height: 54px;
  border: none;
  outline: none;
  padding: 32px 4px 12px 12px;
  letter-spacing: 0.1px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background: #f7f7f7;

  &:disabled {
    color: $color-grey !important;
  }
}
.append {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
}
.passwordToggle {
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: unset;
  transition: color 0.25s ease-in-out;
  color: $color-grey;
}
.error {
  font-family: $base-font;
  font-size: 12px;
  font-weight: 700;
  padding: 0 8px;
  margin-top: 4px;
  color: $color-error;
}
</style>
