<script setup>
defineProps({
  className: {
    type: String,
    required: false,
    default: 'w-[24px] h-[22px]'
  },
  isShow: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <div
    v-if="isShow"
    :class="`w-[24px] h-[22px] relative flex flex-col justify-between ${className}`"
  >
    <div class="top-menu-line w-full h-1 bg-black origin-left transition-all duration-200"></div>
    <div
      class="middle-menu-line w-[15.27px] h-1 bg-black origin-left transition-all duration-100"
    ></div>
    <div class="bottom-menu-line w-full h-1 bg-black origin-left transition-all duration-200"></div>
  </div>
</template>
