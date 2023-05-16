<script lang="ts" setup>
import { nanoid } from "nanoid";
import type { Column, Task, ID } from '~/types';

useSeoMeta({
  title: 'DnD Board'
})

const columns = useLocalStorage<Column[]>('dndBoard', [
  {
    id: nanoid(),
    title: 'Backlog',
    tasks: [
      {
        id: nanoid(),
        title: 'Create marketing landing page',
        createdAt: new Date().toISOString()
      },
      {
        id: nanoid(),
        title: 'Develop cool new feature',
        createdAt: new Date().toISOString()
      },
      {
        id: nanoid(),
        title: 'Fix page nav bug',
        createdAt: new Date().toISOString()
      },
    ]
  },
  { title: 'Selected for Dev', id: nanoid(), tasks: [] },
  { title: 'In Progress', id: nanoid(), tasks: [] },
  { title: 'QA', id: nanoid(), tasks: [] },
  { title: 'Complete', id: nanoid(), tasks: [] },
])

function createColumn() {
  const column: Column = {
    id: nanoid(),
    title: '',
    tasks: []
  }

  columns.value.push(column)

  nextTick(() => {
    const createdColumn = document.querySelector('.column:last-of-type .title-input') as HTMLInputElement
    if (createdColumn) {
      createdColumn.focus()
    }
  })
}

function deleteColumn(col: Column) {
  col.title === ''
    ? (columns.value = columns.value.filter((c) => c.id !== col.id))
    : null
}

const alt = useKeyModifier('Alt')
</script>

<template>
  <div class="flex items-start overflow-x-scroll gap-4">
    <VDraggable
      v-model="columns"
      :animation="150"
      handle=".drag-handle"
      group="columns"
      item-key="id"
      class="flex gap-4 items-start">
      <template #item="{ element: col }: { element: Column }">
        <div
          class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            <DnDBoardDragHandle />
            <input
              class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="deleteColumn(col)"
              type="text"
              v-model=" col.title " />
          </header>
          <VDraggable
            v-model=" col.tasks "
            :animation=" 150 "
            handle=".drag-handle"
            :group=" { name: 'tasks', pull: alt ? 'clone' : true } "
            item-key="id">
            <template #item=" { element: task }: { element: Task } ">
              <div>
                <DnDBoardTask :task=" task "
                  @delete="col.tasks = col.tasks.filter(t => t.id !== $event)" />
              </div>
            </template>
          </VDraggable>

          <footer>
            <DnDBoardNewTask
              @add="col.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </VDraggable>
    <button
      @click=" createColumn "
      class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50">+ Add Column</button>
  </div>
</template>
