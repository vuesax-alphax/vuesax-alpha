<template>
  <div class="center">
    <vs-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value} points"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(3)
</script>

<style lang="scss" scoped></style>
