<script setup>
import {ref,onMounted} from "vue";
import {gsap} from "gsap";
const isPC=ref(true);
const isExpanded = ref(false);
function checkMobile(){
  isPC.value = window.innerWidth > 768
}
onMounted(()=>{
  window.addEventListener('resize', checkMobile);
  isPC.value = window.innerWidth > 768
  gsap.set("#view",{
    filter:'blur(0px)  brightness(1)',
  })
})
const status = ref(false)
function viewTouch(){
  if(status.value)closeMenu()
}
function more() {
  if (!status.value) {
    openMenu()
  } else {
    closeMenu()
  }
}
function openMenu(){

  gsap.to("#header_content", {
    duration: 1,
    height: 'auto',
    width: '90vw', // 使用固定宽度
    ease: "back.inOut(1.7)",
  });
  status.value = true;

}
function closeMenu(){
  gsap.to("#header_content", {
    duration: 1,
    height: '4rem',
    width: '40%',
    ease: "back.inOut(1.7)",
  });
  status.value = false;
}
</script>

<template>
  <div>
    <div class="h-full w-full">
        <div id="center" class="z-20 flex justify-center w-full fixed top-5">
          <template v-if="isPC">
          <div id="header_content" class="overflow-hidden justify-between align-middle px-[3vw] bg-[#FFFFFF95] backdrop-blur-md flex shadow-xl rounded-2xl h-16 w-[70%]" >
            <div id="left" class="h-full flex items-center justify-between">
              <router-link class=" pr-4 flex items-center justify-between" to="/welcome">
                <img id="icon" class="h-1/3" src="@/assets/logo.svg" alt="" />
                <h1 id="name" class="h-1/2 flex items-center justify-between ml-1 pr-1 text-sm font-semibold">
                  Ceit
                </h1>
              </router-link>
            </div>
              <div class="flex items-center ">
                <router-link class="pl-4 pr-4 flex items-center justify-between" to="main">首页</router-link>
                <router-link class="pl-4 pr-4 flex items-center justify-between" to="ai">AI平台</router-link>
                <router-link class="pl-4 pr-4 flex items-center justify-between" to="oj">OJ评测</router-link>
                <router-link class="pl-4 pr-4 flex items-center justify-between" to="monitor">监控</router-link>
  <!--              <router-link class="pl-4 pr-4 flex items-center justify-between" to="github"><img class="w-5 aspect-square" src="@/assets/github-mark-white.svg"/> </router-link>-->
                <el-switch  class="pl-4 pr-4"></el-switch>
              </div>
          </div>
          </template>
            <template v-else>
              <div id="header_content" class=" px-[3vw] bg-[#FFFFFF95] backdrop-blur-md flex-col overflow-hidden shadow-md rounded-2xl h-16 w-[40%]"  @click="more">
                <div id="top" class="h-16 flex items-center justify-center">
                    <img id="icon" class="h-1/2" src="@/assets/logo.svg" alt="" />
                    <h1 id="name" class="h-1/2 flex items-center justify-between ml-1 pr-1 text-sm font-semibold">
                      Ceit
                    </h1>
                </div>
                <router-link class="h-10 flex justify-center " to="main">首页</router-link>
                <router-link class="h-10 flex justify-center" to="ai">AI平台</router-link>
                <router-link class="h-10 flex justify-center" to="oj">OJ评测</router-link>
                <router-link class="h-10 flex justify-center" to="monitor">监控</router-link>
              </div>
            </template>

        </div>
    </div>
    <div id="view"  @pointerdown="viewTouch" >
    <router-view  class="w-full" v-slot="{ Component }">
      <transition name="indexTransition" >
        <component  :is="Component" />
      </transition>
    </router-view>
    </div>
  </div>
</template>

<style scoped>

.indexTransition-enter-active {
  transition: all 1s cubic-bezier(.78,.17,.2,1.51) 0s;
}
.indexTransition-leave-active {
  transition: all 1.5s cubic-bezier(0,.72,.22,.99);
}

.indexTransition-enter-from{
  filter: blur(30px);
  transform: scale(0.95) translate(0,0);
  opacity: 0;
}
.indexTransition-enter-to{
  filter: blur(0px);
  transform: scale(1) translate(0,0);
  opacity: 1;
}
.indexTransition-leave-from {
  filter: blur(0px);
  opacity: 0;
}
.indexTransition-leave-to {
  transform: scale(0.95);
  filter: blur(30px) brightness(0.7);
  opacity: 0;
}
</style>