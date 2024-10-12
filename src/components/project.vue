<script setup>
import {ref} from "vue";
import router from "@/router/index.js";
const props = defineProps({
  title: String,
  arch: String,
  website:String,
  func:Array
})
console.log(props)
const func = ref([
  {
    title:'我肯定',
    img:''
  },
  {
    title:'在几百年前',
    img:''
  },
  {
    title:'就说过爱你',
    img:''
  },
  {
    title:'只是你忘了',
    img:''
  },
  {
    title:'我也没记起',
    img:''
  }
])
function jump(){
  window.location.href = props.website
}
window.document.onkeydown = disableRefresh;
function disableRefresh(evt){
  if(evt.keyCode === 13){
    window.location.href = props.website
  }
}
</script>

<template>
<div class="px-[5%] py-[10vh] w-[100vw]">
  <div id="banner">
    <h1 id="title" class="font-extrabold text-[5vmax]" >{{props.title}}</h1>
    <div class="relative mt-[5%]">
      <button @click="jump" class="transition-all hover:scale-110 absolute right-[4vw] bottom-[8%] z-10 bg-gray-100 px-[2vw] py-[1%] text-[2vmax] font-extrabold rounded-[1vmax]">Enter</button>
      <el-image src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl w-full aspect-video" fit="cover"></el-image>
    </div>
  </div>
  <div id="func" class="mt-[5%]">
    <h1 id="title" style="background: linear-gradient(90deg, rgb(99, 120, 255) 0%,rgb(255,124,124) 33%,  rgb(169, 112, 255) 66%, rgb(99, 120, 255) 100%);background-size: 500% 100%;background-clip:text" class="font-extrabold text-[5vmax]">功能</h1>
    <div class="mt-[5%] grid gap-3" style="grid-auto-rows: 32px ;grid-template-columns: repeat(auto-fit, minmax(2vw, 1fr))">
      <template v-if="func.length===1" v-for="(item,index) in func" :key="index">
        <el-image  src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl row-span-12" fit="cover"></el-image>
      </template>
      <template v-else-if="func.length===2" v-for="(item,index) in func">
        <div class=" row-span-12 col-span-12 relative">
          <el-image  src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl h-full w-full" fit="cover"></el-image>
          <h2 class="absolute bottom-10 left-10 h10 text-6xl w-1/2 font-extrabold text-white">{{item.title}}</h2>
        </div>
      </template>
      <template v-else-if="func.length===3" v-for="(item,index) in func">
        <div class=" row-span-12 col-span-10 relative">
          <el-image  src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl h-full w-full" fit="cover"></el-image>
          <h2 class="absolute bottom-10 left-10 h10 text-6xl w-1/2 font-extrabold text-white">{{item.title}}</h2>
        </div>
      </template>
      <template v-else-if="func.length===4" v-for="(item,index) in func">
        <div class=" row-span-6 col-span-12 relative">
        <el-image  src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl h-full w-full " fit="cover"></el-image>
          <h2 class="absolute bottom-10 left-10 h10 text-6xl w-1/2 font-extrabold text-white">{{item.title}}</h2>
        </div>
      </template>
      <template v-else v-for="(item,index) in func">
        <div  v-if="index===0" class=" row-span-12  col-span-12 relative">
          <el-image src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl h-full w-full" fit="cover"></el-image>
          <h2 class="absolute bottom-10 left-10 h10 text-6xl w-1/2 font-extrabold text-white">{{item.title}}</h2>
        </div>
        <div   v-else class=" row-span-6  col-span-12 relative">
          <el-image src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="rounded-2xl h-full w-full " fit="cover"></el-image>
          <h2 class="absolute bottom-10 left-10 h10 text-6xl w-1/2 font-extrabold text-white">{{item.title}}</h2>
        </div>
      </template>
    </div>
  </div>
  <div v-if="arch" id="arch" class="mt-[5%]">
    <h1 id="title" class="font-extrabold text-[5vmax]">架构</h1>
    <el-image  fit="cover" src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" class="bg-amber-100 w-full aspect-[3/1] mt-[3%] rounded-2xl"></el-image>
  </div>
</div>
</template>

<style scoped>
#title {
  width: max-content;
  position: relative;
  background: linear-gradient(90deg, rgb(255, 206, 99) 0%, rgb(112, 220, 255) 33%, rgb(222, 124, 255) 66%,  rgb(255, 206, 99) 100%);
  background-size: 500% 100%;
  color: transparent;
  animation: gradient-text 30s linear infinite alternate;
  background-clip: text;
}
@keyframes gradient-text {
  0% {
    background-position: 0 ;
  }
  100% {
    background-position: 500% ;
  }
}

</style>