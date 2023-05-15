<script lang="ts" setup>
import { nanoid } from "nanoid";
import type { Column } from '~/types';

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: 'Backlog',
    tasks: [
      {
        id: nanoid(),
        title: 'Create marketing landing page',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Develop cool new feature',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Fix page nav bug',
        createdAt: new Date()
      },
    ]
  },
  { title: 'Selected for Dev', id: nanoid(), tasks: [] },
  { title: 'In Progress', id: nanoid(), tasks: [] },
  { title: 'QA', id: nanoid(), tasks: [] },
  { title: 'Complete', id: nanoid(), tasks: [] },
])
</script>

<template>
  <div>
    <VDraggable
      v-model="columns"
      group="columns"
      item-key="id"
      class="flex gap-4 items-start">
      <template #item="{ element: col }: { element: Column }">
        <div
          class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            {{ col.title }}
          </header>
          <DnDBoardTask v-for=" task  in  col.tasks " :key=" task.id " :task=" task " />
          <footer>
            <button class="text-gray-500 w-full">+ Add a Task</button>
          </footer>
        </div>
      </template>
    </VDraggable>

  </div>
</template>

<style scoped></style>
