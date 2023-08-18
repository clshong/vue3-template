<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="[]">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: 'App'
};

let a = 10;
</script>

<style></style>
