<script setup lang="ts">
import {signInUser} from "~/composables/useFirebase";

const googleLogin = async () => {
  if (!await googleSignIn()) {
    console.log("Error Google Social Login")
  }
};

const submitLoginForm = async () => {
  if (!await signInUser("email@email.com", "password")) {
    console.log("Error Sign In Formular")
  }
}
</script>

<template>
  <button @click="googleLogin">Google Login</button>
</template>

<style scoped lang="scss"></style>