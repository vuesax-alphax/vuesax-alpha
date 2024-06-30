<template>
  <div class="center">
    <vs-badge :value="100" :max="19" type="primary" class="item">
      <vs-button>comment</vs-button>
    </vs-badge>
    <vs-badge :value="100" :max="99" class="item">
      <vs-button color="warn" shape="square">comment</vs-button>
    </vs-badge>
    <vs-badge :value="10" :max="9" class="item">
      <vs-avatar shape="square" color="#ccc" />
    </vs-badge>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin: 20px;
}
</style>
