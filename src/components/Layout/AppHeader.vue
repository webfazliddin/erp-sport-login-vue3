<template>
  <header
    :class="
      classnames($style.header, {
        [$style.isElevated]: elevated
      })
    "
  >
    <div :class="$style.headerLeft">
      <div :class="$style.togleIcon" @click="toggleSidebar">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="rgba(0, 0, 21, 0.5)"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </div>
      <div :class="$style.togleIconMobile" @click="toggleSidebarMobile">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="rgba(0, 0, 21, 0.5)"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </div>
      <div :class="$style.organization">
        Tashkilot : "Raqamlashtirish va sertifikatlash markazi" MChJ (309478538)
      </div>
      <div :class="$style.userName">Foydalanuvchi (Login) : webaseadmin</div>
    </div>

    <div :class="$style.sportErp">SportErp</div>

    <div :class="$style.headerRight">
      <div :class="$style.searchIcon">
        <svg
          data-v-47344966=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="search"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-search b-icon bi"
          style="cursor: pointer"
        >
          <g data-v-47344966="">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            ></path>
          </g>
        </svg>
      </div>
      <div :class="$style.globeIcon">
        <svg
          data-v-47344966=""
          viewBox="0 0 16 16"
          width="18"
          height="18"
          focusable="false"
          role="img"
          aria-label="globe"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-globe b-icon bi"
        >
          <g data-v-47344966="" transform="translate(8 8) scale(1 1) translate(-8 -8)">
            <path
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
            ></path>
          </g>
        </svg>
        <span>o'z</span>
      </div>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div :class="$style.userIcon"><img src="../../assets/header/user.png" /></div>
          </span>
          <template #dropdown>
            <el-dropdown-menu @click="logout">
              <el-dropdown-item>
                <div>
                  <svg
                    data-v-3fb723ba=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="lock"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi-lock mr-2 b-icon bi"
                  >
                    <g data-v-3fb723ba="">
                      <path
                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div :class="$style.chiqish">Chiqish</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

export interface IAppHeader {
  elevated?: boolean
}

withDefaults(defineProps<IAppHeader>(), {
  elevated: false
})

const emit = defineEmits<{
  (e: 'togle-sidebar'): void
  (e: 'togle-sidebar-mobile'): void
}>()

const toggleSidebar = () => {
  emit('togle-sidebar')
}
const toggleSidebarMobile = () => {
  emit('togle-sidebar-mobile')
}

const AuthStore = useAuthStore()

const logout = () => {
  AuthStore.logout()
  router.push('/')
}
</script>

<style module lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  background-color: $color-white;
  transition: box-shadow 0.25s ease-in-out;

  &.isElevated {
    box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
  }
}
.headerLeft {
  display: flex;
  align-items: center;
  gap: 20px;
}
.togleIcon {
  width: 40px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: none;

  @include breakpoint('lg') {
    display: block;
  }

  &:hover {
    background: #1c60b1;
    svg path {
      stroke: #fff;
    }
  }

  svg {
    width: 20px;
  }
}
.togleIconMobile {
  width: 40px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: block;

  @include breakpoint('lg') {
    display: none;
  }

  &:hover {
    background: #1c60b1;
    svg path {
      stroke: #fff;
    }
  }

  svg {
    width: 20px;
  }
}
.organization {
  font-family: $base-font;
  font-size: 14px;
  font-weight: 500;
  color: #3c4b64;
  display: none;

  @include breakpoint('lg') {
    display: block;
  }
}
.userName {
  font-family: $base-font;
  font-size: 14px;
  font-weight: 500;
  color: #3c4b64;
  display: none;

  @include breakpoint('lg') {
    display: block;
  }
}
.sportErp {
  font-family: $base-font;
  font-size: 24.5px;
  font-weight: 500;
  line-height: 1.2;
  color: #3c4b64;
  display: block;

  @include breakpoint('lg') {
    display: none;
  }
}
.headerRight {
  display: flex;
  align-items: center;
  gap: 24px;
}
.globeIcon {
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    top: -12px;
    right: -12px;
    background: rgb(71, 145, 255);
    font-family: $base-font;
    font-size: 12px;
    font-weight: 500;
    color: $color-white;
    border-radius: 3px;
    padding: 3px;
  }
}
.userIcon {
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
}
.chiqish {
  font-family: $base-font;
  color: #4f5d73;
  font-weight: 400;
  margin: -2px 0 0 5px;
}
</style>

<style>
.el-popper__arrow {
  display: none !important;
}
</style>
