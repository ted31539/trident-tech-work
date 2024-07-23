<script setup>
import mbBanner from '@/assets/mbBanner.png'

import CONFIG from '../config'
</script>

<template>
  <div class="w-full relative">
    <img alt="banner" class="object-cover w-full aspect-[375/311.4]" :src="mbBanner" />
    <div
      class="w-full flex flex-col justify-end absolute bottom-0 right-0 ps-[6.04vw] pe-[7.18vw] mb-[1.5rem] animate-[fade-in_1.5s_ease-in-out]"
    >
      <h2 class="text-white text-[12.8vw] font-bold text-end leading-[1.04] break-words mb-1">
        {{ CONFIG.TOP_BANNER.mbTitle }}
      </h2>
      <p class="text-[4.8vw] text-white leading-[1.38] font-extralight">
        {{ CONFIG.TOP_BANNER.subtitle }}
      </p>
    </div>
  </div>
</template>
/* Subtitle */ position: absolute; width: 329.67px; height: 50px; left: 22.67px; top: 325.07px;
font-family: 'Noto Sans'; font-style: normal; font-weight: 400; font-size: 18px; line-height: 25px;
text-align: right; color: #FFFFFF;
