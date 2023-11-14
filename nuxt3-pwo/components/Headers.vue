<!-- components/Header.vue -->
<template>
  <header class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <img src="/logo.png" alt="Logo" class="h-8 w-auto" />
      </div>
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex space-x-4">
        <!-- Seus itens de menu aqui -->
        <a href="#" class="text-white">Homepage</a>
        <a href="#" class="text-white">Livros</a>
        <a href="#" class="text-white">Biblias</a>
        <a href="#" class="text-white">Biblia em Paralelo</a>
        <a href="#" class="text-white">Versiculos Tematicos</a>
      </div>
    </div>
    <!-- Menu mobile -->
    <div v-if="isMobileMenuOpen" class="lg:hidden">
      <!-- Seus itens de menu aqui -->
      <a href="#" class="text-white">Homepage</a>
      <a href="#" class="text-white">Livros</a>
      <a href="#" class="text-white">Biblias</a>
      <a href="#" class="text-white">Biblia em Paralelo</a>
      <a href="#" class="text-white">Versiculos Tematicos</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Seus estilos personalizados aqui */
</style>
