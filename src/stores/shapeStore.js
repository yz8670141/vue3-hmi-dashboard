import { defineStore } from "pinia";

export const useShapeStore = defineStore("shapeStore", {
  state: () => ({
    shapes: [],
    selectedId: null,
  }),
  actions: {
    addShape(shape) {
      this.shapes.push(shape);
    },
    updateShape(id, updates) {
      const shape = this.shapes.find((item) => item.id === id);
      if (!shape || !shape.ref) return;

      Object.assign(shape, updates);
      const ref = shape.ref;

      if (updates.x !== undefined) ref.set("left", updates.x);
      if (updates.y !== undefined) ref.set("top", updates.y);
      if (updates.fill !== undefined) ref.set("fill", updates.fill);
      if (updates.width !== undefined) ref.set("width", updates.width);
      if (updates.height !== undefined) ref.set("height", updates.height);
      if (updates.radius !== undefined) ref.set("radius", updates.radius);

      if (updates.points !== undefined) {
        ref.set({ points: updates.points });
        ref.dirty = true;
        ref._calcDimensions();

        shape.points = updates.points;
      }
      ref.setCoords();
      ref.canvas?.renderAll();
    },
    setSelectedId(id) {
      this.selectedId = id;
    },
  },
});
