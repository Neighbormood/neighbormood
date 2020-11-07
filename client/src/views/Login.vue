<template>
  <div id="login-view">
    <h1>Login page</h1>
    <!-- Temporary login link -->
    <button @click="handleClickSignIn">
      Sign in
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router/index.js";

export default {
  data() {
    return {
      isSignIn: false
    };
  },
  methods: {
    ...mapActions("user", ["loadUserId"]),
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const userId = googleUser.getId();
        localStorage.userId = userId;
        this.loadUserId(userId);
        // this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        // this.isSignIn = this.$gAuth.isAuthorized;
        console.log("isSignIn", this.$gAuth.isAuthorized);
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    let checkGauthLoad = setInterval(function() {
      if (localStorage.userId) {
        clearInterval(checkGauthLoad);
        router.push({ name: "User" });
      }
    }, 1000);
  }
};
</script>
