<script setup>
import CONFIG from '../config'
import Banner from './PcBanner.vue'
import Content from './PcContent.vue'
</script>

<template>
  <main class="flex flex-col grow basis-3/4">
    <Banner />
    <div
      class="grid grid-cols-3 2xl:gap-x-[10%] lg:gap-x-[7.5%] gap-x-[5%] flex-grow w-full bg-secondary 2xl:pt-[5.321rem] 2xl:pb-[5.25rem] lg:pt-[4.5rem] lg:pb-[4.5rem] pt-[4rem] pb-[2rem] px-[3.5vw] animate-[fade-in_1.5s_ease-in-out]"
    >
      <Content
        v-for="content in CONFIG.CONTENTS"
        :title="content.title"
        :text="content.text"
        :key="content.key"
      />
    </div>
  </main>
</template>
