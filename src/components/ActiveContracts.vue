<template>
  <section>
    <div class="active-contracts">
      <h2>Active contracts</h2>
      <div v-if="activeContracts.length < 1">
        <p>None</p>
      </div>
      <div v-for="contract in activeContracts" :key="contract.id">
        <p>{{ contract.location.name }}</p>
        <p>
          {{ contract.timeLeft }}
        </p>
      </div>
    </div>
    <div class="finished-contracts">
      <h2>Finished contracts</h2>
      <div v-if="finishedContracts.length < 1">
        <p>None</p>
      </div>
      <div v-for="contract in finishedContracts" :key="contract.id">
        <p>{{ contract.location.name }}</p>
        <p>Finished</p>
        <button @click="finishContract(contract)">Payout</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeContracts() {
      return this.$store.getters.activeContracts;
    },
    finishedContracts() {
      return this.$store.getters.finishedContracts;
    },
  },
  methods: {
    finishContract(contract) {
      this.$store.dispatch("finishContract", contract);
    },
  },
};
</script>

<style lang="scss">
.active-contracts {
  margin-bottom: 32px;
}
</style>
