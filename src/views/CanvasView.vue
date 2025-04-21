<template>
  <div class="container-fluid mt-4">
    <div class="row g-3">
      <!-- 左側畫布區 -->
      <div class="col-lg-7">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-3">🖼️ HMI 畫布編輯區</h5>
            <Toolbar />
            <div class="canvas-wrapper border rounded p-2 bg-light">
              <canvas id="hmi-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側設定區 -->
      <div class="col-lg-5">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title mb-3">⚙️ 圖形編輯器</h5>
            <ShapeEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Toolbar from "../components/Toolbar.vue";
import ShapeEditor from "../components/ShapeEditor.vue";
import { useCanvas } from "../composables/useCanvas.js";
import { provide, markRaw } from "vue";

const { canvas } = useCanvas();
provide('canvas', markRaw(canvas))
</script>

<style scoped>
.canvas-wrapper {
  min-height: 400px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  border: 1px dashed #bbb;
  background: white;
}
</style>