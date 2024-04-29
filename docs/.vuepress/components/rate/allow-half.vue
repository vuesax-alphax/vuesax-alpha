<template>
  <div class="center">
    <vs-rate v-model="value" allow-half />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>
