<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="[]">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
