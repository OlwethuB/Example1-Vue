<template>
    <nav>
    <img src="https://img.logoipsum.com/274.svg" alt="logo">

    <div>
    <router-link to="/" >Home</router-link> ||
    <router-link to="/about" >About</router-link> ||
    <router-link to="/properties" >Properties</router-link>
    
    </div>
    <div v-if="!user">
    <router-link to="/login">Login</router-link> ||
    <router-link to="/register">Register</router-link>
    
    </div>
    
    
    </nav>   
    
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    }
    
}
</script>
<style >
    nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav img {
  height: 50px;
  width: 50px;
  aspect-ratio: 1;
  object-fit: cover;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>