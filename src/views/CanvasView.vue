<template>
  <div class="container mt-4">
    <h2>HMI 畫布編輯頁</h2>
    <canvas id="hmi-canvas"></canvas>
    <Toolbar />
  </div>
</template>

<script setup>
import Toolbar from "../components/Toolbar.vue";
import { useCanvas } from "../composables/useCanvas.js";
import { provide } from "vue";

const { canvas } = useCanvas();
provide('canvas', canvas)
</script>

<style lang="scss" scoped>
</style>