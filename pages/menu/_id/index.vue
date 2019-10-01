<template>
  <div>
    <p>name : {{name}}</p>
    
  </div>
</template>

<script>
export default {
    data () {
        return {
            name : this.$route.params.id
        }
    },
    head () {
    return {
      title: this.name,
      meta: [
        // hid est utiliser comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        { hid: 'description', name: this.name, content: `Ma description de ${this.name}` }
      ]
    }
  }
}
</script>