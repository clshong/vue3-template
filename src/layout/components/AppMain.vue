<template>
  <div class="main-warp">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.name" class="mian-app" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { isTags } from '@/utils/tags';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const route = useRoute();
const cachedViews = computed(() => {
  console.log(store.getters.tagsViewList.map((x) => x.name));
  return store.getters.tagsViewList.map((x) => x.name);
});

/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = '';
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/');
    title = pathArr[pathArr.length - 1];
  } else {
    title = route.meta.title;
  }
  return title;
};

/**
 * 监听路由变化
 */
watch(
  route,
  (to, from) => {
    // const cachedViews = store.getters.tagsViewList
    // console.log("store.getters.tagsViewList",cachedViews)
    if (!isTags(to.path)) return;
    const { fullPath, meta, name, params, path, query } = to;
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    });
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.main-warp {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;
}
.mian-app {
  position: absolute;
  padding: 20px;
  top: 100px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  overflow: auto;
  background: #fff;
}
</style>
