<template>
  <div class="container">
    <div class="parent-name">
      <div><img style="width: 40px" src="../assets/ihma.svg" /></div>
      <div class="name">
        O‘zbekiston Respublikasi Prezidenti huzuridagi Ijtimoiy himoya milliy agentligi
      </div>
    </div>
    <div class="level-title">1-etap : Raqamlashtirish jarayoni to'g'risida ma'lumot</div>
    <div class="wrapper">
      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #67c23a" class="type-number">1</div>
            <div class="title">Keksa va nogironlarning ijtimoiy himoyasi</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="90" :status="'success'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="50" :status="'success'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="70" :status="'success'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="70" :status="'success'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="60" :status="'success'" />
        </el-card>
      </div>
      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #409eff" class="type-number">2</div>
            <div class="title">Sanatoriya</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="90" :status="'info'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="50" :status="'info'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="90" :status="'info'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="70" :status="'info'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="70" :status="'info'" />
        </el-card>
      </div>
      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #e6a23c" class="type-number">3</div>
            <div class="title">Inson markazi</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="60" :status="'warning'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="15" :status="'warning'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="35" :status="'warning'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="24" :status="'warning'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="20" :status="'warning'" />
        </el-card>
      </div>
      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #e6a23c" class="type-number">4</div>
            <div class="title">Saxovat</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="90" :status="'warning'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="70" :status="'warning'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="50" :status="'warning'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="30" :status="'warning'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="10" :status="'warning'" />
        </el-card>
      </div>
      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #f56c6c" class="type-number">5</div>
            <div class="title">Muruvvat</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="80" :status="'exception'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="30" :status="'exception'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="40" :status="'exception'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="40" :status="'exception'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="30" :status="'exception'" />
        </el-card>
      </div>

      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #f56c6c" class="type-number">6</div>
            <div class="title">Voyaga yetmaganlar</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="60" :status="'exception'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="30" :status="'exception'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="40" :status="'exception'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="10" :status="'exception'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="10" :status="'exception'" />
        </el-card>
      </div>

      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #67c23a" class="type-number">7</div>
            <div class="title">Ma'muriyat</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="90" :status="'success'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="20" :status="'success'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="90" :status="'success'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="90" :status="'success'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="90" :status="'success'" />
        </el-card>
      </div>

      <div>
        <el-card>
          <div class="title-wrapper">
            <div style="background: #409eff" class="type-number">8</div>
            <div class="title">INSON RESURSLARI VA MOLIYA RESURSLARINI BOSHQARISH</div>
          </div>
          <div class="text">Biznes jarayonni o'rganish:</div>
          <ProgressBar :percentage="40" :status="'info'" />
          <div class="text">Biznes jarayonni o'zgartirishga taklif:</div>
          <ProgressBar :percentage="20" :status="'info'" />
          <div class="text">AT ni ishlab chiqish</div>
          <ProgressBar :percentage="30" :status="'info'" />
          <div class="text">Joriy etish</div>
          <ProgressBar :percentage="20" :status="'info'" />
          <div class="text">Ma'lumotlarni kiritish</div>
          <ProgressBar :percentage="2" :status="'info'" />
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}
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
  color: #76a471;
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
