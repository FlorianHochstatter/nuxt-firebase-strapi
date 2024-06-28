<script setup lang="ts">
const isLoading = useIsLoading()
</script>

<template>
  <div class="application">
    <slot v-if="!isLoading" />
  </div>
</template>

<style lang="scss"></style>