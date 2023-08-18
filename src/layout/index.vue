<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar" class="sidebar-container" :style="{ SidebarMenuBgColor }" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <NavigationBar />
        <!-- tags -->
        <tags-view />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import { NavigationBar, TagsView, Sidebar, AppMain } from './components/index';
import { getCssVariableValue } from '@/utils/index.js';

const SidebarMenuBgColor = getCssVariableValue('--base-sidebar-menu-bg-color');
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - var(--base-sidebar-width));
  transition: width var(--base-sidebar-width);
}

.hideSidebar .fixed-header {
  width: calc(100% - var(--base-sidebar-hide-width));
}
</style>
