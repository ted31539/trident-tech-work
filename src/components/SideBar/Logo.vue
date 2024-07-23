<script setup>
defineProps({
  className: {
    type: String,
    required: false,
    default: ''
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
    :class="`w-[97.56px] h-[97.56px] 2xl:scale-[1] lg:scale-[.8] md:scale-[.6] scale-[.5] flex justify-center items-center rounded-full bg-white shadow-logo ${className}`"
  >
    <div class="bird">
      <div class="bird-body"></div>
      <div class="bird-eye"></div>
      <div class="bird-beak"></div>
    </div>
  </div>
</template>
s
