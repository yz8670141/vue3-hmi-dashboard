import * as fabric from "fabric";
import { useShapeStore } from "../stores/shapeStore.js";
import { defaultControls } from "../composables/fabricDefaults.js";
import { bindShapeEvents } from "../composables/useShapeEvents.js";
import { markRaw } from "vue";

let rectCounter = 1;
let circleCounter = 1;
let polygonCounter = 1;

export function useShapeManager(canvasRef) {
  const shapeStore = useShapeStore();
  const x = 0;
  const y = 0;
  const fill = "#ffcc00";

  const addRect = () => {
    const id = `rect_${rectCounter++}`;
    const rect = new fabric.Rect({
      left: x,
      top: y,
      width: 80,
      height: 50,
      fill,
      ...defaultControls,
    });
    bindShapeEvents(id, rect, shapeStore);
    canvasRef.value?.add(rect);

    shapeStore.addShape({
      id,
      type: "rect",
      x,
      y,
      fill,
      width: 80,
      height: 50,
      ref: markRaw(rect),
    });
    canvasRef.value?.setActiveObject(rect);
    canvasRef.value?.renderAll();
  };

  const addCircle = () => {
    const id = `circle_${circleCounter++}`;
    const circle = new fabric.Circle({
      left: x,
      top: y,
      radius: 50,
      fill,
      ...defaultControls,
    });
    bindShapeEvents(id, circle, shapeStore);
    canvasRef.value?.add(circle);

    shapeStore.addShape({
      id,
      type: "circle",
      x,
      y,
      fill,
      radius: 50,
      ref: markRaw(circle),
    });
    canvasRef.value?.setActiveObject(circle);
    canvasRef.value?.renderAll();
  };

  const addPolygon = () => {
    const id = `polygon_${polygonCounter++}`;
    const rawPoints = [
      { x: 15, y: 20 },
      { x: 80, y: 15 },
      { x: 150, y: 30 },
      { x: 125, y: 250 },
      { x: 95, y: 200 },
      { x: 75, y: 150 },
      { x: 75, y: 250 },
      { x: 45, y: 250 },
      { x: 30, y: 245 },
      { x: 0, y: 250 },
      { x: -10, y: 190 },
      { x: 5, y: 100 },
    ];

    const polygon = new fabric.Polygon(rawPoints, {
      left: 100,
      top: 100,
      fill: "#ffcc00",
      stroke: null,
      strokeWidth: 0,
      objectCaching: false,
      cornerColor: "blue",
      originX: "center",
      originY: "center",
      ...defaultControls,
    });

    polygon.scale(2);
    polygon.setCoords();

    canvasRef.value?.add(polygon);
    canvasRef.value?.setActiveObject(polygon);
    canvasRef.value?.renderAll();

    shapeStore.addShape({
      id,
      type: "polygon",
      x: polygon.left,
      y: polygon.top,
      fill: "#ffcc00",
      points: rawPoints,
      ref: markRaw(polygon),
    });
  };

  return { addRect, addCircle, addPolygon };
}
