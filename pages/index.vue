<template>
  <layout>
    <Navbar/>
    <div>
      <h1>BLOG</h1>
      <h2 >My lovely Nuxt.js project</h2>
      <nuxt-link to="/menu" tag="h2">Page 2</nuxt-link>
      <content >
        <button @click="stripe">stripe</button>
        <button @click="getuser">getuser</button>
        <button @click="getname">getname</button>
        <button @click="getPDF">pupeter</button>
        <button @click="setCookies">setCookies</button>
        <button @click="removeCookies">removeCookies</button>
      </content>
      <p>{{name}}</p>
      <p>{{cookies}} </p>
      <p>{{isConnected}} </p>
    </div>
  </layout>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      users: [],
      name: null
    };
  },
  methods: {
    async getname() {
      const res = await this.$axios.get("http://localhost:8000/getname");
      console.log(res.data.userList);
    },
    getuser() {
      this.$axios
        .get("http://localhost:8000/getuser")
        .then(res => console.log(res.data.userList));
    },
    stripe() {
      const stripe = Stripe("pk_test_oevDNgnDf7MryOlZOKGdT3AV");
      this.$axios.post("http://localhost:8000/session").then(res => {
        stripe
          .redirectToCheckout({
            sessionId: res.data.id
          })
          .then(function(result) {
            console.log(result.error.message);
          });
      });
    },
    async getPDF() {
      const response = await this.$axios.get("http://localhost:8000/pupetter", {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/pdf"
        }
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `facture.pdf`;
      link.click();
    },
    setCookies() {
      this.$cookies.set('test', '001122334455')
    },
    removeCookies() {
      this.$cookies.remove('test');
      this.$store.dispatch('User/isConnected')
    }
  },
  computed : {
    cookies() {
      return this.$store.state.cookies
    },
    isConnected () {
      // return this.$store.getters['menuId/isConnected']
      return this.$store.state.User.isConnected
    },
  }
};
</script>

<style scoped>

</style>

<style lang="scss" scoped>
$break-small: 900px;
.test {
  color: yellow;
  @media (max-width: $break-small) {
    color: blue;
  }
}
</style>