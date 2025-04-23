//圖面匯出
export function useCanvasExporter(canvas) {
  const exportToJson = () => {
    if (!canvas.value) return;
    const json = canvas.value.toJSON();
    const blob = new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json",
    });
    console.log("資料：" + json);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas-export.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log("canvas.value", canvas.value);
  };
  return { exportToJson };
}
