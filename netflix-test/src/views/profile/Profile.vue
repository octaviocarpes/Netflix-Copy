<template>
  <div class="profile-container">
    <Navbar />
    <h1>Profiles</h1>
    <div class="profiles">
      <ul>
        <li v-for="user in profiles" :key="user.id" @click="loginUser(user)">
          <div class="profile">
            <img
              :src="require('../../assets/img/profile-icon.jpg')"
              alt="logo"
              :class="{
                active: user.username == sessionUser.username,
                inactive: user.username != sessionUser.username
              }"
            />
            <p>{{ user.username }}</p>
            <!-- TODO: add dynamic classes to user in session -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Navbar from "@/components/navbar/Navbar";
import Storage from "@/storage";

export default {
  name: "Profile",

  components: {
    Navbar
  },

  computed: {
    profiles() {
      return Storage.getUsers();
    },

    sessionUser() {
      return Storage.getUserSession();
    }
  },

  methods: {
    loginUser(user) {
      Storage.endUserSession();
      Storage.saveUserSession(user);
      store.dispatch("PERFORM_LOGIN", user);
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-container {
  width: 100%;
  height: 100%;

  h1 {
    color: white;
  }

  .profiles {
    position: relative;
    top: 50px;

    ul {
      list-style: none;
      display: flex;
      justify-content: center;

      li {
        margin: 10px;

        img {
          width: 100px;
          height: 100px;

          &:hover {
            border: 5px solid white;
          }
        }

        p {
          color: white;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.active {
  border: 5px solid white;
}

.inactive {
  border: none;
}
</style>
