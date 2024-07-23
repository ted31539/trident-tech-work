<script setup>
import { ref } from 'vue'
import CONFIGS from '@/configs'

// import IconClose from '@/components/icons/IconClose.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import Logo from './Logo.vue'
import Space from '../Space.vue'

const isMenuOpen = ref(false)
const isOpenClass = ref('close')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isOpenClass.value = isMenuOpen.value ? 'open' : 'close'
}
</script>

<template>
  <Space
    :className="`w-full  transition-all duration-200  ${isMenuOpen ? 'h-[286.43px]' : 'h-[87.74px]'}`"
  />

  <nav
    :class="`fixed max-w-screen w-full flex flex-col basis-full items-center pt-[19.61px] z-10 bg-white  origin-bottom transition-all duration-200 overflow-y-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${isOpenClass}`"
  >
    <div class="w-full mb-[2.16rem]">
      <div class="flex justify-between items-center ps-[7vw] pe-[5vw]">
        <div class="menu-wrapper flex items-center">
          <button @click="toggleMenu">
            <IconMenu :className="`menu-icon ${isOpenClass}`" />
          </button>
        </div>
        <h1 class="text-xl leading-[1.35] font-bold">白頭翁不吃小米</h1>
        <Space :className="'w-[48.78px] h-[48.78px]'" />
        <Logo
          :className="'absolute translate-x-1/4 right-[5vw] shadow-[0px 0px 6px rgba(0, 0, 0, 0.25]'"
        />
      </div>
    </div>
    <div
      :class="`flex flex-col items-center gap-[1.358rem] link-wrapper transition-transform origin-top duration-200	${isOpenClass}`"
    >
      <router-link
        v-for="link in CONFIGS.ROUTERS"
        :key="link.name"
        :to="link.path"
        :class="`text-lg leading-[1.16] hover:text-primary hover:drop-shadow link-animation underline-offset-8`"
        :activeClass="`text-primary underline decoration-2 underline-offset-[6px] font-bold link-animation-none`"
        >{{ link.title }}</router-link
      >
    </div>
  </nav>
</template>
