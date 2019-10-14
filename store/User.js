export const state = () => ({
    isConnected : false,
}) 

export const getters = {
    name: state => {
        return state.name;
      },
}

export const mutations = {
    isConnected(state) {
        state.isConnected = !state.isConnected
    },
}

export const actions = {
    isConnected ({ commit }) {
        commit('isConnected')
    }
}