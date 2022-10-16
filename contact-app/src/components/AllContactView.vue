<template>
  <div v-if="searchFunc">
    <div class="backgroundDiv">
      <div class="mainlyDiv container">
        <div class="filter__nav">
          <button
            @click="filterBySort('all')"
            :class="tag == 'all' ? 'active' : 'simple'"
          >
            All
          </button>
          <button
            @click="filterBySort('family')"
            :class="tag == 'family' ? 'active' : 'simple'"
          >
            Family
          </button>
          <button
            @click="filterBySort('friends')"
            :class="tag == 'friends' ? 'active' : 'simple'"
          >
            Friends
          </button>
          <button
            @click="filterBySort('work')"
            :class="tag == 'work' ? 'active' : 'simple'"
          >
            Work
          </button>
          <button
            @click="filterBySort('other')"
            :class="tag == 'other' ? 'active' : ''"
          >
            Other
          </button>
        </div>

        <div class="search__nav">
          <input
            type="search"
            placeholder="Search contact..."
            v-model="search"
          />
          <ion-icon class="searchIcon" name="search-outline"></ion-icon>
        </div>
      </div>
    </div>

    <!-- To loop with for -->
    <div class="contacts" v-for="contact in searchFunc" :key="contact.id">
      <!-- Chiqarilganlarni boshqarish uchun -->

      <div class="single container">
        <!-- Contact info -->
        <div class="info">
          <h2 id="name">Name: {{ contact.name }}</h2>
          <h4 id="number">
            Phone number:
            <a :href="'tel:' + contact.number">{{ contact.number }}</a>
          </h4>
          <h4 id="email">
            Email:
            <a v-if="contact.email" :href="'mailto:' + contact.email">
              <span>{{ contact.email }}</span>
            </a>
            <a v-else style="color: red" href="#">
              <span>Email not entered</span>
            </a>
          </h4>
          <h4 id="tag">Tag: {{ contact.tag }}</h4>
          <h4 id="marked">
            Mark:
            <span v-if="contact.marked">Marked</span>
            <!-- <span v-if="contact.marked">{{ contact.marked }}</span> -->
            <span v-else>Not specified</span>
          </h4>
        </div>

        <!-- Contact controllers -->
        <div class="controllers">
          <a :href="'tel:' + contact.number">
            <ion-icon
              class="controlIcon callIcon"
              name="call-outline"
            ></ion-icon>
          </a>

          <router-link
            :to="{ name: 'EditContact', params: { id: contact.id} }"
          >
            <ion-icon
              class="controlIcon editIcon"
              name="create-outline"
            ></ion-icon>
          </router-link>

          <ion-icon
            @click="hendleDelete(contact.id)"
            class="controlIcon deleteIcon"
            name="trash-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>
      You have no contacts <br />
      You can create a new contact from
      <router-link to="/createContact" class="mainlyA">here</router-link>
    </h1>
  </div>
</template>

<script>
import useContact from "@/composable/useContact";
import getUser from "../composable/getUser";

import EditContact from "../components/EditContact.vue";

import { useRouter } from "vue-router";
import { ref, computed } from "@vue/reactivity";

export default {
  props: ["contacts"],
  setup(props) {
    // Basic and General Variavles
    const router = useRouter();
    const mycontact = ref(props.contacts);
    const { user } = getUser();
    const search = ref("");
    const tag = ref("all");

    // Contact delete Func
    const hendleDelete = async (id) => {
      const { deleteContact, error, isPending } = useContact("contacts", id);

      // Request Permission From The User
      if (confirm("Do you want to log out of your account ?")) {
        await deleteContact();
        router.push({ name: "allContacts" });
      } else {
        console.log("Delete contact cenceled. By:", user.displayName);
      }
    };

    // Filter Contact by Group
    const filterBySort = (by) => {
      tag.value = by;
      if (by == "all") {
        return (mycontact.value = props.contacts);
      }
      mycontact.value = props.contacts.filter((el) => {
        if (el.tag == by) {
          return el;
        } else {
          console.log("This tag has no contacts");
        }
      });
    };

    // Search With in Contact Filtered by Group 
    const searchFunc = computed(() => {
      return mycontact.value.filter((el) => {
        return el.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    // Scroll Function for Filter Component
    const scrollFunc = window.addEventListener("scroll", () => {
      let header = document.querySelector(".backgroundDiv");
      header.classList.toggle("sticky", window.scrollY > 120);
    });

    return {
      EditContact,  // EditContact Component
      mycontact,    // Filtered Contacts
      hendleDelete, // Contact Delete Function
      user,         // User`s value/uid
      filterBySort, // Filter Contact Function
      tag,          // Variable to filter
      scrollFunc,   // Scroll Func for Filter Component
      search,       // Search Input`s Value
      searchFunc,   // Search Contact Function
    };
  },
};
</script>


<style>
/* I apologize for the confusion of my style */

/* General styles */
a {
  text-decoration: none;
  color: #f3f3f3;
}

.mainlyA {
  color: #42b983;
}

h2,
h4 {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1320px;
  width: 100%;
  text-align: center;
  align-self: center;
  margin: 0px auto;
}

@media screen and (max-width: 1350px) {
  .container {
    max-width: 1100px;
  }
}

@media screen and (max-width: 1140px) {
  .container {
    max-width: 960px;
  }
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 768px;
  }
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 768px;
  }
}

@media screen and (max-width: 810px) {
  .container {
    max-width: 576px;
  }
}

@media screen and (max-width: 720px) {
  .container {
    max-width: 576px;
  }
}

@media screen and (max-width: 620px) {
  .container {
    max-width: 540px;
  }
}

@media screen and (max-width: 590px) {
  .container {
    max-width: 460px;
  }
}

/* Mainly styles */
.single {
  background: linear-gradient(
    to bottom right,
    rgba(79, 51, 176, 1),
    rgba(210, 53, 165)
  );
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
  transition: all ease 0.2s;
}

.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}

/* Info styles */

.single .info {
  text-align: left;
  color: #f3f3f3;
}

.single .info #tag {
  text-transform: capitalize;
}

/* Common Controller styles */
.controllers {
  display: block;
  align-items: center;
  align-self: center;
  font-size: 30px;
}

.controllers .controlIcon {
  display: block;
  padding: 5px;
}

.controllers .callIcon {
  color: #00ff00;
}

.controllers .editIcon {
  color: yellow;
}

.controllers .deleteIcon {
  color: darkred;
  cursor: pointer;
}

/* Mainly styles */
.backgroundDiv {
  width: 100%;
  background-color: rgba(255, 235, 205, 0.398);
  border: 1px solid red;
  border-radius: 3px;
  margin-top: 10px;
  transition: all ease 0.2s;
}



/* For Tags/Filter */
.filter__nav {
  max-width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgb(0, 255, 0);
}

.filter__nav button {
  background-color: none;
  border: 2px solid #bbb;
  border-radius: 3px;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: bold;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 7px;
  margin: 5px;
}

.filter__nav .active {
  color: #555;
  border-color: #555;
}

.filter__nav button:active {
  color: #555;
  border-color: #555;
}

/* For Scroll Event */
.sticky {
  position: fixed;
  top: 0px;
  left: 0px;
  transition: all ease 0.2s;
  z-index: 777;
  margin: 0;
}
/* ------------------ */

.mainlyDiv {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.filter__nav,
.search__nav {
  margin: 10px;
}

/* For Search Input */
.search__nav {
  display: flex;
  align-items: center;
}

.search__nav input {
  font-size: 20px;
  padding: 3px 5px;
}

.searchIcon {
  background-color: #bbb;
  border-radius: 3px;
  font-size: 20px;
  padding: 6px;
  margin: 3px;
}

/* Responsive All */
@media screen and (max-width: 1348px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 70%;
  }
}

@media screen and (max-width: 1041px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 90%;
  }
}

@media screen and (max-width: 800px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 100%;
    /* display: flex; */
  }

  .filter__nav button {
    font-size: 10px;
    text-transform: uppercase;
    padding: 3px 5px;
    margin: 5px;
  }
}

@media screen and (max-width: 682px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 52%;
    display: block;
    text-align: left;
  }
}

@media screen and (max-width: 660px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 56%;
  }
}

@media screen and (max-width: 610px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 60%;
  }
}

@media screen and (max-width: 568px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 65%;
  }
}

@media screen and (max-width: 530px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 70%;
  }
}

@media screen and (max-width: 492px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 75%;
  }
}

@media screen and (max-width: 460px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 80%;
  }
}

@media screen and (max-width: 430px) {
  /* Mainly styles */
  .mainlyDiv {
    width: 87%;
  }
}
</style>
