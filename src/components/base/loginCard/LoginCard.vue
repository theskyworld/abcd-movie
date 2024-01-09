<script setup lang="ts">
import { createApp, ref, watch } from "vue";
import { post, put } from "@/server/base";
import Notification from "../notification/Notification.vue";
import { AxiosResponse } from "axios";

const isRegister = ref(false);
const isLogin = ref(true);
const isEmailLoginValid = ref(true);
const isPasswordLoginValid = ref(true);
const isEmailRegisterValid = ref(true);
const isPasswordRegisterValid = ref(true);
const isUsernameValid = ref(true);
const emailLoginVal = ref("");
const passwordLoginVal = ref("");
const emailMessage = ref("请输入合法的邮箱地址");
const passwordMessage = ref(
  "密码长度应当至少8位,且包含大小写字母、数字和特殊符号",
);
const emailRegisterVal = ref("");
const passwordRegisterVal = ref("");
const usernameVal = ref("");
const usernameMessage = ref("用户名为必填项");

const curActive = ref("login");

function validateEmail(email: string) {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(email);
}
function validatePassword(password: string) {
  return (
    password.length >= 8 &&
    Boolean(password.match(/[a-z]/)) &&
    Boolean(password.match(/[A-Z]/)) &&
    Boolean(password.match(/[0-9]/)) &&
    Boolean(
      password.match(
        /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·！#￥（——）：；“”‘、，|《。》？、【】[\]]/,
      ),
    )
  );
}
function validateUsername(username: string) {
  return username.length > 0;
}

function toLogin() {
  isLogin.value = true;
  isRegister.value = false;
  curActive.value = "login";
  // 清空输入框
  emailRegisterVal.value = "";
  passwordRegisterVal.value = "";
  usernameVal.value = "";
  // 重置有效值
  isEmailLoginValid.value = true;
  isPasswordLoginValid.value = true;
}
function toRegister() {
  isRegister.value = true;
  isLogin.value = false;
  curActive.value = "register";
  // 清空输入框
  emailLoginVal.value = "";
  passwordLoginVal.value = "";
  // 重置有效值
  isEmailRegisterValid.value = true;
  isPasswordRegisterValid.value = true;
  isUsernameValid.value = true;
}

function showNotification(content: string, type: string) {
  // 将Notification组件挂载到body上
  const notificationContainerElem = document.createElement("div");
  notificationContainerElem.style.position = "absolute";
  notificationContainerElem.style.top = "0";
  notificationContainerElem.style.left = "50%";
  notificationContainerElem.style.zIndex = "10000";
  const app = createApp(Notification, {
    content,
    type,
  });
  app.mount(notificationContainerElem);
  // 添加到body最前面
  document.body.prepend(notificationContainerElem);
}

function register() {
  if (
    isEmailRegisterValid.value &&
    isPasswordRegisterValid.value &&
    isUsernameValid.value &&
    emailRegisterVal.value &&
    passwordRegisterVal.value &&
    usernameVal.value
  ) {
    post("api/user/register", {
      username: usernameVal.value,
      email: emailRegisterVal.value,
      password: passwordRegisterVal.value,
    })
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          showNotification("注册成功,即将前往登录", "success");
          // 为登录界面中的邮箱地址和密码填值
          emailLoginVal.value = emailRegisterVal.value;
          passwordLoginVal.value = passwordRegisterVal.value;
          // 前往登录
          setTimeout(toLogin, 3000);
        }
      })
      .catch((err) => {
        showNotification(err.response.data.err.message, "error");
      });
  }
}

watch(emailLoginVal, () => {
  isEmailLoginValid.value = validateEmail(emailLoginVal.value);
});
watch(passwordLoginVal, () => {
  isPasswordLoginValid.value = validatePassword(passwordLoginVal.value);
});
watch(emailRegisterVal, () => {
  isEmailRegisterValid.value = validateEmail(emailRegisterVal.value);
});
watch(passwordRegisterVal, () => {
  isPasswordRegisterValid.value = validatePassword(passwordRegisterVal.value);
});
watch(usernameVal, () => {
  isUsernameValid.value = validateUsername(usernameVal.value);
});
</script>
<template>
  <div class="login-card-container">
    <div class="column" :class="{ image: curActive !== 'login' }">
      <div class="guide" v-if="!isLogin">
        <h1>登录</h1>
        <p>使用邮箱和密码登录</p>
        <button @click="toLogin">登录</button>
      </div>
      <div class="login" v-else>
        <h1>登录</h1>
        <form>
          <div class="form-item">
            <input
              type="email"
              v-model="emailLoginVal"
              class="form-element"
              placeholder="邮箱"
            />
            <div v-show="!isEmailLoginValid" class="message">
              {{ emailMessage }}
            </div>
          </div>
          <div class="form-item">
            <input
              type="password"
              class="form-element"
              placeholder="密码"
              v-model="passwordLoginVal"
            />
            <div class="message" v-show="!isPasswordLoginValid">
              {{ passwordMessage }}
            </div>
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
        <button @click="toRegister">注册</button>
      </div>
      <div class="register" v-else>
        <h1>注册</h1>
        <form>
          <div class="form-item">
            <input
              type="text"
              v-model="usernameVal"
              class="form-element"
              placeholder="请输入用户名"
            />
            <div v-show="!isUsernameValid" class="message">
              {{ usernameMessage }}
            </div>
          </div>
          <div class="form-item">
            <input
              type="email"
              v-model="emailRegisterVal"
              class="form-element"
              placeholder="请输入邮箱"
            />
            <div v-show="!isEmailRegisterValid" class="message">
              {{ emailMessage }}
            </div>
          </div>
          <div class="form-item">
            <input
              type="password"
              class="form-element"
              placeholder="请输入密码"
              v-model="passwordRegisterVal"
            />
            <div v-show="!isPasswordRegisterValid" class="message">
              {{ passwordMessage }}
            </div>
          </div>
          <div class="flex">
            <button type="button" @click="register">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./loginCard.scss";
</style>
