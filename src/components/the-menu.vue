<script setup>
import { ref } from 'vue';
import logo from '@/assets/logo.png';
import { to } from '@/router';

const items = ref([
  {
    label: '产品中心',
    route: '/pro',
  },
  {
    label: '解决方案',
    route: '/solutions',
  },
  {
    label: '合作案例',
    route: '/cases',
  },
  {
    label: '服务支持',
    route: '/service',
  },
  {
    label: '新闻动态',
    route: '/news',
  },
  {
    label: '关于我们',
    route: '/about',
    items: [
      {
        label: '公司简介',
        route: '/about',
      },
      {
        label: '加入我们',
        route: '/about',
      },
    ],
  },
  {
    type: 'button',
    label: '联系我们',
    route: '/about',
  },
]);
</script>

<template>
  <div class="w-full bg-white position-sticky top-0 z-9">
    <div class="max-w-1200px flex m-auto">
      <div class="p-2">
        <div class="bg-blue" @click="to('/')">
          <img :src="logo" height="50px">
        </div>
      </div>
      <Menubar class="b-0! w-full flex-row-reverse text-4 font-600" :model="items">
        <template #item="{ item, props, hasSubmenu, root }">
          <a class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <t-button v-if="item.type === 'button'">{{ item.label }}</t-button>
            <template v-else>
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <span v-else class="ml-2">{{ item.label }}</span>
            </template>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" class="pi pi-angle-down" :class="[{ 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
          </a>
        </template>
      </Menubar>
    </div>
  </div>
</template>
