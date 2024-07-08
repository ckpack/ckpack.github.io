<script setup>
import WechatIMG2 from '@/assets/imgs/WechatIMG2.jpg';
import WechatIMG3 from '@/assets/imgs/WechatIMG3.jpg';
import WechatIMG4 from '@/assets/imgs/WechatIMG4.jpg';
import WechatIMG5 from '@/assets/imgs/WechatIMG5.jpg';

const images = [WechatIMG2, WechatIMG3, WechatIMG4, WechatIMG5]
</script>

<template>
  <t-swiper :duration="300" :interval="2000">
    <t-swiper-item v-for="image in images" :key="image">
      <div class="h-500px k-center">
        <img class="w-full" :src="image" style="object-fit: contain;">
      </div>
    </t-swiper-item>
  </t-swiper>
  <!-- <a-carousel class="w-full h-500px bg-black!">
    <a-carousel-item v-for="image in images" :key="image">
      <div class="h-full k-center">
        <img class="w-full" :src="image" style="object-fit: contain;">
      </div>
    </a-carousel-item>
  </a-carousel> -->
</template>
