export const state = () => ({
    isConnected : true,
    name : 'Antoine'
}) 

export const getters = {
    name: state => {
        return state.name;
      },
}

export const mutations = {
    toggle(state) {
        state.isConnected = !state.isConnected
    },
    setName(state, name) {
        state.name = name
    }
}

export const actions = {
    toggle ({ commit }) {
        commit('toggle')
    }
}