<script setup>
defineProps({
  className: {
    type: String,
    required: false
  },
  isShow: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <div v-if="isShow" :class="className"></div>
</template>
