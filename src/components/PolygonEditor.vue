<template>
  <div class="mt-3">
    <h5 class="fw-bold">多邊形點位列表</h5>
    <div class="scroll-container">
      <table class="table table-sm table-bordered text-center align-middle compact-rows">
        <thead class="table-light sticky-top">
          <tr>
            <th>#</th>
            <th>X</th>
            <th>Y</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(point, index) in shape.ref.points" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <input type="number" class="form-control form-control-sm input-short" v-model.number="point.x"
                @input="updatePolygon(shape.id)" />
            </td>
            <td>
              <input type="number" class="form-control form-control-sm input-short" v-model.number="point.y"
                @input="updatePolygon(shape.id)" />
            </td>
            <td>
              <button class="btn btn-sm btn-danger w-100" @click="removePoint(index)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button class="btn btn-sm btn-outline-secondary mt-2" @click="addPoint">
      新增點位
    </button>
  </div>
</template>

<script setup>
import { useShapeStore } from '../store/shapeStore'

const props = defineProps({ shape: Object })
const shapeStore = useShapeStore()

const updatePolygon = (id) => {
  shapeStore.updateShape(id, { points: props.shape.ref.points })
}
const removePoint = (index) => {
  props.shape.ref.points.splice(index, 1)
  shapeStore.updateShape(props.shape.id, {
    points: [...props.shape.ref.points]
  })
}

const addPoint = () => {
  props.shape.ref.points.push({ x: 0, y: 0 })
  shapeStore.updateShape(props.shape.id, {
    points: [...props.shape.ref.points]
  })
}
</script>

<style scoped>
.scroll-container {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}

.sticky-top th {
  position: sticky;
  top: 0;
  background: #f8f9fa;
  z-index: 1;
}

.input-short {
  max-width: 90px;
  margin: 0 auto;
}

.compact-rows td,
.compact-rows th {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  vertical-align: middle !important;
}
</style>