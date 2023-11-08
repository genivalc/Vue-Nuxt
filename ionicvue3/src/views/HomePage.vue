<template>
  <ion-page>
    <ion-header :translucent="true" color="secondary">
      <ion-toolbar>
        <ion-title>SAIBA +</ion-title>
      </ion-toolbar>
      <ion-searchbar v-model="search"></ion-searchbar>
    </ion-header>
    <div v-if="isLoading" class="loading-indicator">Carregando...</div>
    <ion-content :fullscreen="true">
      <ion-card v-for="paises in filteredPaises" :key="paises.id">
        <ion-card-header>
          <ion-card-title>{{ paises.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ paises.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { ref, onMounted, computed } from 'vue';

interface Pais {
  id: string,
  name:string ,
  img:string ,
  description:string ,
}

let search = ref("");
let paises = ref<Array<Pais>>([]) ;
let isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch("https://654aab0e5b38a59f28ee225c.mockapi.io/paises");
    if (response.ok) {
      const data = await response.json();
      paises.value = data;
    } else {
      console.error("Erro ao buscar os dados da API");
    }
  } catch (error) {
    console.error("Erro na solicitação da API:", error);
  } finally {
    isLoading.value = false;
  }
});

const filteredPaises = computed(() => {
  return paises.value.filter((pais: Pais) => {
    return pais.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<style scoped>
.loading-indicator {
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
  color: #777;
}
</style>
