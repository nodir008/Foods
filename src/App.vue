<script setup>
import { ref, onMounted } from "vue"
import Navbar from "./components/navbar/Navbar.vue"
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
  return {
    loading,
  }
})
</script>

<template>
  <!-- <div class="loader__div" v-if="loading">
  <span class="loader"></span>
  </div> -->
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>
