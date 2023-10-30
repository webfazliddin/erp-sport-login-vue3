<template>
  <div class="data-table">
    <el-table :data="data" stripe border style="width: 100%">
      <el-table-column label="amallar">
        <div class="actions-icon">
          <el-tooltip class="box-item" effect="dark" content="O'zgartrish" placement="top">
            <div>
              <svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="pencil"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-pencil b-icon bi"
              >
                <g>
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  ></path>
                </g>
              </svg>
            </div>
          </el-tooltip>
          <el-tooltip class="box-item" effect="dark" content="O'chirish" placement="top">
            <div>
              <svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="trash"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-trash b-icon bi"
              >
                <g>
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  ></path>
                </g>
              </svg></div
          ></el-tooltip>
        </div>
      </el-table-column>
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { ref } from 'vue'

export interface ISearch {
  value: string
  label: string
  prop: string
  columns: any
  data: any
}

withDefaults(defineProps<ISearch>(), {
  columns: [],
  data: []
})

const search = ref('')
</script>

<style lang="scss">
.data-table {
  padding: 24px !important;
}

.el-table {
  border: 1px solid #d8dbe0 !important;
}

.actions-icon {
  display: flex !important;
  gap: 10px;

  svg {
    cursor: pointer;
    path {
      color: #4791ff !important;
    }
  }
}
.el-tooltip {
  margin-top: 20px !important;
}
</style>
