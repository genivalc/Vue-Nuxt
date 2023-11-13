<template>
  <NuxtLayout :name="layout">
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const layout = 'default'
</script>
