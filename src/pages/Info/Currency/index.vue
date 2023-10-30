<template>
  <WhiteContainer class="whiteContainer">
    <div class="page-header">
      <div><BackButton /></div>
      <div class="page-text">Valyuta</div>
      <div><CreateButton /></div>
    </div>
    <Search v-model="searchText" />
    <DataTable :data="filteredData" :columns="tableColumns" />
  </WhiteContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchText = ref('')

const tableColumns = [
  { prop: 'date', label: 'Column 1' },
  { prop: 'name', label: 'Column 2' },
  { prop: 'address', label: 'Column 2' }
]

const myData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles'
  }
])

const filteredData = computed(() => {
  console.log(searchText.value)
  const search = searchText.value.toLowerCase()
  return myData.value.filter((item) => {
    return (
      item.date.toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search) ||
      item.address.toLowerCase().includes(search)
    )
  })
})
</script>

<style lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}
.page-text {
  font-family: $base-font;
  font-size: 24px;
  font-weight: 500;
  color: #3c4b64;
}
.search {
  padding: 0 24px 30px 24px;
  border-bottom: 1px solid #d8dbe0;
}
</style>
