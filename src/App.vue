<script setup>
import router from "@/router/index.js";

if(!localStorage.hasShownWelcome){
  localStorage.hasShownWelcome = true;
  router.replace("/welcome");
}
</script>
<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>

.v-enter-active {
  transition: all 1s;
}
.v-leave-active {
  transition: all 1s;
}

.v-enter-from{
  filter: blur(30px);
  opacity: 0;
}
.v-enter-to{
  filter: blur(0px);
  opacity: 1;
}
.v-leave-from {
  filter: blur(30px);
  opacity: 0;
}
.v-leave-to {
  filter: blur(30px);
  opacity: 0;
}

body {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
</style>
