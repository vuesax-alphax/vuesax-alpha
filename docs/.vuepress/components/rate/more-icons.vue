<template>
  <div class="center">
    <vs-rate
      v-model="value"
      :icons="icons"
      :void-icon="Heart"
      :colors="['#409eff', '#67c23a', '#FF9900']"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Heart } from '@vuesax-alpha/icons-vue'

const value = ref(3)
const icons = [Heart, Heart, Heart]
</script>
