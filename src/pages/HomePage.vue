<script setup lang="ts">
import { ref } from 'vue'
import type { IGetOblast } from "@/types";
import API from '@/api/API'
import OblastServices from "@/services/oblastlist.services"

const OblastList = ref<IGetOblast[]>([])

OblastGetAll()
function OblastGetAll() {
  OblastServices.GetList().then((res: any)=>{
    OblastList.value = res.data
  })
}




</script>
<template>
  <div class="page-content"></div>
</template>

<style lang="scss"></style>
