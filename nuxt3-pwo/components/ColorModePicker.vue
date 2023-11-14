<template>
  <header lass="flex">
    <div>
      <button @click="onClick">
        <img :src="iconPath" alt="Theme Icon" width="24" height="24" />
      </button>
    </div>
  </header>
</template>

<script setup>
import sun from '../assets/icons/sun.svg'

const onClick = () => (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')

const iconPath = computed(() => {
  switch (colorMode.value) {
    case 'light':
      return 'https://img.icons8.com/ios-glyphs/90/091a28/moon-symbol.png'
    case 'dark':
      return sun
    default:
      return 'https://img.icons8.com/ios-glyphs/90/091a28/moon-symbol.png'
  }
})
let colorMode = useColorMode()

console.warn(colorMode.preference)
</script>

<style lang="scss">
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
