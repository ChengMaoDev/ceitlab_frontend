<script setup>
import router from "@/router/index.js";
setTimeout(()=>{
  router.push('/main')
},1000*28)
</script>

<template>
  <div  class="absolute h-full w-full">
    <div class="new__bg">
      <div class="bg"/>
      <div class="hello__div">
        <svg class="hello__svg" viewBox="0 0 1230.94 414.57">
          <path  d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31" transform="translate(311.08 476.02)" />
        </svg>
        <svg class="ceit__svg" viewBox="-50  -50 1140 550">
          <path  class="dot"  d="M642.138 32.9585C636.598 34.0385 611.638 12.9985 595.138 17.4985C578.638 21.9985 587.091 50.3685 595.138 63.3685C603.185 76.3685 620.074 87.1229 637.628 96.9985C655.181 106.874 660.638 94.4637 670.138 73.9685C679.638 53.4733 681.639 34.9961 664.638 17.4985C647.636 0.000906944 647.678 31.8785 642.138 32.9585Z" stroke="rgba(255, 0, 0, 1)" stroke-width="21"   >
          </path>
          <path class="line"  d="M809.755 134.804L845.291 134.804L898.06 134.281L940.107 134.014L972.862 134.014">
          </path>
          <path d="M219.179 199.32C208.148 181.036 166.003 134.429 104.109 157.55C70.7394 170.016 54.4921 189.66 44.2695 207.23C24.9949 240.358 22.873 274.229 25.3195 308.13C26.6942 327.179 30.7442 341.174 35.5395 354.29C40.3347 367.406 46.339 375.979 56.8395 388.39C71.2032 405.366 108.052 431.314 156.389 432.96C193.844 434.235 223.57 423.771 251.159 414.62C276.322 404.151 294.949 394.866 316.809 383.14C388.395 344.74 438.073 308.832 455.999 259.86C464.652 236.223 472.085 170.313 398.179 161.26C340.6 154.207 319.001 202.384 312.719 251.84C307.559 292.468 312.736 333.958 316.809 346.41C319.385 354.283 340.439 383.14 340.439 383.14C340.439 383.14 357.222 401.209 366.709 409.39C408.079 445.061 484.244 427.686 526.89 409.39C587.677 383.31 614.294 335.956 628.14 300.41C628.14 300.41 631.788 290.317 635.49 271.96C639.191 253.603 639.829 233.63 639.829 233.63C639.829 208.803 639.829 183.977 639.829 159.15C639.829 149.924 639.829 288.105 639.829 300.41C639.829 325.497 668.179 434.76 748.179 434.76C828.18 434.76 849.679 382.761 862.679 341.26C875.68 299.758 873.539 254.62 873.539 254.62L873.539 191.64L873.539 144.42L873.539 86.7399L873.539 43.3298C873.539 43.3298 873.539 38.1885 873.539 24.9198C873.539 11.6512 873.539 317.118 873.539 341.26C873.539 354.482 875.22 382.411 890.679 401.76C915.479 432.799 964.32 448.181 1012.71 393.64">
          </path>
        </svg>
      </div>
      <button class="absolute bottom-20 font-bold  button text-white" @click="router.push('/main')">跳 &nbsp; 过</button>
    </div>
  </div>
</template>

<style scoped>
.button {
  animation: fadeBlurInUp 2s forwards 5s;
  filter: blur(8px);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(.82,-2,.37,2);
}
.button:hover {
  transform: scale(1.2); /* 放大 20% */
}
@keyframes fadeBlurInUp {
  to {
    opacity: 1;
    filter: blur(0px);
  }
}
.bg{
  z-index: -1;
  position: absolute;
  scale: 1.5;
  background: linear-gradient(217deg, rgb(255, 83, 228), rgba(0, 0, 0, 0) 70%),
  linear-gradient(127deg, rgb(84, 137, 255), rgba(0, 0, 0, 0) 70%),
  linear-gradient(90deg, rgb(126, 255, 84), rgba(0, 0, 0, 0) 70%),
  linear-gradient(180deg, rgb(88, 82, 255), rgba(0, 0, 0, 0) 70%),
  linear-gradient(336deg, rgb(255, 163, 87), rgba(0, 0, 0, 0) 70%);
  height: calc(max(100vh,100vw)*1);
  width: calc(max(100vh,100vw)*1);
  animation: anim__move 30s infinite linear;
}
.new__bg {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.hello__div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  width: 40%;
  position: relative;
}
.hello__svg {
  position: absolute;
  fill: none;
  stroke: #ffffff;
  stroke-linecap: round;
  stroke-width: 35px;
  stroke-dasharray: 5800px;
  width: 100%;
  display: flex;
  stroke-dashoffset: 6000;
  animation: anim__hello ease-in-out 10s alternate 2;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}
.ceit__svg{
  fill: none;
  stroke: #343434;
  stroke-linecap: round;
  stroke-width: 40px;
  stroke-dasharray: 3200px;
  width: 100%;
  display: flex;
  stroke-dashoffset: 3250;
  animation: 10s anim__ceit ease-in-out 18s forwards;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}
.dot{
  stroke-dasharray: 350px;
  stroke: #ff3e43;
  stroke-dashoffset: 350;
  stroke-width: 30px;
  animation: 5s  anim__line__dot ease-in-out 24s forwards;
}

.line{
  stroke-dashoffset: 220;
  stroke-dasharray: 220px;
  animation: 4s  anim__line__dot ease-in-out 25s forwards;
}
@keyframes anim__line__dot {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes anim__move {
  100%{
    transform: rotate(360deg);
  }
}
@keyframes anim__hello {
  100% {
    stroke-dashoffset: 900;
  }
}
@keyframes anim__ceit {
  100% {
    stroke-dashoffset: 50;
  }
}
</style>