<template>
  <b-navbar class="ui" toggleable="lg" type="dark" variant="primary">
    <b-container class="py-2" fluid="sm">
      <b-row align-h="between">
        <b-col>
          <b-navbar-brand href="#"
            ><h1>Phasmophobia Manager</h1></b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="no-gutter" href="#">
                <span class="ui__cash"
                  ><b>Cash:</b> ${{ user.cash }}</span
                ></b-nav-item
              >
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Journal</b-nav-item>

              <b-nav-item-dropdown text="Inventory" right>
                <b-dropdown-item href="#">Equipments</b-dropdown-item>
                <b-dropdown-item href="#">Areas</b-dropdown-item>
                <b-dropdown-item href="#">Ghost Activity</b-dropdown-item>
                <b-dropdown-item href="#">Evidence</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="Settings" right>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Staff</b-dropdown-item>
                <b-dropdown-item href="#">Management</b-dropdown-item>
                <b-dropdown-item href="#">Log out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
  <!-- <div>
    <div class="ui">
      <p class="ui__cash"><b>Cash:</b> ${{ user.cash }}</p>
    </div>
  </div> -->
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
.ui {
  margin: auto;
  &__cash {
    color: #fff;
  }
}
</style>
