<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
    <UCard v-for="biblia in teste2.user.value" v-bind:key="biblia.name">
      <template #header>
        <div class="font-bold text-xl mb-2">{{ biblia.name }}</div>
        <p class="text-gray-500 text-base">
          {{ biblia.resume }}
        </p>
      </template>

      <img class="w-full" :src="biblia.img" :alt="biblia.author" />

      <template #footer>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ biblia.author }}</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ biblia.chapters }}</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ biblia.group }}</span
          >
        </div>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import mock from '../model/index.json'
const user = useBooksStore()
const { adicionar } = useBooksStore()

const teste2 = storeToRefs(user)

adicionar(mock)
</script>
