<template>
  <div class="backgroundDiv">
    <div class="mainlyDiv container">
      <div class="filter__nav">
        <button @click="filterBySort('all')" :class="tag === 'all' ? 'active' : ''">
          All
        </button>
        <button @click="filterBySort('family')" :class="tag === 'family' ? 'active' : ''">
          Family
        </button>
        <button
          @click="filterBySort('friends')"
          :class="tag === 'friends' ? 'active' : ''"
        >
          Friends
        </button>
        <button @click="filterBySort('work')" :class="tag === 'work' ? 'active' : ''">
          Work
        </button>
        <button @click="filterBySort('other')" :class="tag === 'other' ? 'active' : ''">
          Other
        </button>
      </div>

      <div class="search__nav">
        <input type="search" placeholder="Search contact..." />
        <ion-icon class="searchIcon" name="search-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "FilterContact",
  props: {
    tag: String,
  },
  setup(props) {
    const tag = ref("all");

    const filterBySort = (by) => {
      tag.value = by;
    };

    const scrollFunc = window.addEventListener("scroll", () => {
      let header = document.querySelector(".backgroundDiv");
      header.classList.toggle("sticky", window.scrollY > 30);
    });

    return {
      filterBySort,
      scrollFunc,
      tag,
    };
  },
};
</script>

<style scoped>
/* Mainly styles */
.backgroundDiv {
  width: 100%;
  background-color: rgba(255, 235, 205, 0.398);
  border: 1px solid red;
  border-radius: 3px;
  margin-top: 10px;
  transition: all ease 0.2s;
}

/* for Scroll Event */
.sticky {
  position: fixed;
  top: 0px;
  left: 0px;
  transition: all ease 0.2s;
  z-index: 777;
}
/* ------------------ */

.container {
  max-width: 1320px;
  width: 100%;
  /* text-align: center; */
  /* align-self: center; */
  margin: 0px auto;
}

.mainlyDiv {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.filter__nav,
.search__nav {
  margin: 10px;
}

/* For tags */
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

/* For search input */
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

/* Responsive all */
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
