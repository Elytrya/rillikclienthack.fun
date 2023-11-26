<template>

    <div class="pricing-page">
        <div class="menu-bar">
    <a href="http://localhost:8080/main" class="menu-item">Главная</a>
    <a href="http://localhost:8080/buy" class="menu-item">Купить</a>
    <a href="https://discord.gg/W7CawUpbZB" class="menu-item">Поддержка</a>
    <a href="http://localhost:8080/developers" class="menu-item">Разработчики</a>
  </div>
      <h1>Выберите тариф</h1>
      <div class="pricing-plans">
        <div class="pricing-plan">
          <h2>Клиент</h2>
          <p> 100₽ </p>
          <ul>
            <li>Вы покупаете клиент навсегда</li>
            <li>Получение сразу после покупки</li>
          </ul>
          <button id="btn" onclick="window.location.href = 'https://discord.gg/Xq6svfEuDP'">Купить</button> 
        </div>
        <div class="pricing-plan">
          <h2>Конфиги</h2>
          <p>От 15₽</p>
          <ul>
            <li>Хорошие, красивые конфиги</li>
            <li>Помощь по установке</li>

          </ul>
          <button id="btn" onclick="window.location.href = 'https://discord.gg/Xq6svfEuDP'">Купить</button>         </div>
        <div class="pricing-plan">
          <h2>Прочие услуги</h2>
          <p>От 45₽</p>
          <ul>
            <li>Поможем, чем сможем</li>
            <li>Постараемся как можно быстрее</li>
          </ul>
          <button id="btn" onclick="window.location.href = 'https://discord.gg/Xq6svfEuDP'">Купить</button>         </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      purchasePlan(plan) {
      }
    }
  }
  </script>
  
  <style lang="scss">
  
  .pricing-page {
    text-align: center;
    padding: 2px;

  }
  
  .pricing-plans {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .pricing-plan {
    background-color:#ffffff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
  }
  
  .pricing-plan h2 {
    color: #333;
  }
  
  .pricing-plan p {
    color: #777;
  }
  
  .pricing-plan ul {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .pricing-plan button {
    background-color: #3c6b46;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 200px;
  }
.pricing-plan{
    height: 400px;
}
  </style>