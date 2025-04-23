import { ref, onMounted, onUnmounted, markRaw } from "vue";
import * as fabric from "fabric"; // ✅ 對的！
import { useShapeStore } from "../stores/shapeStore.js";
import { useCanvasEvents } from "../composables/useShapeEvents.js";

export function useCanvas(canvasWrapperRef) {
  const canvas = ref(null);
  const shapeStore = useShapeStore();
  const { handleSelection, clearSelection } = useCanvasEvents(shapeStore);

  const initCanvas = () => {
    const el = document.getElementById("hmi-canvas");
    if (!el && wrapperEl) {
      console.warn("⚠️ 找不到 #hmi-canvas");
      return;
    }
    const canvasWidth = canvasWrapperRef.value.clientWidth;
    const canvasHeight = canvasWrapperRef.value.clientHeight;

    canvas.value = markRaw(
      new fabric.Canvas("hmi-canvas", {
        backgroundColor: "#dedede",
        selection: true,
      })
    );
    canvas.value.setWidth(canvasWidth);
    canvas.value.setHeight(canvasHeight);
    canvas.value.renderAll();

    canvas.value.on("selection:created", handleSelection);
    canvas.value.on("selection:updated", handleSelection);
    canvas.value.on("selection:cleared", clearSelection);
  };

  const disposeCanvas = () => {
    canvas.value?.dispose();
    console.log("[Canvas] 已釋放");
  };

  onMounted(() => {
    initCanvas();
    window.addEventListener("resize", () => canvas.value?.renderAll());
  });

  onUnmounted(() => {
    disposeCanvas();
    window.removeEventListener("resize", () => canvas.value?.renderAll());
  });

  return { canvas };
}
