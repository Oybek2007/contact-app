<template>
  <div class="edit">

    <form @submit.prevent="handleUpdateContact">
      <h2>Welcome to Edit-Contact Page</h2>
      <h4>Your Contact id: {{ $route.params.id }}</h4>
      <div class="forInput">
        <label for="name">Name: </label>
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
      <button v-else type="submit" class="addBtn">Update contact</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";                           // For functions
import { useRouter } from "vue-router";              // For functions

import getUser from "../composable/getUser";         // Used "User" For Update Contact
import useContact from "../composable/useContact";   // For Update Function (Mainly)

import getContacts from "../composable/getContacts"  // Get contacts from Firebase --- I don't know why
import Loading from "./loading.vue";                 // Loading Component

// import getCollection from "../composable/getContact" // For Test

export default {
  name: "EditContact",
  props: ["id", "contact"],
  components: {
    Loading,
  },
  setup(props, params) {
    const isPending = ref(false);
    let id = props.id;

    // const { document: contact } = getCollection("con tacts", id); // For Test
    const { updateContact, error } = useContact("con tacts", id); // Mainly "Update_Contact_Function"
    const { user } = getUser();                      // Get USer
    const router = useRouter();

    const name = ref("");
    const number = ref("");
    const email = ref("");
    const tag = ref("");
    const mark = ref(false);

    // Get Contacts for Editing
    const { contacts } = getContacts("contacts", [ // ——\
      "creatorId",                                 //    \
      "==",                                        //     ==>  Only for test
      user.value.uid,                              //    /
    ]);                                            //  _/ 

    // Update an Old Contact in Firebase Function
    const handleUpdateContact = async () => {
      isPending.value = true;       // Variable for "Loading"

      // We use TryCatch to avoid "bug" at error time
      try {
        // Update Contact (Mainly Function)
        const res = await updateContact({
          name: name.value,
          number: number.value,
          email: email.value,
          tag: tag.value,
          marked: mark.value
        });

        if (!error.value) {
          console.log("Contact updated successfully !");
          isPending.value = false;        // Variable for "Loading"
          router.push({ name: "allContacts" });
        }
      } catch (error) {
        if(error.value) {
          isPending.value = false;        // Variable for "Loading"
          console.log("The contact was not updated successfully !");
          console.log(error.value);
        }
      }
    };
    // Finished Updating an Old Contact in Firebase - done

    return {
      isPending, // Variable for "Loading"
      error,     // Error (value)
      user,      // User (value)
      router,    // Used Router    

      // Contact variables to update
      name,      // Updated Name Variable
      number,    // Updated Name Variable
      email,     // Updated Email Variable
      tag,       // Updated Group Variable
      mark,      // Updated Mark Variable

      // Mainly or General Functions
      handleUpdateContact,
      // contact,   // I don't even know why I used it
      contacts   // All Contacts for Editing - Variable
    };
  },
};
</script>
<style scoped>
form {
  background-color: rgb(250, 250, 250);
  max-width: 500px;
  width: auto;
  margin: 0px auto;
  padding: 20px;
  box-shadow: 1px 2px 3px rgb(50 50 50 / 5%);
  border: 1px solid #ebebeb;
  border-radius: 8px;
  margin-top: 10px;
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
