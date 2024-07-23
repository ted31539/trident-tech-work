<script setup>
defineProps({
  className: {
    type: String,
    required: false,
    default: 'w-[24px] h-[21px]'
  },
  isShow: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <svg
    v-if="isShow"
    width="25"
    height="23"
    viewBox="0 0 25 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <line
      y1="-2"
      x2="28.6924"
      y2="-2"
      transform="matrix(0.730323 0.683102 -0.702025 0.712152 0.379639 2.8696)"
      stroke="black"
      stroke-width="4"
    />
    <line
      y1="-2"
      x2="28.0896"
      y2="-2"
      transform="matrix(0.716329 -0.697763 0.716329 0.697763 3.2583 22.4695)"
      stroke="black"
      stroke-width="4"
    />
  </svg>
</template>
