<template>
  <div class="h-[100vh] bg-teal-600 overflow-hidden">
    <header class="flex items-center mb-10 bg-teal-700 rounded p-2 w-full">
      <img width="200" height="200" class="mr-3 w-[50px] h-full" src="/vueschool-logo.svg"
        alt="Vue School" />
      <h1 class="text-4xl text-white ">DnD Board</h1>
    </header>
    <main class="p-10 overflow-x-scroll">
      <DnDBoard />
    </main>
  </div>
</template>
