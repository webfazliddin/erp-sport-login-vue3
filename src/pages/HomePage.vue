<template>
  <div class="parent-name">
    <div><img style="width: 40px" src="../assets/ihma.svg" /></div>
    <div class="name">
      Ўзбекистон Республикаси Президенти ҳузуридаги Ижтимоий ҳимоя миллий агентлиги
    </div>
  </div>

  <div class="title">ПОМга буюртма бериш</div>

  <div class="wrapperpom">
    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">Ҳужжат рақами:</div>
        <div>2024-001136</div>
      </div>
     
    </div>

    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">Ҳужжат санаси:</div>
        <div>10.03.2024</div>
      </div>
    </div>

    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">РТВ ва ПОМ классификатори:</div>
        <div>Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </div>
    </div>

    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">Ҳолати:</div>
        <div>
Яратилган</div>
      </div>
    </div>
    
    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">Маҳсулот нархи (БҲМ бараварида):</div>
        <div>1.9</div>
      </div>
    </div>

    <div>
      <div style="margin-bottom: 10px">
        <div class="title-document">Субсидия суммаси:</div>
        <div>578 000</div>
      </div>
    </div>
  </div>

 <div class="wrapper">
  <div class="wrapperpom2"> 
    <div>
      <div class="title-document">Вилоят*</div>
      <div>
        <el-select v-model="value" placeholder="Қуйидагилардан танланг ..." style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
    </div>
<div>
  <div class="title-document">Ишлаб чиқарувчи корхона*</div>
      <div>
        <el-select v-model="value2" placeholder="Қуйидагилардан танланг ..." style="width: 240px">
          <el-option
            v-for="item in options2"
            :key="item.value2"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
</div>

  </div>
   
  

   <div class="common-layout">
    <el-container>
      <div class="card">
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="pomimg"><img src="../assets/kalyaska.jpg"></div>
        <div class="text">Ногиронлар аравачаси електр 20НА, пастки бошқарув панели, йенгил, катланадиган, 200 кг</div>
      </el-card>
    </div>
    
   </div>
      </el-container></div>
 </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const options = [
  {
    value: 'Самарқанд шаҳри',
    label: 'Самарқанд шаҳри'
  },
  {
    value: 'Андижон вилояти',
    label: 'Андижон вилояти'
  },
  {
    value: 'Тошкент вилояти',
    label: 'Тошкент вилояти'
  },
  {
    value: 'Тошкент шаҳри',
    label: 'Тошкент шаҳри'
  }
]
const options2 = [
  {
    value2: '"ORTOPEDIYA REABILITATSIYA" MASULIYATI CHEKLANGAN JAMIYATI',
    label: '"ORTOPEDIYA REABILITATSIYA" MASULIYATI CHEKLANGAN JAMIYATI'
  },

]
</script>
<style>
.parent-name {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e6e5e5;
  gap: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.name {
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #76a471;
}

.title {
  font-size: 20px;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 20px;
}
.wrapperpom {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.wrapper {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  
}
.wrapperpom2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}
.title-document {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 5px;
}
.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.pomimg {
  display: flex;
  justify-content: center;
}
.pomimg img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.text {
  text-align: center;
}
.el-card {
  width: auto !important;
  cursor: pointer !important;
}

@media screen and (max-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .card {
    display: grid;
    grid-template-columns:repeat(1, 1fr);
  }
}


</style>
