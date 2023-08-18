<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="SidebarMenuBgColor"
    :text-color="SidebarMenuTextColor"
    :active-text-color="SidebarMenuActiveTextColor"
    :unique-opened="true"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/route';
import SidebarItem from './SidebarItem.vue';
import { getCssVariableValue } from '@/utils/index.js';

const SidebarMenuBgColor = getCssVariableValue('--base-sidebar-menu-bg-color');
const SidebarMenuTextColor = getCssVariableValue('--base-sidebar-menu-text-color');
const SidebarMenuActiveTextColor = getCssVariableValue('--base-sidebar-menu-active-text-color');

const router = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});
console.log('routes111==', routes);
// 计算高亮 menu 的方法
const route = useRoute();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>
