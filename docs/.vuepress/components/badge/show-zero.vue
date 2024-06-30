<template>
  <div class="center">
    <vs-badge :value="0" class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>
    <vs-badge :value="0" :show-zero="show" class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>
    <vs-switch v-model="show" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<style lang="scss" scoped>
.item {
  margin: 20px;
}
</style>
