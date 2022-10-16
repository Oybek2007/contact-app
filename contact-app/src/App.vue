<template>
  <nav>
    <div v-if="user">
      <router-link to="/">All</router-link>
      |
      <router-link to="/createContact">Create</router-link>
    </div>

    <span v-if="user">
      <h3>Salom: {{ user.displayName }}</h3>
    </span>

    <div v-if="user">
      <button @click="handleLogOut" id="logOutBtn">Logout</button>
      <span v-if="error">{{ error }}</span>
    </div>
    <div v-else>
      <router-link to="/login">LogIn</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script>
import getUser from "./composable/getUser";
import useLogut from "@/composable/useLogout";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter()
    const { user } = getUser();
    const { error, logout, isPending } = useLogut();


    // if(user){
    //   console.log('Hello World! ----------------------------------- >>>>>>.>>>.>>');
    //   router.push( {name: 'allContacts'})
    // }

    const handleLogOut = async () => {
      if (confirm("Do you want to log out of your account ?")) {
        await logout();
        router.push("/login");
      } else {
        console.log("Logout Cenceled");
      }
    };

    return {
      user,
      error,
      handleLogOut,
    };
  },
};
</script>
<style>
h3 {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav div a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
}

nav a.router-link-exact-active,
nav a.router-link-exact-active button {
  color: #42b983;
  background-color: aliceblue;
  border: 1px solid currentColor;
}

#logOutBtn {
  background: #da0f41;
  color: #ebebeb;
}

button {
  border-radius: 8px;
  border: 0;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}
</style>
