<template>
  <div class="center">
    <vs-badge :value="2" is-dot type="warn" class="item">
      <vs-button shape="square">square</vs-button>
    </vs-badge>
    <vs-badge :value="2" is-dot class="item"> text </vs-badge>
    <vs-badge :value="7" is-dot class="item">
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="" />
      </vs-avatar>
    </vs-badge>
    <vs-badge :value="3" is-dot class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin: 10px;
}
</style>
