<template>
  <form @submit.prevent="handleSubmit">
    <h1>Log in</h1>

    <div class="firstDivs">
      <div class="secondDivs">
        <label for="email">Email</label>
        <span>
          Need an account?
          <router-link :to="{ name: 'signup' }" class="linkToSignup"
            >Sign up</router-link
          >
        </span>
      </div>
      <input
        type="email"
        id="email"
        required
        v-model="email"
        placeholder="Email:"
      />
    </div>

    <div class="firstDivs">
      <div class="secondDivs">
        <label for="password">Password</label>
        <span class="showBtn" @click="showPassword"
          ><ion-icon
            :name="showUsePassword ? 'eye-off-outline' : 'eye-outline'"
            style="margin-right: 5px"
          ></ion-icon>
          <p v-if="showUsePassword">Hide</p>
          <p v-else>Show</p>
        </span>
      </div>
      <input
        :type="showUsePassword ? 'text' : 'password'"
        id="password"
        required
        v-model="password"
        placeholder="Password:"
      />
    </div>

    <div v-if="!isPending" class="logInBtn">
      <button>Log In</button>
    </div>
    <div v-if="isPending" class="spinners">
      <loading />
    </div>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import useLogin from "@/composable/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";
import loading from "@/components/loading.vue";

export default {
  props: ["outputTil"],
  components: {
    loading,
  },
  setup() {
    const { login, error, isPending } = useLogin();
    const router = useRouter();

    const password = ref("");
    const email = ref("");

    const showUsePassword = ref(false);

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("Foydalanuvchi Muoffaqqiyatli Login bo'ldi");
        router.push("/");
      }
    };

    const showPassword = () => {
      showUsePassword.value = !showUsePassword.value;
      console.log(showUsePassword.value);
    };

    return {
      password,
      email,
      error,
      handleSubmit,
      isPending,

      showUsePassword,
      showPassword,

      // outputTil,
    };
  },
};
</script>

<style scoped>
/* Mainly Styles */
a {
  text-decoration: none;
}

.spinners {
    margin: 0px auto;
}

/* forms */
form {
  max-width: 400px;
  margin: 10px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  border: 1px solid #ebebeb;
  background: white;
}

form h1 {
  color: black;
  font-weight: bold;
}

form h2 {
  text-align: center;
}

input {
  border: 0;
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 10px auto;
  font-size: 16px;
}

form .firstDivs {
  display: block;
  margin-top: 15px;
}

form .secondDivs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.firstDivs .secondDivs span {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

label {
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
}

span {
  font-size: 16px;
}

span .linkToSignup {
  font-size: 18px;
  color: #04aa6d;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-left: 6px;
}

.showBtn {
  width: 70px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
}

.logInBtn button {
  width: 100%;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
}

button,
.btn {
  background: #ebebeb;
  border-radius: 8px;
  border: 0;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
}

.logInBtn button:hover {
  background-color: #04aa6d;
  color: #fff;
}
</style>
