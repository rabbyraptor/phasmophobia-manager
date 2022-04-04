<template>
  <b-navbar class="ui" toggleable="lg" type="dark" variant="primary">
    <b-container class="py-2" fluid="sm">
      <b-row align-h="between">
        <b-col>
          <b-navbar-brand v-b-modal.modal-main-menu href="#"
            ><h1>Phasmophobia Manager</h1></b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="no-gutter" href="#">
                <span class="ui__cash" v-b-modal.modal-cash>
                  <b><b-icon-cash-stack></b-icon-cash-stack></b> {{ user.cash }}
                </span>
                <span class="ui__points pl-3" v-b-modal.modal-points>
                  <b><b-icon-trophy-fill></b-icon-trophy-fill></b>
                  {{ user.points }}
                </span>
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-3">
              <b-nav-item v-b-modal.modal-journal href="#">Journal</b-nav-item>

              <b-nav-item-dropdown text="Inventory" right>
                <b-dropdown-item v-b-modal.modal-equipment href="#"
                  >Equipment</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-journal href="#"
                  >Journal</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-areas href="#"
                  >Areas</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-evidence href="#"
                  >Evidence</b-dropdown-item
                >
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="Settings" right>
                <b-dropdown-item v-b-modal.modal-profile href="#"
                  >Profile</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-staff href="#"
                  >Staff</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-management href="#"
                  >Management</b-dropdown-item
                >
                <b-dropdown-item href="#">Log out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
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
  &__points {
    color: rgb(160, 185, 45);
  }
}
</style>
