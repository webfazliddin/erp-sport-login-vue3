<script setup lang="ts">
import { ref } from 'vue'
import classnames from 'classnames'
import { withDefaults } from 'vue'

export interface IBaseAlert {
  message: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
}

withDefaults(defineProps<IBaseAlert>(), {
  message: '',
  variant: 'danger'
})
</script>

<template>
  <div :class="classnames($style.alert, $style[variant])">
    <div :class="$style.title">Хатолик</div>
    <span :class="$style.message">
      {{ message }}
    </span>
  </div>
</template>

<style module lang="scss">
.alert {
  padding: 30px 20px;
  width: 27%;
  border-radius: 4px;
  position: absolute;
  right: 20px;
}

.title {
  margin-top: -20px;
  color: #721c24;
  font-weight: bold;
  margin-bottom: 10px;
font-family: $base-font;
}

.message {
  font-size: 14px;
font-family: $base-font;
  font-weight: 400;
  color: #721c24;
}

.primary {
  color: $color-primary;
  background: $color-primary-light;
  border-left: 8px solid $color-primary;
}

.secondary {
  color: $color-secondary;
  background: $color-secondary-light;
  border-left: 8px solid $color-secondary;
}

.success {
  color: $color-green;
  background: $color-green-light;
  border-left: 8px solid $color-green;
}

.danger {
  color: rgb(249, 218, 221);
  background: $color-error-light;
  border-left: 8px solid $color-error;
}

.warning {
  color: $color-yellow-dark;
  background: $color-yellow-light;
  border-left: 8px solid $color-yellow-dark;
}
</style>
