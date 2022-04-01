<template>
  <div class="ui-wrapper">
    <div class="ui">
      <p class="ui__cash"><b>Cash:</b> ${{ user.cash }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.user,
    };
  },
};
</script>

<style lang="scss">
.ui-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #222;
  background-color: #fff;
}

.ui {
  width: $desktop-screen-width;
  margin: auto;
  padding: 2rem;
  height: 6rem;
  &__cash {
  }
}
</style>
