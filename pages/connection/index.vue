<template>
  <div>
    <header>
      <nuxt-link to="/" tag="img" src="/img/logo192.png" id="logo" style="cursor : pointer"/> 
    </header>
    <h2>Votre compte Shopeefast</h2>
    <section>
      <a-row type="flex" justify="space-between">
        <a-col :xs="24" :lg="11" style="marginTop : 10px">
          <div class="gutter-box">
            <p class="title">
              déjà inscrit ?
              <!-- <a-divider style="height : 5px" /> -->
            </p>
            <connectionForm />
          </div>
        </a-col>
        <a-col :xs="24" :lg="11" style="marginTop : 10px">
          <div class="gutter-box">
            <p class="title">
              pas encore inscrit ?
              <!-- <a-divider style="height : 5px" class="divider" /> -->
            </p>
            <p id="slogan">CRÉEZ VOTRE COMPTE ET BÉNÉFICIEZ DE NOMBREUX AVANTAGES</p>
            <ul>
              <li>Suivez toutes vos commandes</li>
              <li>Gagnez du temps pour vos prochains achats</li>
              <li>Bénéficiez d'offres exclusives</li>
            </ul>
            <br />
            <div id="button">
              <a-button id="create-account" @click="showDrawer">créer un compte</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </section>
    <Drawer :visible="visible" :showDrawer="showDrawer" />
  </div>
</template>

<script>
import connectionForm from "../../components/account/ConnectionForm";
import Drawer from "../../components/account/DrawerCreate";
export default {
  components: {
    connectionForm,
    Drawer
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
$break-small: 960px;
$break-large: 961px;
#logo {
  width: 90px;
  height: 90px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: $break-large) {
    margin-left: 90px;
  }
}
section {
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: $break-large) {
    margin-left: 90px;
    margin-right: 90px;
  }
}
h2 {
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: $break-large) {
    font-size: 40px;
  }
}
.gutter-box {
  border: 10px solid rgba(210, 210, 210, 0.5);
  padding: 20px;
  height: 100%;
}
.title {
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 25px;
}
.divider {
  background-color: yellow;
}
#slogan {
  text-transform: uppercase;
  color: black;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
}
#button {
  display: flex;
  justify-content: center;
}
#create-account {
  width: 60%;
  background-color: yellow;
  text-transform: uppercase;
  border: none;
}
#create-account:hover {
  width: 80%;
  background-color: #f9f584;
  text-transform: uppercase;
  border: none;
  color: black;
}
#create-account:active {
  background-color: yellow;
  text-transform: uppercase;
  border: none;
  color: black;
}
</style>