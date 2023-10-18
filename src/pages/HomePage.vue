<script setup lang="ts">
import { onMounted, ref } from 'vue'
import API from '@/api/API'
import type { IOblast } from '@/types'

const isLoading = ref<boolean>(false)
const oblastList = ref<IOblast[]>([])

onMounted(async () => {
  isLoading.value = true
  const promiseOblast = API.getOblast()

  await promiseOblast.then((data) => {
    oblastList.value = data.data
    console.log(data.data)
  })

  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading">
    <BaseSpinner />
  </div>
  <div v-else class="oblastCard__list">
    <OblastCard
      v-for="oblast in oblastList"
      :key="`oblastList__${oblast.id}`"
      :name="oblast.name"
    />
  </div>
</template>

<style lang="scss">
.oblastCard {
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @include breakpoint('lg') {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
