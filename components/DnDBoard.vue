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
    <div v-for="col in columns" :key="col.id">
      <header>
        {{ col.title }}
      </header>
      <p v-for="task in col.tasks" :key="task.id">{{ task.title }}</p>
    </div>
  </div>
</template>

<style scoped></style>