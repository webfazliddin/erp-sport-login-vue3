<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export interface ILoginView {
  username: string
  password: string
}

const router = useRouter()
const authStore = useAuthStore()
const isLoading = ref<boolean>(false)
const showPassword = ref(false)
const showToast = ref(false)
const serverError = reactive({
  error: ''
})
const serverSuccess = reactive({
  error: ''
})

const formData = ref({
  username: '',
  password: ''
})

const errors = reactive({
  username: '',
  password: ''
})

const showPasswordClick = () => {
  showPassword.value = !showPassword.value
}

const changeField = (propertyName: 'username' | 'password', value: string) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const login = () => {
  isLoading.value = true
  showToast.value = true
  setTimeout(() => (showToast.value = false), 3000)

  authStore
    .login({
      username: formData.value.username,
      password: formData.value.password
    })
    .then((response) => {
      serverError.error = ''
      serverSuccess.error = response.data.error
      router.push('/home')
    })
    .catch((error) => {
      const apiError = error.response.data
      serverError.error = apiError.error

      if (apiError.errors.username) {
        errors.username = apiError.errors.username
      }

      if (apiError.errors.password) {
        errors.password = apiError.errors.password
      }
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div :class="$style.login">
    <h1>Авторизация</h1>

    <div v-if="showToast">
      <BaseAlert
        v-if="!!serverError.error"
        :class="$style.baseAlert"
        variant="danger"
        :message="serverError.error"
      />
    </div>

    <BaseAlert
      v-if="!!serverSuccess.error"
      :class="$style.baseAlert"
      variant="success"
      :message="serverSuccess.error"
    />

    <BaseInput
      label="Логин"
      type="email"
      placeholder="Фойдаланувчи (Логин)"
      :value="formData.username"
      :error="errors.username"
      :disabled="isLoading"
      @on-input="(value) => changeField('username', value)"
    />

    <BaseInput
      :class="$style.baseInput"
      label="Пароль"
      type="password"
      placeholder="Пароль"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      :disabled="isLoading"
      @onPasswordToggle="showPasswordClick"
      @on-input="(value) => changeField('password', value)"
    />

    <div :class="$style.parentBaseBtn">
      <div>
        <BaseButton
          variant="primary"
          :class="$style.baseBtn"
          :loading="isLoading"
          @on-click="login"
        >
          Кириш
        </BaseButton>
      </div>
      <div>
        <BaseButton variant="primary" :class="$style.baseBtn"> OneId </BaseButton>
      </div>
    </div>

    <RouterLink to="/" :class="$style.forgotLink">Забыли пароль?</RouterLink>
  </div>
</template>

<style module lang="scss">
h1 {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  font-size: 34px;
  letter-spacing: 1px;
  color: #3c4b64;
}
.baseAlert {
  position: absolute;
  right: 20px;
  top: 20px;
}

.baseInput {
  margin-bottom: 28px !important;
}

.baseBtn {
  width: 100%;
  margin-bottom: 25px;
}
.parentBaseBtn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}
.forgotLink {
  color: rgb(112, 112, 112);
  display: block;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: $color-primary;
  }
}
</style>
