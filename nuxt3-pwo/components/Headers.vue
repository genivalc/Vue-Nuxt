<!-- components/Header.vue -->
<template>
  <header class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <img src="/logo.png" alt="Logo" class="h-12" />
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <input type="text" placeholder="Pesquisar..." class="px-2 py-1 border rounded-md" />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Pesquisar</button>
      </div>
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-800 p-4">
      <!-- Coloque seus itens de menu móvel aqui -->
      <ul class="space-y-2">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Adicione estilos específicos para o cabeçalho aqui */
</style>
