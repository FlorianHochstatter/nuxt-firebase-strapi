<script setup lang="ts">
const isLoading = useIsLoading()
</script>

<template>
  <div class="application">
    <slot v-if="!isLoading" />
    <div v-else>Loading Application...</div>
  </div>
</template>

<style lang="scss"></style>