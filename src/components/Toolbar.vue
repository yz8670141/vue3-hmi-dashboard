<template>
  <div class="d-grid gap-2 d-md-block mb-2">
    <button class="btn btn-primary me-2" type="button" @click="addRect">矩形</button>
    <button class="btn btn-primary" type="button" @click="addCircle">
      圓形
    </button>
    <!-- <button class="btn btn-primary" type="button" @click="addPolygon">
      多邊型
    </button> -->
  </div>
</template>

<script setup>
import { useShapeManager } from "../composables/useShapeManager.js";
import { inject } from "vue";
const canvas = inject("canvas");
const { addRect, addCircle, addPolygon } = useShapeManager(canvas);
</script>

<style lang="scss" scoped>
</style>