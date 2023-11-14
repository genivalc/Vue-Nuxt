<template>
  <NuxtLayout :name="layout" class="mx-8">
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const layout = 'default'
</script>
