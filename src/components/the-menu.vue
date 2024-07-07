<script setup>
import { ref } from 'vue';
import logo from '@/assets/logo.png';

const items = ref([
  {
    label: '产品中心',
  },
  {
    label: '解决方案',
  },
  {
    label: '合作案例',
  },
  {
    label: '服务支持',
  },
  {
    label: '新闻动态',
  },
  {
    label: '关于我们',
    items: [
      {
        label: '公司简介',
      },
      {
        label: '联系我们',
      },
      {
        label: '加入我们',
      },
    ],
  },
  {
    type: 'button',
    label: '联系我们',
  },
]);
</script>

<template>
  <div class="max-w-1200px flex m-auto">
    <div class="p-2">
      <div class="bg-blue">
        <img :src="logo" height="50px">
      </div>
    </div>
    <Menubar class="b-0! w-full flex-row-reverse text-4 font-600" :model="items">
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <el-button v-if="item.type === 'button'" type="primary">{{ item.label }}</el-button>
          <span v-else class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" class="pi pi-angle-down" :class="[{ 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
        </a>
      </template>
    </Menubar>
  </div>
</template>
