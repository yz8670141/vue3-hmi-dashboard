<template>
  <div class="container-fluid vh-100 overflow-hidden  p-3">
    <div class="row h-100">
      <!-- 左側畫布區 -->
      <div class="col-7 d-flex flex-column h-100">
        <!-- Toolbar 區塊 -->
        <div class="card shadow-sm mb-2">
          <div class="card-body p-2">
            <Toolbar/>
          </div>
        </div>

        <!-- Canvas 區塊 -->
        <div class="card shadow-sm flex-grow-1 overflow-hidden ">
          <div class="card-body p-2 overflow-hidden">
            <div class="canvas-wrapper h-100" ref="canvasWrapperRef">
              <canvas id="hmi-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側設定區 -->
      <div class="col-5 d-flex flex-column h-100">
        <div class="card shadow-sm flex-grow-1 overflow-hidden ">
          <div class="card-body overflow-auto">
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
import { provide, markRaw, ref } from "vue";
const canvasWrapperRef = ref(null);
const { canvas } = useCanvas(canvasWrapperRef);
provide("canvas", markRaw(canvas));
// provide("exportToJson", exportToJson);

</script>

<style scoped>
.canvas-wrapper {
  width: 100%;
  height: 100vh;
}
canvas {
  border: 1px dashed #bbb;
  background: white;
  max-width: 100%;
  display: block;
}
</style>