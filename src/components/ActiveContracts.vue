<template>
  <section>
    <div v-if="activeContracts.length > 0">
      <h2>Active contracts</h2>
      <div v-for="contract in activeContracts" :key="contract.id">
        <p>{{ contract.location.name }}</p>
        <p>
          {{ countdownTimer(contract) }}
        </p>
      </div>
    </div>
    <div v-if="finishedContracts.length > 0">
      <h2>Finished contracts</h2>
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
    return {
      activeContracts: this.$store.getters.activeContracts,
      finishedContracts: this.$store.getters.finishedContracts,
      timers: [],
    };
  },
  methods: {
    countdownTimer(contract) {
      let index = this.activeContracts.indexOf(contract);
      if (this.timers.length < 1) {
        this.timers.push({
          contract: contract,
          timeLeft: this.$store.getters.activeContracts[index].timeLeft,
        });
        this.startTimer(contract);
      }
      if (
        this.timers.length > 0 &&
        this.timers[this.timers.length - 1].timeLeft <= 0
      ) {
        this.$store.dispatch("endContract", contract);
        this.timers.pop();
        return "Finished";
      }
      return this.timers[this.timers.length - 1].timeLeft;
    },
    startTimer(contract) {
      //this.time = time;
      setInterval(() => {
        if (
          this.timers.length > 0 &&
          this.timers[this.timers.length - 1].timeLeft > 0
        ) {
          this.$store.commit("subtractOneSecondFromContract", contract);
          this.timers[this.timers.length - 1].timeLeft -= 1;
        }
      }, 1000);
    },
    finishContract(contract) {
      this.$store.dispatch("finishContract", contract);
    },
  },
};
</script>

<style></style>
