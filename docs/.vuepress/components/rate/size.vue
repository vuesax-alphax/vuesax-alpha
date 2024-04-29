<template>
  <div class="demo-rate center">
    <vs-rate v-model="value" size="large" />
    <vs-rate v-model="value" />
    <vs-rate v-model="value" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped lang="scss">
.demo-rate {
  display: flex;
  flex-direction: column;
}
</style>
