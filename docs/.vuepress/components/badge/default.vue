<template>
  <div class="center">
    <vs-badge :value="12" class="item">
      <vs-button color="warn">comment</vs-button>
    </vs-badge>
    <vs-badge :value="2" type="warn" class="item">
      <vs-button shape="square">square</vs-button>
    </vs-badge>
    <vs-badge :value="2" class="item" color="#ccc"> text </vs-badge>
    <vs-badge :value="7" class="item">
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="" />
      </vs-avatar>
    </vs-badge>
    <vs-badge :value="3" class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin: 10px;
}
</style>
