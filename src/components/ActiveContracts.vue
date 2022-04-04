<template>
  <b-container class="py-2" fluid>
    <b-row align-h="center" align-v="center">
      <b-col>
        <div class="contracts mr-3 p-4">
          <h2 class="text-decoration-underline" v-b-modal.modal-contracts>
            Active contracts:
          </h2>
          <div v-if="activeContracts.length < 1">
            <p class="font-weight-bold">None</p>
          </div>
          <div v-for="contract in activeContracts" :key="contract.id">
            <p>{{ contract.location.name }}</p>
            <p>
              {{ contract.timeLeft }}
            </p>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="contracts ml-3 p-4">
          <h2
            class="text-decoration-underline"
            v-b-modal.modal-finished-contracts
          >
            Finished contracts:
          </h2>
          <div v-if="finishedContracts.length < 1">
            <p class="font-weight-bold">None</p>
          </div>
          <div v-for="contract in finishedContracts" :key="contract.id">
            <p>{{ contract.location.name }}</p>
            <p>Finished</p>
            <button @click="finishContract(contract)">Payout</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
</style>
