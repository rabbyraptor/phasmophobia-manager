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
};
</script>

<style lang="scss"></style>
