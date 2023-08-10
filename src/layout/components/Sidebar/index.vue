<template>
  <div class="">
    <div class="logo-container">
      <el-avatar :size="logoHeight" :src="LOGO_IMG" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ LOGO_TITLE }}
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from "./SidebarMenu";
import { LOGO_TITLE, LOGO_IMG } from "@/config";

const logoHeight = 32;
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + "px";
  padding: 8px 0 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
