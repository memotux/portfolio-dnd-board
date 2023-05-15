<script lang="ts" setup>
import type { Task } from '~/types';

defineProps<{
  task: Task
}>()
</script>

<template>
  <div :title="task.createdAt.toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex justify-between items-center">
    <span class="mr-1">
      {{ task.title }}
    </span>
    <DnDBoardDragHandle />
  </div>
</template>
