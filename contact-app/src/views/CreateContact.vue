<template>
  <div class="create">
    <form @submit.prevent="handleAddContact">
      <h2>Welcome to Create-Contact Page</h2>
      <div class="forInput">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="forInput">
        <label for="number">Number:</label>
        <input type="number" id="number" v-model="number" required />
      </div>
      <div class="forInput">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="footerInputs">
        <div>
          <label for="tag">Tag:</label>
          <select name="tag" id="tag" v-model="tag" required>
            <option value="" disabled>Select Tag</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <button type="reset">Reset</button>
        </div>

        <div>
          <input type="checkbox" id="checkbox" v-model="mark" />
          <label for="checkbox">Mark</label>
        </div>
      </div>

      <Loading v-if="isPending" class="loading" />
      <button v-else type="submit" class="addBtn">Add contact</button>
    </form>
  </div>
</template>
<script>
import useContactAdd from "../composable/addContact.js";
import getUser from "../composable/getUser.js";

import Loading from "../components/loading.vue";
import { useRouter } from "vue-router";
import { timeStamp } from "@/firebase/config";
import { ref } from "vue";

export default {
  name: "AboutView",
  components: {
    Loading,
  },
  setup() {
    const { addContact, error } = useContactAdd("contacts");
    const { user } = getUser();
    const router = useRouter();
    const isPending = ref(false);

    const name = ref("");
    const number = ref("");
    const email = ref("");
    const tag = ref("");
    const mark = ref(false);

    const handleAddContact = async () => {
      isPending.value = true;

      const res = await addContact("contacts", {
        name: name.value,
        number: number.value,
        email: email.value,
        tag: tag.value,
        marked: mark.value,
        creatorId: user.value.uid,
        creatorName: user.value.displayName,
        createdAt: timeStamp(),
      });

      if (!error.value) {
        console.log("Contact successfully added !");
        isPending.value = false;
        router.push({ name: "allContacts" });
      } else {
        isPending.value = false;
      }
    };

    return {
      isPending,

      name,
      number,
      email,
      tag,
      mark,

      handleAddContact,
    };
  },
};
</script>
<style scoped>
.create {
  margin-top: 10px;
}

form {
  background-color: rgb(250, 250, 250);
  max-width: 500px;
  width: auto;
  margin: 0px auto;
  padding: 20px;
  box-shadow: 1px 2px 3px rgb(50 50 50 / 5%);
  border: 1px solid #ebebeb;
  border-radius: 8px;
}

form label,
form input,
form select {
  font-size: 20px;
}

form .forInput {
  width: 90%;
  text-align: left;
  margin: 10px auto;
}

.forInput input {
  width: 100%;
  display: block;
}

form select {
  margin: 5px;
}

form button {
  font-size: 20px;
  padding: 2px 7px;
}

form .footerInputs {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

form .addBtn {
  margin-top: 10px;
  padding: 5px 7px;
}

/* Loading */
.loading {
  margin: 0px auto;
}
</style>
