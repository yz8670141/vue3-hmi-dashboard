import { ref, onMounted, onUnmounted } from "vue";
import * as fabric from 'fabric'

export function userCanvas() {
  const canvas = ref(null);
  //初始化完成
  const initCanvas = () => {
    canvas.value = new fabric.Canvas("hmi-canvas", {
      width: 800,
      height: 600,
      backgroundColor: "#f3f3f3",
    });
    console.log('[Canvas] 初始化完成');
  };

//資源已釋放'
  const disposeCanvas = () => {
    if(canvas.value){
        canvas.value.dispose();
        console.log('[Canvas] 資源已釋放');
    }
  }

  onMounted(() =>{
    initCanvas();
    window.addEventListener('resize', () =>canvas.value?.renderAll())
  })

  onUnmounted(() =>{
    disposeCanvas();
    window.removeEventListener('resize', () =>canvas.value?.renderAll())
  })
  return {
    canvas,
  };
}
