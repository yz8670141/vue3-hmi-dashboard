// composables/useCanvasEvents.js
export function bindShapeEvents(shapeId, fabricObj, shapeStore) {
  fabricObj.on("modified", () => {
    const updates = {
      x: fabricObj.left,
      y: fabricObj.top,
    };

    if (fabricObj.type === "rect") {
      updates.width = fabricObj.width * fabricObj.scaleX;
      updates.height = fabricObj.height * fabricObj.scaleY;
      fabricObj.set({
        scaleX: 1,
        scaleY: 1,
        width: updates.width,
        height: updates.height,
      });
    } else if (fabricObj.type === "circle") {
      updates.radius = fabricObj.radius * fabricObj.scaleX;
      fabricObj.set({
        scaleX: 1,
        scaleY: 1,
        radius: updates.radius,
      });
    }

    fabricObj.setCoords();
    shapeStore.updateShape(shapeId, updates);
  });
}

export function useCanvasEvents(shapeStore) {
  const handleSelection = (e) => {
    const selected = e.selected?.[0] || e.target;
    if (!selected) return;
    const found = shapeStore.shapes.find((s) => s.ref === selected);
    if (found) {
      shapeStore.setSelectedId(found.id);
    }
  };

  const clearSelection = () => {
    shapeStore.setSelectedId(null);
  };

  return {
    handleSelection,
    clearSelection,
  };
}
