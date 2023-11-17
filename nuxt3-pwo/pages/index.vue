<template>
  <div v-if="loading">Carregando...</div>
  <span v-else class="text-2xl"> Versículos do Dia </span>

  <!-- {{ randomVerse }} -->
  <!-- <ul v-else>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul> -->
  <!-- <div v-if="error">{{ error }}</div>  -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getRandomVerse } from '~/api/randomVerse '

const randomVerse = ref()
let loading = ref(false)

onMounted(async () => {
  try {
    randomVerse.value = await getRandomVerse('afc')
    console.warn(randomVerse.value)
  } catch (error) {
    loading.value = true
  }
})
</script>

<style></style>
