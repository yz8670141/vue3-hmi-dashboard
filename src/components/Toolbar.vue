<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <button type="button" class="btn btn-outline-primary me-2" @click="addRect">
            <i class="fa-regular fa-square me-1"></i>矩形
          </button>
          <button type="button" class="btn btn-outline-primary me-2" @click="addCircle">
            <i class="fa-regular fa-circle me-1"></i>圓形
          </button>
          <button type="button" class="btn btn-outline-primary me-2">
            <i class="fa-solid fa-xmark me-1"></i>尚未建置
          </button>
          <button type="button" class="btn btn-outline-primary me-2">
            <i class="fa-solid fa-xmark me-1"></i>尚未建置
          </button>
          <button type="button" class="btn btn-outline-primary me-2">
            <i class="fa-solid fa-xmark me-1"></i>尚未建置
          </button>
          <button type="button" class="btn btn-outline-primary me-2">
            <i class="fa-solid fa-xmark me-1"></i>尚未建置
          </button>
          <button type="button" class="btn btn-outline-primary" @click="exportToJson">
            <i class="fa-solid fa-file-export me-1"></i>匯出圖面
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useShapeManager } from "../composables/useShapeManager.js";
import { useCanvasExporter } from "../composables/useCanvasExporter.js";
import { inject } from "vue";
const canvas = inject("canvas");
const {exportToJson} = useCanvasExporter(canvas)
const { addRect, addCircle, addPolygon } = useShapeManager(canvas);
console
</script>

<style scoped>

</style>
