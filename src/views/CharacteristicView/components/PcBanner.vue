<script setup>
import banner from '@/assets/banner.png'
import banner2x from '@/assets/banner2x.png'
import banner3x from '@/assets/banner3x.png'

import CONFIG from '../config'
</script>

<template>
  <div class="w-full relative">
    <img
      :srcset="`${banner2x} 2x', ${banner3x} 3x`"
      alt="banner"
      class="object-cover w-full"
      :src="banner"
    />
    <div
      class="w-2/3 lg:w-auto absolute bottom-0 right-0 pe-[3.1vw] mb-[2.3rem] animate-[fade-in_1s_ease-in-out]"
    >
      <h2 class="text-white 2xl:text-5xl lg:text-3xl text-2xl font-bold leading-[1.35] mb-1">
        {{ CONFIG.TOP_BANNER.title }}
      </h2>
      <p class="2xl:text-lg lg:text-base text-sm text-white leading-[1.38] font-normal">
        {{ CONFIG.TOP_BANNER.subtitle }}
      </p>
    </div>
  </div>
</template>
