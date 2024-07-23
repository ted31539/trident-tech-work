<script setup>
import Logo from './Logo.vue'
import CONFIGS from '@/configs'
</script>

<template>
  <nav
    class="max-w-[345px] flex flex-col basis-1/4 items-center relative pt-[78.33px] z-10 bg-white"
  >
    <div class="fixed">
      <h1 class="2xl:text-3xl lg:text-2xl text-lg font-bold mb-[75.67px]">白頭翁不吃小米</h1>
      <div class="flex flex-col items-center gap-[1.358rem]">
        <router-link
          v-for="link in CONFIGS.ROUTERS"
          :key="link.name"
          :to="link.path"
          :class="`2xl:text-lg text-base leading-[1.16] hover:text-primary hover:drop-shadow link-animation underline-offset-8`"
          :activeClass="`text-primary underline decoration-2 underline-offset-[6px] font-bold link-animation-none`"
          >{{ link.title }}</router-link
        >
      </div>
    </div>
    <div class="absolute right-0 top-[47.31px] translate-x-2/4 z-10">
      <Logo />
    </div>
  </nav>
</template>
