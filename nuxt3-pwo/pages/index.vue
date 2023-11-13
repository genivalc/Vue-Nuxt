<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Welcome {{ username }}</h1>
    <p>Access your dashboard and account from here</p>
    <button
      type="button"
      class="bg-red-500 hover:bg-red-600 transition-all duration-200 text-red-50 rounded-lg py-2 px-5 mt-4"
    >
      Logout
    </button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'

const users = reactive({
  name: 'John Doe',
})

// a computed ref
const username = computed(() => {
  return users.name.toUpperCase()
})
</script>
<style></style>
