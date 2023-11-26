<template>
    <div>
        <div class="menu-bar">
    <a href="http://localhost:8080/main" class="menu-item">Главная</a>
    <a href="http://localhost:8080/buy" class="menu-item">Купить</a>
    <a href="https://discord.gg/W7CawUpbZB" class="menu-item">Поддержка</a>
    <a href="http://localhost:8080/developers" class="menu-item">Разработчики</a>
  </div>
  <div class="main-menu">
    <div class="developers">
      <div class="name">Разработчики</div>
      <div class="first_developer">BeluPaster - Главный разработчик клиента  </div>
      <div class="second_developer">Wavea@Studio - Разработчик сайта.</div>

    </div>
    <div class="screenshot">
        <img class="img_developers" src="https://cdn.discordapp.com/attachments/1152649483734224976/1177917951836442634/image.png?ex=65744094&is=6561cb94&hm=3b73c873604b5d09ca6c2b43323a3d8651796481468c1060aa3cbee72203e752&" alt="Нам не удалось загрузить скриншот. Извините.">

    </div>
  </div>
      </div>
  </template>
  
  <style>
.developers {
    flex: 1;
     margin-right: 40px;
}
.img_developers{
    width: 900px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
.img_developers:hover {
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

    .one_developer {
      flex: 1;
      margin-right: 40px;
    }

    .name {
      font-size: 60px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .two_developer {
      font-size: 24px;
    }

    .screenshot {
      flex: 1;
      margin-bottom: 40px;
    }

    .menu-bar {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 1 1px;
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
  