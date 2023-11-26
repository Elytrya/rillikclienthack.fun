
import { RouterLink } from 'vue-router';

<template>
  <div id="app">
    <router-view></router-view>
    
    <button id="btn" onclick="window.location.href = 'http://localhost:8080/main'">Нажмите на кнопку для продолжения</button> 
    </div>

    
</template>

<style lang="scss">
$maincolor: "#3c6b46";
#btn{
  padding: 10px 15px;
  border: none;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(35, 38, 33);
  border-radius: 20px;
  transition: all 1s;
}

/*анимация */

button:hover{
  background-color: #3c6b46;
  transform: scale(1.6);
}

body{
  background: linear-gradient(to bottom, #3c6b46, #000000);
    height: 719px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
</style>
