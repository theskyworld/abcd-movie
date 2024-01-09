<script setup lang="ts">
import { ref } from "vue";

const isRegister = ref(false);
const isLogin = ref(true);

const curActive = ref("login");
</script>
<template>
  <div class="login-card-container">
    <div class="column" :class="{ image: curActive !== 'login' }">
      <div class="guide" v-if="!isLogin">
        <h1>登录</h1>
        <p>使用邮箱和密码登录</p>
        <button
          @click="
            () => {
              isLogin = true;
              isRegister = false;
              curActive = 'login';
            }
          "
        >
          登录
        </button>
      </div>
      <div class="login" v-else>
        <h1>登录</h1>
        <form>
          <div class="form-item">
            <input type="text" class="form-element" placeholder="邮箱" />
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
    </div>
    <div class="column" :class="{ image: curActive !== 'register' }">
      <div class="guide" v-if="!isRegister">
        <h1>注册</h1>
        <p>如果还没有账号,在这里进行注册</p>
        <button
          @click="
            () => {
              isRegister = true;
              isLogin = false;
              curActive = 'register';
            }
          "
        >
          注册
        </button>
      </div>
      <div class="register" v-else>
        <h1>注册</h1>
        <form>
          <div class="form-item">
            <input
              type="text"
              class="form-element"
              placeholder="请输入用户名"
            />
          </div>
          <div class="form-item">
            <input type="email" class="form-element" placeholder="请输入邮箱" />
          </div>
          <div class="form-item">
            <input
              type="password"
              class="form-element"
              placeholder="请输入密码"
            />
          </div>
          <div class="flex">
            <button type="button">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./loginCard.scss";
</style>
