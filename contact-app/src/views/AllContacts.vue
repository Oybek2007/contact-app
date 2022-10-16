<template>
  <div class="home">
    <div class="forData">
      <div class="allContactsView" v-if="contacts">
        <AllContactView :contacts="contacts" />
      </div>

      <div v-else>
        <Loading class="loading" />No contacts
      </div>
    </div>
  </div>
</template>

<script>
import AllContactView from "@/components/AllContactView.vue";
import getContacts from "../composable/getContacts";
import getUser from "../composable/getUser";

import Loading from "../components/loading.vue";

export default {
  name: "AllContacts",
  components: {
    AllContactView,
    Loading,
  },
  setup() {
    const { user } = getUser();

    const { contacts, error } = getContacts("contacts", [
      "creatorId",
      "==",
      user.value.uid,
    ]);

    return {
      user,
      contacts,
      error,
    };
  },
};
</script>
<style scoped>
.allContactsView {
  margin-top: 10px;
}

.loading {
  margin-top: 50px;
}
</style>
