<template>
  <div class="mt-3">
    <div class="mb-2">
      <label class="form-label">半徑</label>
      <input type="number" class="form-control form-control-sm" v-model.number="shape.radius" @input="update" />
    </div>
   
  </div>
</template>

<script setup>
import { useShapeStore } from '../stores/shapeStore'
const props = defineProps({ shape: Object })
const shapeStore = useShapeStore()

const update = () => {
  shapeStore.updateShape(props.shape.id, {
    radius: props.shape.radius,
  })
}
</script>
