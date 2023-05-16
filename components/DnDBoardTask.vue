<script lang="ts" setup>
import type { Task, ID } from '~/types';

const props = defineProps<{
  task: Task
}>()
const emit = defineEmits<{
  (e: 'delete', payload: ID): void
}>()

const focused = ref(false)

onKeyStroke('Backspace', () => {
  if (focused.value) {
    emit('delete', props.task.id)
  }
})
</script>

<template>
  <div :title="(new Date(task.createdAt)).toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex justify-between items-center"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0">
    <span class="mr-1">
      {{ task.title }}
    </span>
    <DnDBoardDragHandle />
  </div>
</template>

<style>
.sortable-drag .task {
  transform: rotate(5deg);
}

.sortable-ghost .task {
  @apply relative;
}

.sortable-ghost .task::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}

.task:focus,
.task:focus-visible {
  @apply outline-gray-400 !important;
  outline: gray auto 1px;
}
</style>
