<template>
  <div v-if="active == number" class="header-notification">
    <div class="con-text-n" @click="handleClick">
      <div class="icon-n">
        <i class="bx bxs-megaphone" />
      </div>
      <div class="text-n">
        <h3>New component <b>Scrollbar</b> 🎉</h3>
        <p>See the examples and the new documentation</p>
      </div>
    </div>
    <div class="con-btn-n">
      <button class="btn-info" @click="handleClick">👉 More information</button>
      <button class="btn-x" @click="handleRemove">
        <i class="bx bx-x" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref<number>(0)
/**
 * Incre to display notify when add more feature
 */
const number = ref<number>(13)

const handleClick = () => {
  router.push('/components/scrollbar')
  active.value = 0

  localStorage.notificationHidden = number.value
}
const handleRemove = () => {
  active.value = 0
  localStorage.notificationHidden = number.value
}

onMounted(() => {
  if (localStorage.notificationHidden == number.value) {
    active.value = 0
  } else {
    active.value = number.value
  }
})
</script>

<style lang="scss">
@import '../styles/use';
.header-notification {
  width: 100%;
  position: fixed;
  height: 40px;
  background: -color('theme-bg2');
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    .con-text-n {
      .icon-n {
        width: 60px;
      }
    }
  }
  .con-text-n {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% - 200px);
    .icon-n {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: -color('theme-color');
      background: rgba(0, 0, 0, 0.05);
      margin-right: 20px;
      transition: all 0.25s ease;
    }
    .text-n {
      h3 {
        margin: 0px;
        padding: 0px;
        font-size: 0.7rem;
        color: -color('theme-color');
        font-weight: normal;
        b {
          text-decoration: underline;
          font-weight: 600;
        }
      }
      p {
        margin: 0px;
        padding: 0px;
        font-size: 0.55rem;
        color: -color('theme-color');
      }
    }
  }
  .con-btn-n {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      padding: 5px 10px;
      height: 30px;
      border-radius: 20px;
      border: 0px;
      background: transparent;
      color: -color('theme-color');
      font-size: 0.65rem;
      background: rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease;
      margin-right: 10px;
      &.btn-x {
        margin-right: 20px;
        font-size: 1rem;
        padding: 0px;
        width: 30px;
        height: 30px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
  & ~ .navbar {
    &:not(.fixed) {
      top: 40px !important;
      & ~ .page {
        margin-top: 97px;
      }
      & ~ .sidebar {
        top: 97px;
      }
    }
  }
}

@media (max-width: 500px) {
  .header-notification {
    & ~ .navbar {
      &.fixed {
        & ~ .carbon-ads {
          margin-top: 6px;
        }
      }
    }
    & ~ .carbon-ads {
      margin-top: 42px;
    }
    .con-text-n {
      width: calc(100% - 30px);
    }
    .con-btn-n {
      .btn-info {
        display: none;
      }
      button {
        &.btn-x {
          margin-right: 10px;
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .header-notification {
    .con-text-n {
      .icon-n {
        margin-right: 6px;
        width: 30px;
      }
    }
  }
}
@media (max-width: 300px) {
  .header-notification {
    .con-text-n {
      padding-left: 8px;
      .icon-n {
        display: none;
      }
    }
  }
}
</style>
