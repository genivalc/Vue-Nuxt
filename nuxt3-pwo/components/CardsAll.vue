<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 flex items-center"
  >
    <div v-for="biblia in biblias" v-bind:key="biblia.chapters + 1">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-8">
        <img class="w-full" :src="biblia.img" :alt="biblia.author" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ biblia.name }}</div>
          <p class="text-gray-700 text-base">
            {{ biblia.resume }}
          </p>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mock from '../model/index.json'

const biblias = mock
</script>
