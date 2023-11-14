<template>
  <div class="center">
    <div class="label-parent">
      <label style="margin-left: -55px" class="label" for="number">Simple Number</label>
      <label class="label" for="number">Quadratic Number</label>
    </div>

    <div class="parent">
      <div class="wrapper">
        <input
          class="input"
          v-model="simpleNumber"
          type="number"
          placeholder="Enter your number"
          required
        />
      </div>
      <div class="quadraticNumber">
        <div>Quadratic Number:</div>
        <div>{{ quadraticNumber }}</div>
      </div>
    </div>
    <div class="base-button" @click="convertQuadratic">Convert to quadratic</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const simpleNumber = ref(0)
const quadraticNumber = ref(0)

const convertQuadratic = () => {
  quadraticNumber.value = simpleNumber.value * simpleNumber.value
  console.log(simpleNumber)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');
.center {
  display: grid;
  justify-content: center;
  margin-top: 100px;
}
.parent {
  display: flex;
  gap: 100px;
  margin-bottom: 20px;
}
.label-parent {
  display: flex;
  justify-content: space-around;
}
.label {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: gray;
  margin-bottom: 8px;
}
.wrapper {
  border: 1px solid gray;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  align-content: center;
  background: rgb(238, 238, 241);
  width: 209px;
}
.input {
  color: gray;
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 4px 12px 12px;
  letter-spacing: 0.1px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.quadraticNumber:hover {
  background: rgb(238, 238, 241);
}
.quadraticNumber {
  display: grid;
  align-content: center;
  font-family: 'Nunito', sans-serif;
  border: 1px solid gray;
  height: 260px;
  cursor: pointer;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 1px,
    rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}

.base-button {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  background: #5469d6;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  text-align: center;
}
.base-button:hover {
  opacity: 0.9;
}
</style>
