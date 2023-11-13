<template>
    <div class="wrapper">
      <div>
        <el-card>
          <div class="title-wrapper">
            <div class="type-number">1</div>
            <div class="title">Ariza</div>
          </div>
          <div class="text">Text</div>
          <ProgressBar :percentage="90" :status="'success'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="70" :status="'warning'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="60" :status="'exception'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="80" :status="'info'" />
        </el-card>
      </div>
      <div>
        <el-card>
          <div class="title-wrapper">
            <div class="type-number">2</div>
            <div class="title">Chat</div>
          </div>
          <div class="text">Text</div>
          <ProgressBar :percentage="90" :status="'exception'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="70" :status="'warning'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="60" :status="'success'" />
          <div class="text">Text</div>
          <ProgressBar :percentage="80" :status="'info'" />
        </el-card>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito&family=Raleway:wght@300&family=Righteous&display=swap');
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
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
    font-size: 20px;
    text-transform: uppercase;
  }
  .text {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 14px;
  }
  .el-card {
    border-radius: 15px;
    height: auto !important;
    cursor: pointer;
    padding: 0 0 40px 0 !important;
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
      background: #fff;
      color: #5469d6;
    }
    .title {
      color: #f2efef;
    }
    .text {
      color: #f2efef;
    }
  }
  </style>
  