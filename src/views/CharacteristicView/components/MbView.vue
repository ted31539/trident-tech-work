<script setup>
import CONFIG from '../config'
import Banner from './MbBanner.vue'
import Content from './MbContent.vue'
</script>

<template>
  <main class="flex flex-col grow">
    <Banner />
    <div
      class="flex flex-col gap-y-[3.15625rem] flex-grow w-full bg-secondary pt-[3.17875rem] pb-[2rem] px-[9.7vw]"
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
