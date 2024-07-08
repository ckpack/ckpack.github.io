<script setup>
import { to } from '@/router';

defineProps(['src', 'title', 'description', 'more']);
</script>

<template>
  <div class="max-w-1000px m-auto">
    <div class="w-full m-y-2vw">
      <t-row :gutter="16" align="middle" justify="space-around">
        <t-col :span="12" :md="4">
          <k-image :src="src" class="rounded-2xl" />
        </t-col>
        <t-col :span="12" :md="8">
          <div class="p-4">
            <div class="text-6 font-600 p-y">
              {{ title }}
            </div>
            <div class="text-4 p-y line-height-normal">
              {{ description }}
            </div>
            <t-button @click="() => to(more)">
              了解更多
            </t-button>
          </div>
        </t-col>
      </t-row>
    </div>
  </div>
</template>
