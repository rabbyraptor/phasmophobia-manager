<template>
  <section>
    <h2>Contracts</h2>
    <div class="contracts">
      <div
        v-for="contract in contracts"
        :key="contract.id"
        @click="openContractDetails(contract)"
        class="contract"
      >
        <h3>{{ contract.location.name }}</h3>
        <p>Size: {{ contract.location.size }}</p>
      </div>
    </div>
    <div
      class="contract-modal"
      v-if="contractDetails"
      @click.self="contractDetails = null"
    >
      <div class="contract-details">
        <div class="header">
          <h1>{{ contractDetails.location.name }}</h1>
          <p>Size: {{ contractDetails.location.size }}</p>
          <p>Difficulty: Amateur</p>
          <p>Reward: ${{ contractDetails.location.baseReward }}</p>
          <br />
        </div>
        <div class="body">
          <h2>Assign team</h2>
          <div class="team-picker">
            <div
              v-for="hunter in chosenTeam"
              :key="hunter.id"
              @click="removeHunterFromChosenTeam(hunter)"
              class="team-picker__spot"
            >
              <p>{{ hunter.name }}</p>
            </div>
            <div
              class="team-picker__spot"
              @click="showAvailableHunters = !showAvailableHunters"
            >
              +
            </div>
          </div>
          <div class="hunter-picker" v-if="showAvailableHunters">
            <p
              v-for="(hunter, index) in hunters"
              :key="hunter.id"
              @click="addHunterToChosenTeam(hunter, index)"
              class="hunter-picker__hunter"
            >
              <b>{{ hunter.name }}</b
              ><br />
              Favorite color: {{ hunter.color }}
            </p>
          </div>
        </div>
        <div class="footer">
          <div class="summary">
            <h2>Setup cost</h2>
            <p>Initial cost: ${{ contractDetails.cost }}</p>
            <p>Team expenses: ${{ teamExpenses }} (Number of hunters x $50)</p>
            <br />
            <b>Total cost: ${{ totalCost }}</b>
          </div>
          <div class="start-contract">
            <button
              @click="startContract()"
              :disabled="chosenTeam.length < 1"
              class="start-contract__submit-button"
            >
              Start contract
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contractDetails: null,

      activeContracts: this.$store.getters.activeContracts,
      chosenTeam: [],
      showAvailableHunters: false,
      hunters: null,
    };
  },
  mounted() {
    this.hunters = this.$store.getters.hunters;
  },
  computed: {
    contracts() {
      return this.$store.getters.availableContracts;
    },
    teamExpenses() {
      return this.chosenTeam.length * 50;
    },
    totalCost() {
      if (this.contractDetails !== null) {
        return this.contractDetails.cost + this.teamExpenses;
      }
      return null;
    },
  },
  methods: {
    openContractDetails(contract) {
      this.contractDetails = contract;
    },
    addHunterToChosenTeam(hunter) {
      this.chosenTeam.push(hunter);
      this.$store.commit("removeHunterFromList", hunter);
    },
    removeHunterFromChosenTeam(hunter) {
      this.chosenTeam.splice(this.chosenTeam.indexOf(hunter), 1);
      this.$store.commit("addHunterToList", hunter);
    },
    startContract() {
      this.$store.dispatch("startContract", {
        cost: this.totalCost,
        contract: { ...this.contractDetails, hunters: this.chosenTeam },
      });
      this.contractDetails = null;
      this.chosenTeam = [];
    },
  },
};
</script>

<style lang="scss">
.contracts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
}
.contract {
  border: 1px solid #222;
  padding: 2rem;
  display: inline-block;
  transition: background-color 0.075s ease;
  cursor: pointer;

  &:hover {
    background-color: #20202012;
  }
}

.contract-modal {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #202020aa;

  .contract-details {
    margin: 5rem auto;
    width: 70rem;
    height: 80rem;
    padding: 4rem;
    background: white;
    & > div {
      margin-bottom: 3rem;
      &:last-child {
        margin-bottom: 0;
      }
    }

    // BODY
    .body {
      .team-picker {
        display: flex;
        padding: 2rem 0;
        &__spot {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8rem;
          height: 8rem;
          margin-right: 2rem;
          font-size: 4rem;
          color: white;
          background-color: #20202090;
          border: 2px solid #202020;
          border-radius: 50%;
          cursor: pointer;
        }
      }
      .hunter-picker {
        &__hunter {
          margin-bottom: 1rem;
          cursor: pointer;
          &:hover b {
            text-decoration: underline;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    // FOOTER
    .footer {
      & > div {
        margin-bottom: 2rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .start-contract {
        &__submit-button {
          padding: 1rem;
        }
      }
    }
  }
}
</style>
