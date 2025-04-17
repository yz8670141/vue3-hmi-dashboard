<template>
  <div class="d-grid gap-2 d-md-block">
    <button class="btn btn-primary" type="button" @click="addRect">矩形</button>
    <button class="btn btn-primary" type="button" @click="addCircle">
      圓形
    </button>
  </div>
</template>

<script setup>
import { useShapeManager } from "../composables/useShapeManager.js";
import { inject } from "vue";
const canvas = inject("canvas");
const { addRect, addCircle } = useShapeManager(canvas);
console.log("canvas ref:", canvas);
</script>

<style lang="scss" scoped>
</style>