<template>
  <div class="mt-3">
    <div class="mb-2">
      <label class="form-label">寬度</label>
      <input type="number" class="form-control form-control-sm" v-model.number="shape.width" @input="update" />
    </div>
    <div class="mb-2">
      <label class="form-label">高度</label>
      <input type="number" class="form-control form-control-sm" v-model.number="shape.height" @input="update" />
    </div>
    
  </div>
</template>

<script setup>
import { useShapeStore } from '../stores/shapeStore'
const props = defineProps({ shape: Object })
const shapeStore = useShapeStore()

const update = () => {
  shapeStore.updateShape(props.shape.id, {
    width: props.shape.width,
    height: props.shape.height,
  })
}
</script>
