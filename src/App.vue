<template>
  <div id="app">
    <main>
      <UserInterface />
      <ActiveContracts />
      <GhostHunters />
      <GhostContracts />
    </main>
  </div>
</template>

<script>
import GhostHunters from "./components/GhostHunters.vue";
import GhostContracts from "./components/GhostContracts.vue";
import UserInterface from "./components/UserInterface.vue";
import ActiveContracts from "./components/ActiveContracts.vue";

export default {
  name: "App",
  components: {
    GhostHunters,
    GhostContracts,
    UserInterface,
    ActiveContracts,
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

<style lang="scss"></style>
