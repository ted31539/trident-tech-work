<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="flex">
    <div>
      <h3
        class="inline 2xl:text-3xl lg:text-2xl text-lg font-bold leading-[1.16] writing-vertical-lr 2xl:mr-[2.365rem] lg:mr-8 mr-6 relative"
      >
        {{ title }}
        <!-- circle decoration -->
        <div
          class="2xl:w-[1.5625rem] 2xl:h-[1.5625rem] lg:w-[1.2rem] lg:h-[1.2rem] w-[1rem] h-[1rem] absolute opacity-60 bg-secondary 2xl:border-8 lg:border-6 border-5 border-[#AA6666] rounded-full right-0 bottom-0 translate-x-[60%] translate-y-[60%]"
        ></div>
      </h3>
    </div>
    <p class="max-w-[200px] 2xl:text-lg lg:text-base text-sm leading-[1.16]">{{ text }}</p>
  </div>
</template>
