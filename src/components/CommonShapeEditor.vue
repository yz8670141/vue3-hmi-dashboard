<template>
  <div class="mb-3">
    <div class="mb-2">
      <label class="form-label">X 座標</label>
      <input
        type="number"
        class="form-control form-control-sm"
        v-model.number="shape.x"
        @input="emitUpdate"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">Y 座標</label>
      <input
        type="number"
        class="form-control form-control-sm"
        v-model.number="shape.y"
        @input="emitUpdate"
      />
    </div>
    <div class="mb-2">
      <label class="form-label">填色</label>
      <input
        type="color"
        class="form-control form-control-color"
        v-model="shape.fill"
        @input="emitUpdate"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ shape: Object })
const emit = defineEmits(['update'])
const emitUpdate = () =>{
  emit('update', {
    x: props.shape.x,
    y: props.shape.y,
    fill: props.shape.fill,
  })
}
</script>

<style scoped>
.form-label {
  font-weight: 500;
}
</style>