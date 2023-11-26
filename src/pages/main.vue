<template>
    <div>
        <div class="menu-bar">
    <a href="http://localhost:8080/main" class="menu-item">Главная</a>
    <a href="http://localhost:8080/buy" class="menu-item">Купить</a>
    <a href="https://discord.gg/W7CawUpbZB" class="menu-item">Поддержка</a>
    <a href="http://localhost:8080/developers" class="menu-item">Разработчики</a>


  </div>
  <div class="main-menu">
    <div class="client-info">
      <div class="client-name">RillikClient</div>
      <div class="client-description">Мы предоставляем вам лучший клиент для майнкрафта, который даст вам наилучшие впечатления от игры.</div>
    </div>
    <div class="screenshot">

      <img src="https://cdn.discordapp.com/attachments/1176924120659804232/1177587963513810954/image.png?ex=65730d41&is=65609841&hm=dbb06a7898f56c36ef7a9351d6563ed58dc4abe5d68aea85722950eaf5f1da60&" alt="Скриншот" width="500">

    </div>

  </div>

      </div>
  </template>
  
  <style>

img{
  opacity: 0.5;
  transition: opacity 0.3s ease;


}
img:hover {
  opacity: 1;
  transition: opacity 0.3s ease;

}
  body{

    background: linear-gradient(to bottom, #3c6b46, #000000);
      height: 719px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-family: Arial, sans-serif;
      overflow: hidden;


  }
  .main-menu {
      display: flex;
      align-items: center;
      padding: 40px;
      color: white;
    }

    .client-info {
      flex: 1;
      margin-right: 40px;
    }

    .client-name {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .client-description {
      font-size: 24px;
    }

    .screenshot {
      flex: 1;
      margin-bottom: 40px;
    }

    .menu-bar {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 20px;
        width: 1000px;
      justify-content: center;
      align-items: center;
    }

    .menu-item {
      margin: 0 20px;
      color: white;
      text-decoration: none;
      font-size: 24px;
    }
button{


border: none;
outline: none;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
color: blakc;
background-color: rgb(62, 62, 62);
border-radius: 10px;
transition: all 1s;
margin: 0 auto;
display: block;
width: 300px;
margin-top: 555px;

}

  </style>
  