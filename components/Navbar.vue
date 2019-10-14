<template>
  <div id="navbar">
    <a-icon type="menu-unfold" class="show-small" style="fontSize : 24px"/>
    <img src="/img/logo192.png" id="logo" />
    <a-input-search placeholder="Rechercher un article" class="show-large" style="width : 600px" v-model="search" @change="query" @search="onSearch"/>
    <div :style="{'width' : '90px'}" class="flex-justify">
        <a-icon type="search" style="fontSize : 34px" class="show-small hoverable" />
        <a-icon type="user" :style="{'fontSize' : '34px'}" class="show-large hoverable" @click="link"/>
        <a-badge :count="count">
        <a-icon type="shopping" :style="{'fontSize' : '34px'}" class="hoverable" /> 
        </a-badge>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count : 1,
            search : null
        }
    },
    methods : {
        onSearch() {
            console.log(this.search);
            this.search =  null;
        },
        query() {
            console.log(this.search)
        },
        link() {
          this.$router.push("/compte")
        }
    }
};
</script>

<style lang="scss" scoped>
$break-small: 960px;
$break-large: 961px;
#navbar {
    display: flex;
    justify-content: space-between;
    align-items : center;
    // padding: 10px 40px 0 40px ;
    @media (min-width: $break-large) {
    margin-left : 40px;
    margin-right: 40px;
  }
    margin-left : 15px;
    margin-right: 15px;
    margin-top : 10px;
}
.flex-justify {
    display: flex;
    justify-content: space-between;
}
.show-small {
    @media (min-width: $break-large) {
    display: none;
  }
}
.show-large {
    @media (max-width: $break-small) {
    display: none;
  }
}
#logo {
    width: 50px;
    height: 50px;
    @media (max-width: $break-small) {
    margin-left : 65px
  }
}
.hoverable {
  cursor : pointer;
}
</style>