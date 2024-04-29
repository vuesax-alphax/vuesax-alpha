<template>
  <div class="center con-rate">
    <vs-rate
      v-model="value"
      :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
      show-text
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style lang="scss" scoped>
.con-rate {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-rate {
    width: 120px;
    text-align: left;
  }
}
</style>
