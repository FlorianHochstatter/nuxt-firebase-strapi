<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "application"
})
</script>

<template>
  <PageDashboardContent />
</template>

<style lang="scss" scoped></style>