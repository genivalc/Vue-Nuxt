<!-- components/Header.vue -->
<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6">
    <div class="flex items-center flex-shrink-0 text-blue-50 mr-6">
      <NuxtLink to="/">
        <span class="font-semibold text-xl tracking-tight">Bíblia Online</span>
      </NuxtLink>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-blue-50 border-teal-400 hover:text-blue-500 hover:border-blue-950"
        @click="toggleMenu"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path
            :class="{ hidden: isOpen, 'inline-block': !isOpen }"
            class="fill-current"
            d="M0 0h20v20H0z"
          />
          <path
            :class="{ hidden: !isOpen, 'inline-block': isOpen }"
            class="fill-current"
            d="M0 0h20v20H0z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="{ hidden: !isOpen, block: isOpen }"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <NuxtLink
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-blue-950 mr-4"
        >
          Homepage
        </NuxtLink>
        <NuxtLink
          to="/books"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-blue-950 mr-4"
        >
          Livros
        </NuxtLink>
        <NuxtLink
          to="/books"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-blue-950 mr-4"
        >
          Biblias
        </NuxtLink>
        <NuxtLink
          to="/books"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-blue-950 mr-4"
        >
          Biblias em Paralelo
        </NuxtLink>
        <NuxtLink
          to="/books"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-blue-950 mr-4"
        >
          Versiculos Tematicos
        </NuxtLink>
      </div>
      <div>
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const colorMode = useColorMode()
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<style scoped></style>
