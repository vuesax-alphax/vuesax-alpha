<template>
  <div class="center">
    <vs-badge :value="3" :hidden="hidden" processing class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>

    <vs-switch v-model="hidden" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hidden = ref(false)
</script>

<style lang="scss" scoped>
.item {
  margin: 20px;
}
</style>
