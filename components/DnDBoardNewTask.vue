<script lang="ts" setup>
import { nanoid } from "nanoid"
import type { Task } from "~/types";

const emit = defineEmits<{
  (e: 'add', payload: Task): void
}>()

const focused = ref(false)
const title = ref('')

function createTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault()
    emit('add', {
      title: title.value.trim(),
      createdAt: new Date(),
      id: nanoid()
    })
  }
  title.value = ''
}
</script>

<template>
  <div>
    <textarea
      v-model="title"
      @keydown.tab="createTask"
      @keydown.enter="createTask"
      class="focus:bg-white focus:shadow resize-none rounded w-full border-none bg-transparent p-2 cursor-pointer"
      :class="{
        'h-7': !focused,
        'h-20': focused
      }"
      style="outline: none !important"
      @focus="focused = true"
      @blur="focused = false"
      :placeholder="!focused ? '+ Add a Task' : 'Enter a title for this task'" />
  </div>
</template>

<style scoped></style>
