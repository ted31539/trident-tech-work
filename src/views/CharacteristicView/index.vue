<script setup>
import useWIndowResize from '@/hooks/useWindowResize'
import { PcSideBar, MbSideBar } from '@/components/SideBar'
import MbView from './components/MbView.vue'
import PcView from './components/PcView.vue'

const { isMobile } = useWIndowResize()
</script>

<template>
  <div class="flex min-h-screen w-full overflow-x-hidden flex-col md:flex-row">
    <MbSideBar v-if="isMobile" />
    <PcSideBar v-else />
    <MbView v-if="isMobile" />
    <PcView v-else />
  </div>
</template>
