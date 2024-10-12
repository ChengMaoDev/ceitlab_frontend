<template>
  <div class="home">
    <section class="section" ref="section1">
      <h1>欢迎来到主页</h1>
      <p>请向下滚动查看内容。</p>
    </section>

    <section class="section horizontal-scroll" ref="section2">
      <div class="scroll-content" ref="scrollContent">
        <div class="item" v-for="n in 6" :key="n">模块 {{ n }}</div>
      </div>
    </section>

    <section class="section" ref="section3">
      <h2>第三部分内容</h2>
      <p>这是最后的部分内容，随着滚动查看！</p>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const section1 = ref(null);
    const section2 = ref(null);
    const section3 = ref(null);
    const scrollContent = ref(null);

    const animations = () => {
      gsap.fromTo(section1.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
      );

      gsap.to(scrollContent.value, {
        x: '-300%',
        scrollTrigger: {
          trigger: section2.value,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
        },
      });

      gsap.fromTo(section3.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section3.value,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
      );
    };

    onMounted(() => {
      animations();
    });

    return {
      section1,
      section2,
      section3,
      scrollContent,
    };
  }
}
</script>

<style scoped>
.home {
  height: 300vh; /* 确保有足够空间滚动 */
}

.section {
  height: 100vh; /* 每个部分占满整个视口 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: #3498db; /* 固定背景色 */
}

.horizontal-scroll {
  overflow: hidden; /* 隐藏超出部分 */
}

.scroll-content {
  display: flex; /* 横向排列 */
  height: 100%; /* 高度占满 */
  position: absolute; /* 绝对定位 */
  top: 0;
}

.item {
  min-width: 100vw; /* 每个模块占满一整个视口 */
  height: 100vh; /* 高度保持 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e74c3c;
}
</style>