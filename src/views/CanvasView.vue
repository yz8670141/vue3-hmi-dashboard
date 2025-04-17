<template>
    <div class="container mt-4">
      <h2>HMI 畫布編輯頁</h2>
      <canvas id="hmi-canvas"></canvas>
    </div>
  </template>

<script setup>
    console.log('CanvasView mounted')
    import {userCanvas} from '../composables/useCanvas.js'
    userCanvas()
</script>

<style lang="scss" scoped>

</style>