<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* Estilos globais de transição de página.
  O 'mode="out-in"' garante que a página atual suma 
  completamente ANTES da nova página começar a aparecer.
*/

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>