<script setup lang="ts"></script>
<template>
  <div class="login-card-container">
    <div class="column">
      <h1>登录</h1>
      <p>使用用户名和密码进行登录</p>
      <form>
        <div class="form-item">
          <input type="text" class="form-element" placeholder="用户名或邮箱" />
        </div>
        <div class="form-item">
          <input type="password" class="form-element" placeholder="密码" />
        </div>
        <div class="form-checkbox-item">
          <input type="checkbox" id="remember" checked />
          <label for="remember">记住</label>
        </div>
        <div class="flex">
          <button type="button">登录</button>
        </div>
      </form>
    </div>
    <div class="column">
      <h2>注册</h2>
      <p>如果还没有账号,在这里进行注册</p>
      <a href="#">注册</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./loginCard.scss";
</style>
