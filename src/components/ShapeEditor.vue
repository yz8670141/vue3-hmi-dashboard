<template>
  <div>
    <!-- 左側圖形列表 -->
    <div class="list-group mb-3">
      <button
        v-for="shape in shapeStore.shapes"
        :key="shape.id"
        class="list-group-item list-group-item-action"
        :class="{ active: selectedId === shape.id }"
        @click="selectShape(shape.id)"
      >
        {{ shape.type }} - {{ shape.id }}
      </button>
    </div>

    <!-- 右側編輯元件 -->
    <transition name="fade" mode="out-in">
      <div :key="selectedShape?.id">
        <template v-if="selectedShape">
          <CommonShapeEditor :shape="selectedShape" @update="updateShared" />
          <RectEditor v-if="selectedShape.type === 'rect'" :shape="selectedShape" />
          <CircleEditor v-if="selectedShape.type === 'circle'" :shape="selectedShape" />
          <!-- <PolygonEditor v-if="selectedShape.type === 'polygon'" :shape="selectedShape" /> -->
        </template>
        <div v-else class="text-muted">請選擇一個圖形進行編輯</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useShapeStore } from '../stores/shapeStore'
import CommonShapeEditor from '../components/CommonShapeEditor.vue'
import RectEditor from '../components/RectEditor.vue'
import CircleEditor from '../components/CircleEditor.vue'
// import PolygonEditor from '../components/PolygonEditor.vue'

const shapeStore = useShapeStore()

// ✅ 雙向綁定 selectedId
const selectedId = computed({
  get: () => shapeStore.selectedId,
  set: (val) => shapeStore.setSelectedId(val)
})

// 對應的 shape 物件
const selectedShape = computed(() => {
  return shapeStore.shapes.find(s => s.id === selectedId.value)
})

// 點清單按鈕 → 切換 Canvas 選取物件
const selectShape = (id) => {
  selectedId.value = id
  const shape = shapeStore.shapes.find(s => s.id === id)

  if (shape?.ref && shape.ref.canvas) {
    shape.ref.canvas.setActiveObject(shape.ref)
    shape.ref.canvas.renderAll()
  }
}

// 通用屬性同步更新
const updateShared = (updates) => {
  if (selectedShape.value) {
    shapeStore.updateShape(selectedShape.value.id, updates)
  }
}

// 如果還沒選任何圖形，預設選第一個
watch(
  () => shapeStore.shapes,
  (newShapes) => {
    if (!selectedId.value && newShapes.length > 0) {
      selectedId.value = newShapes[0].id
    }
  },
  { immediate: true, deep: true }
)
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item.active {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
