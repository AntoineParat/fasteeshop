<template>
  <div>
    <p>name : {{name}}</p>
    <p>connected : {{isConnected ? "OUi" : "non"}} </p>
    <button @click="toggleConnexion">toggle</button>
    <p>{{firstName}} </p>
    <input v-model="setfirstName"/>
    <button @click="changeName" >change name </button>
    <br>
    <button @click="fetchData">Chuck Norris </button>
    <p>{{norrisJoke}} </p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            name : this.$route.params.id,
            setfirstName : null,
            norrisJoke :null
        }
    },
    asyncData(context) {
      return context.app.$axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        return {norrisJoke : res.data.value}
      })
    },
    head () {
    return {
      title: this.name,
      meta: [
        // hid est utiliser comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        { hid: 'description', name: "description", content: `Ma description de ${this.name}` }
      ]
    }
  },
  methods : {
    toggleConnexion() {
      this.$store.dispatch('MenuId/toggle')
    },
    changeName() {
      this.$store.commit('MenuId/setName', this.setfirstName)
    },
    fetchData() {
      this.$axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => this.norrisJoke = res.data.value )
    }
  },
  computed : {
    isConnected () {
      // return this.$store.getters['menuId/isConnected']
      return this.$store.state.MenuId.isConnected
    },
    firstName() {
      return this.$store.getters['MenuId/name']
    }
  }
}
</script>