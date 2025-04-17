import * as fabric from "fabric";

export function useShapeManager(canvasRef) {
   
  const addRect = () => {
    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      width: 80,
      height: 50,
      fill: 'red'
    });
    canvasRef.value?.add(rect);
    console.log('rect')
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 0,
      top: 0,
      radius: 50,
      fill: "lightgreen",
    });
    canvasRef.value?.add(circle);
  };

  return {addRect, addCircle}
}
