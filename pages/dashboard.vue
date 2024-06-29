<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "application"
})

const { fetchUser } = useStrapiAuth()
const user = await fetchUser()

</script>

<template>
  <PageDashboardContent v-model:user="user" />
</template>

<style lang="scss" scoped></style>