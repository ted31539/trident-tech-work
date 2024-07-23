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
  <div
    class="flex"
    data-aos="zoom-out"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
    data-aos-offset="0"
  >
    <div>
      <h3 class="inline text-[9.6vw] font-bold leading-[1] writing-vertical-lr mr-[13vw] relative">
        {{ title }}
        <!-- circle decoration -->
        <div
          class="w-[6.66vw] h-[6.66vw] absolute opacity-60 bg-secondary border-[2.5vw] border-[#AA6666] rounded-full right-0 bottom-0 translate-x-[60%] translate-y-[60%]"
        ></div>
      </h3>
    </div>
    <p class="text-[4.2vw] leading-[1.375]">{{ text }}</p>
  </div>
</template>
/* 內文 */ position: absolute; left: 26.09%; right: 0%; top: 0%; bottom: 0%; font-family: 'Noto
Sans'; font-style: normal; font-weight: 400; font-size: 16px; line-height: 22px; color: #000000;
