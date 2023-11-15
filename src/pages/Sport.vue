<template>
  <div class="parent-name">
    <div><img style="width: 40px" src="../assets/paralimpiya qomitasi.png" /></div>
    <div class="name">O'zbekiston Milliy Paralimpiya Qo'mitasi</div>
  </div>
  <div class="level-title">1-etap : Raqamlashtirish jarayoni to'g'risida ma'lumot</div>
  <div class="wrapper">
    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #67c23a" class="type-number">1</div>
          <div class="title">O'quv sport jarayonlari</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'success'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'success'" />
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #409eff" class="type-number">2</div>
          <div class="title">Kadrlar hisobi</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'info'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'info'" />
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #e6a23c" class="type-number">3</div>
          <div class="title">Trenerlar</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'warning'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'warning'" />
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #e6a23c" class="type-number">4</div>
          <div class="title">Trenerlarni sertifikatlash</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'warning'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'warning'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'warning'" />
      </el-card>
    </div>
    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #f56c6c" class="type-number">5</div>
          <div class="title">Terma jamoa a'zolari va zaxira</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'exception'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'exception'" />
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #f56c6c" class="type-number">6</div>
          <div class="title">Invertorlar va jihozlar</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="40" :status="'exception'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'exception'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="15" :status="'exception'" />
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #67c23a" class="type-number">7</div>
          <div class="title">Kalendar reja</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="40" :status="'success'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'success'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="15" :status="'success'" />
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #409eff" class="type-number">8</div>
          <div class="title">Sport tadbirlari va moliyalashtirish</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="50" :status="'info'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="90" :status="'info'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="70" :status="'info'" />
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #409eff" class="type-number">9</div>
          <div class="title">Stipendiya</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="40" :status="'info'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="13" :status="'info'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="13" :status="'info'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="13" :status="'info'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="13" :status="'info'" />
      </el-card>
    </div>

    <div>
      <el-card>
        <div class="title-wrapper">
          <div style="background: #e6a23c" class="type-number">10</div>
          <div class="title">PASSPORT - mobil ilovasi</div>
        </div>
        <div class="text">Biznes jarayonni o'rganish:</div>
        <ProgressBar :percentage="2" :status="'warning'" />
        <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
        <ProgressBar :percentage="2" :status="'warning'" />
        <div class="text">AT ni ishlab chiqish</div>
        <ProgressBar :percentage="2" :status="'warning'" />
        <div class="text">Joriy etish</div>
        <ProgressBar :percentage="2" :status="'warning'" />
        <div class="text">Ma'lumotlarni kiritish</div>
        <ProgressBar :percentage="3" :status="'warning'" />
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');
.parent-name {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  gap: 50px;
}
.name {
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #6a7ee6;
}
.level-title {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: rgb(85, 85, 85);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 10px 0;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}
.type-number {
  background: #5469d6;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 15px;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #fff;
}
.title {
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: rgb(56, 56, 56);
}
.text {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(113, 113, 113);
}
.el-card {
  border-radius: 15px;
  height: auto !important;
  cursor: pointer;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 1px,
    rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.el-card:hover {
  background: #5469d6 !important;
  .type-number {
    background: #fff !important;
    color: #5469d6 !important;
  }
  .title {
    color: #f2efef;
  }
  .text {
    color: #f2efef;
  }
}
@media screen and (max-width: 992px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
