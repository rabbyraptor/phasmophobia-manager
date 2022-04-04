<template>
  <div id="app">
    <main>
      <Modals />
      <UserInterface />
      <b-container class="mt-5" fluid="sm">
        <b-row align-h="around">
          <b-col>
            <ActiveContracts />
            <GhostHunters />
            <GhostContracts />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>
<script>
import GhostHunters from "./components/GhostHunters.vue";
import GhostContracts from "./components/GhostContracts.vue";
import UserInterface from "./components/UserInterface.vue";
import ActiveContracts from "./components/ActiveContracts.vue";
import Modals from "./components/data/Modals.vue";

export default {
  name: "App",
  components: {
    GhostHunters,
    GhostContracts,
    UserInterface,
    ActiveContracts,
    Modals,
  },
  computed: {
    activeContracts() {
      return this.$store.getters.activeContracts;
    },
  },
  methods: {
    update() {
      setInterval(() => {
        this.activeContracts.forEach((contract) => {
          if (contract.timeLeft > 1) {
            this.$store.commit("subtractOneSecondFromContracts", contract.id);
          } else this.$store.dispatch("endContract", contract.id);
        });
      }, 1000);
    },
  },
  mounted() {
    this.update();
  },
};
</script>

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "assets/style/Variables.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>
