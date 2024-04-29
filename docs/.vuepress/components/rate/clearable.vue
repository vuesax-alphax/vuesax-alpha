<template>
  <div class="center">
    <vs-rate v-model="value" clearable />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(3)
</script>
