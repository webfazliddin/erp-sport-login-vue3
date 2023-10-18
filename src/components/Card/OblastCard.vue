<template>
  <div class="oblastCard">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import type { IOblast } from '@/types'

export interface IOblastCard {
  name: string
}

const props = withDefaults(defineProps<IOblast>(), {
  name: ''
})
</script>

<style lang="scss">
.oblastCard {
  font-family: $base-font;
  background: #fff;
  border-radius: 6px;
  padding: 6px;
}
</style>
