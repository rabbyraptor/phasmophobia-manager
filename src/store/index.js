import Vue from 'vue'
import Vuex from 'vuex'

/* const findContract = function (contract) {
  return state.contractCollection.find(item => item.id == contract.id)
} */

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
        status: "available",
        location: {
          name: "Tanglewood Street House",
          size: "Small",
          baseReward: 750,
        },
        cost: 100,
        timeLeft: 3
      },
      {
        id: 1,
        status: "available",
        location: {
          name: "Bleasdale Farm House",
          size: "Medium",
          baseReward: 1800,
        },
        cost: 100,
        timeLeft: 5
      },
      {
        id: 2,
        status: "available",
        location: {
          name: "Grafton Farm House",
          size: "Medium",
          baseReward: 3500,
        },
        cost: 100,
        timeLeft: 10
      }
    ],
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
    availableContracts(state) {
      return state.contractCollection.filter(contract => contract.status == "available")
    },
    activeContracts(state) {
      return state.contractCollection.filter(contract => contract.status == "active")
    },
    finishedContracts(state) {
      return state.contractCollection.filter(contract => contract.status == "done")
    },
  },
  mutations: {
    removeHunterFromList(state, hunter) {
      state.hunterCollection.splice(state.hunterCollection.indexOf(hunter), 1);
    },
    addHunterToList(state, hunters) {
      hunters.forEach(hunter => {
        state.hunterCollection.push(hunter);
      });
    },
    subtractCostFromCash(state, cost) {
      state.user.cash -= cost;
    },
    addCostToContract(state, { cost, contract }) {
      state.contractCollection.find(item => item.id == contract.id).cost = cost
    },
    addHuntersToContract(state, contract) {
      state.contractCollection.find(item => item.id == contract.id).hunters = contract.hunters
    },
    addContractToActiveContracts(state, contract) {
      state.contractCollection.find(item => item.id == contract.id).status = "active"
    },
    addContractToFinishedContracts(state, id) {
      state.contractCollection.find(item => item.id == id).status = "done"
    },
    subtractOneSecondFromContracts(state, id) {
      state.contractCollection.find(item => item.id == id).timeLeft -= 1;
    },
    removeContractFromFinishedContracts(state, contract) {
      let index = state.contractCollection.indexOf(contract)
      state.contractCollection.splice(index, 1);
    },
  },
  actions: {
    startContract({ commit }, { cost, contract }) {
      commit('subtractCostFromCash', cost)
      commit('addHuntersToContract', { ...contract })
      commit('addContractToActiveContracts', { ...contract })
      commit('addCostToContract', { cost, contract })
    },
    endContract({ commit }, id) {
      commit('addContractToFinishedContracts', id)
    },
    finishContract({ commit, state }, contract) {
      commit('addHunterToList', contract.hunters)
      let theContract = state.contractCollection.find(item => item.id == contract.id);
      state.user.cash += theContract.location.baseReward - theContract.cost

      //commit('calculateCash', contract, getters )
      commit('removeContractFromFinishedContracts', contract)
    },
  },
  modules: {
  }
})
