<template>
  <ion-page>
    <ion-header :translucent="true" color="secondary">
      <ion-toolbar>
        <ion-title>SAIBA +</ion-title>
      </ion-toolbar>
      <IonSearchbar v-model="search"></IonSearchbar>
    </ion-header>

    <ion-content :fullscreen="true">
      
   
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';

const search = ref("");


</script>

<style scoped>

</style>
