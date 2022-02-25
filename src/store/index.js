import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      cash: 500
    },
    locationCollection: [
      {
        name: "Tanglewood Street House",
        size: "small",
        baseReward: 500,
      }
    ],
    hunterCollection: [
      {
        id: 0,
        name: "Randy",
        color: "red"
      },
      {
        id: 1,
        name: "Ricky",
        color: "blue"
      },
      {
        id: 2,
        name: "Julian",
        color: "green"
      },
    ],
    contractCollection: [
      {
        id: 0,
        location: {
          name: "Tanglewood Street House",
          size: "Small",
          baseReward: 750,
        },
        cost: 200,
        timeLeft: 3
      },
      {
        id: 1,
        location: {
          name: "Bleasdale Farm House",
          size: "Medium",
          baseReward: 1800,
        },
        cost: 600,
        timeLeft: 5
      },
      {
        id: 2,
        location: {
          name: "Grafton Farm House",
          size: "Medium",
          baseReward: 3500,
        },
        cost: 1000,
        timeLeft: 10
      }
    ],
    activeContracts: [],
    finishedContracts: []
  },
  getters: {
    user(state) {
      return state.user
    },
    locations(state) {
      return state.locationCollection
    },
    hunters(state) {
      return state.hunterCollection
    },
    contracts(state) {
      return state.contractCollection
    },
    activeContracts(state) {
      return state.activeContracts
    },
    finishedContracts(state) {
      return state.finishedContracts
    },
  },
  mutations: {
    removeHunterFromList(state, hunter) {
      state.hunterCollection.splice(state.hunterCollection.indexOf(hunter), 1);
    },
    addHunterToList(state, hunter) {
      state.hunterCollection.push(hunter);
    },
    subtractCostFromCash(state, cost) {
      state.user.cash -= cost;
    },
    addCostToContract(state, { cost, contract }) {
      let index = state.activeContracts.indexOf(contract)
      state.activeContracts[index] = { ...contract, cost: cost }
    },
    addContractToActiveContracts(state, contract) {
      state.activeContracts.push(contract)
    },
    removeContractFromContractCollection(state, contract) {
      state.contractCollection.splice(state.contractCollection.indexOf(contract), 1);
    },
    removeContractFromActiveContracts(state, contract) {
      state.activeContracts.splice(state.activeContracts.indexOf(contract), 1);
    },
    addContractToFinishedContracts(state, contract) {
      state.finishedContracts.push(contract);
    },
    subtractOneSecondFromContract(state, contract) {
      let index = state.activeContracts.indexOf(contract);
      state.activeContracts[index].timeLeft -= 1;
    },
    calculateCash(state, contract) {
      let index = state.finishedContracts.indexOf(contract);
      state.user.cash += state.finishedContracts[index].location.baseReward - state.finishedContracts[index].cost
    },
    removeContractFromFinishedContracts(state, contract) {
      let index = state.finishedContracts.indexOf(contract)
      state.finishedContracts.splice(index, 1);
    }
  },
  actions: {
    startContract({ commit }, { cost, contract }) {
      commit('subtractCostFromCash', cost)
      commit('addContractToActiveContracts', { ...contract })
      commit('removeContractFromContractCollection', contract)
      commit('addCostToContract', { cost, contract })
    },
    endContract({ commit }, contract) {
      commit('addContractToFinishedContracts', contract)
      commit('removeContractFromActiveContracts', contract)
    },
    finishContract({ commit }, contract) {
      commit('removeContractFromActiveContracts', contract)
      contract.hunters.forEach(hunter => {
        commit('addHunterToList', hunter)
      });
      commit('calculateCash', contract)
      commit('removeContractFromFinishedContracts', contract)
    },
  },
  modules: {
  }
})
