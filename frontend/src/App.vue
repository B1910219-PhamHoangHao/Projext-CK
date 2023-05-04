<script>
import AppHeader from "@/components/AppHeader.vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { onBeforeMount } from "vue";
export default {
  components: {
    AppHeader,
  },
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
  }
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<style>
  .page {
    max-width: 400px;
    margin: auto;
  }
</style>
