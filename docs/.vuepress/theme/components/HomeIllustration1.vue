<template>
  <div class="content-i">
    <div class="con-ilus">
      <img class="not-darken" src="/vuesax-white-1.svg" alt="" />
      <img class="has-darken" src="/vuesax-dark-1.svg" alt="" />
    </div>

    <div class="con-text">
      <h2 v-html="feature.title" />

      <p v-html="feature.details" />

      <template v-if="feature.action">
        <button class="btn-action" @click="handleRouter(feature.action?.link)">
          {{ feature.action.text }}
        </button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { VsThemeHomeFeatureOption } from '../shared/frontmatter/home'

defineProps<{ feature: VsThemeHomeFeatureOption }>()

const router = useRouter()

const handleRouter = (link?: string) => {
  if (!link) return
  router.push(link)
}
</script>

<style scoped lang="scss">
@import '../styles/use';

.btn-action {
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  padding: 13px 25px;
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.25s ease, background-color 0.1s ease;
  box-shadow: 0px 0px 0px 0px -color('primary', 0.6);
  font-size: 0.8rem;
  background: -color('primary');
  border: 0px;
  margin-top: 10px;
  i {
    display: none;
  }
  &:hover {
    box-shadow: 0px 10px 20px -10px -color('primary', 0.6);
    transform: translate(0, -5px);
  }
}
.content-i {
  width: 100%;
  padding: 120px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: auto;
  .con-text {
    padding-left: 50px;
    width: 50%;
    h2 {
      border: 0px;
      font-size: 2rem;
      font-weight: normal;
    }
  }
  .con-ilus {
    width: 50%;
    height: 450px;
    padding-right: 50px;
    max-width: 600px;
    img {
      width: 100%;
      height: auto;
    }
  }
}

@keyframes svg1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
