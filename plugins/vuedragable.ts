import draggable from "vuedraggable";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VDraggable', draggable)
})
