<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign Up</h1>

    <div class="firstDivs">
      <div class="secondDivs">
        <label for="name">Name</label>
        <span id="anonymousSpan">
          <label for="anonymousInput" class="anonymousLabel" id=""
            >Appearing anonymously to others</label
          >
          <input type="checkbox" name="" id="anonymousInput" />
        </span>
      </div>
      <input
        type="text"
        id="name"
        required
        v-model="displayName"
        placeholder="Name:"
      />
    </div>

    <div class="firstDivs">
      <div class="secondDivs">
        <label for="email">Email</label>
        <span>
          Already have an account ?
          <router-link :to="{ name: 'login' }" class="linkToSignup"
            >Log In</router-link
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
      <button>Sign Up</button>
    </div>
    <div v-if="isPending" class="spinners">
      <loading />
    </div>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import useSignup from "@/composable/useSignup";
import { ref } from "vue";
import { useRouter } from "vue-router";
import loading from "@/components/loading.vue";

export default {
  components: {
    loading,
  },
  setup() {
    const { signup, error, isPending } = useSignup();
    const router = useRouter();

    const password = ref("");
    const email = ref("");
    const displayName = ref("");

    const showUsePassword = ref(false);

    const handleSubmit = async () => {
      console.log("Mana Senga olam olam Ism, ", displayName.value, email.value);
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("Foydalanuvchi Muoffaqqiyatli Qo'shilib bo'ldi");
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
      displayName,
      showUsePassword,
      showPassword,
    };
  },
};
</script>

<style scoped >
/* Mainly Styles */
a {
  text-decoration: none;
}

.spinners {
  margin: 0px auto;
}

#anonymousSpan {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
}

#anonymousSpan label {
  font-size: 16px;
  /* width: 475px; */
}

#anonymousInput {
  width: auto;
  margin-left: 5px;
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
