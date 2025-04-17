import { ref, onMounted, onUnmounted } from "vue"
import * as fabric from "fabric" // ✅ 對的！

export function useCanvas() {
  const canvas = ref(null)

  const initCanvas = () => {
    const el = document.getElementById("hmi-canvas")
    if (!el) {
      console.warn("⚠️ 找不到 #hmi-canvas")
      return
    }
    canvas.value = new fabric.Canvas("hmi-canvas", {
      width: 800,
      height: 600,
      backgroundColor: "#dedede"
    })
    canvas.value.renderAll()

    console.log("[Canvas] 初始化完成")
  }

  const disposeCanvas = () => {
    canvas.value?.dispose()
    console.log("[Canvas] 已釋放")
  }

  onMounted(() => {
    initCanvas()
    window.addEventListener("resize", () => canvas.value?.renderAll())
  })

  onUnmounted(() => {
    disposeCanvas()
    window.removeEventListener("resize", () => canvas.value?.renderAll())
  })

  return { canvas }
}
