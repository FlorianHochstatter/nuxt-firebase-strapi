<script setup lang="ts">
const {logout} = useStrapiAuth()
const signOut = async () => {
  logout()
  await signOutUser();
};

const user = defineModel<User>('user', { required: true })

</script>

<template>
  <div v-if="user">
    Hello {{user.email}}
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<style lang="scss" scoped></style>