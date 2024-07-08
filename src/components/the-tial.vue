<script setup>
const list = [{
  title: '解决方案',
  children: [{
    title: '安防',
  }, {
    title: '测绘',
  }, {
    title: '水利',
  }, {
    title: '林业',
  }, {
    title: '新能源',
  }, {
    title: '农林植保',
  }, {
    title: '校企',
  }],
}, {
  title: '快速通道',
  children: [{
    title: '产品中心',
  }, {
    title: '执照培训',
  }, {
    title: '下载中心',
  }, {
    title: '关于我们',
  }, {
    title: '合作案例',
  }],
}, {
  title: '联系我们',
  children: [{
    title: '地址: 天津',
  }, {
    title: '电话: +86 1xxxxxxxxxx',
  }, {
    title: '邮箱：xxx@email.com',
  }],
}]
</script>

<template>
  <div class="w-full bg-black z-9 p-y-24">
    <div class="tial-content max-w-1200px flex m-auto">
      <div class="tial-main">
        <div v-for="item in list" :key="item.title" class="bottombar-wrapper">
          <div class="title color-white">
            {{ item.title }}
          </div>
          <div class="bar-list color-gray">
            <div v-for="i in item.children" :key="i.title" class="item">
              {{ i.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 max-md:hidden" />
      <div class="logo-content">
        <div class="logo">
          <img class="logo-collapse" src="@/assets/logo.png">
        </div>
        <div class="platform-description color-white">
          科技 创新  合作 共赢
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tial-content {
  display: flex;

  .logo-content {
    .logo {
      display: inline-block;
      height: 60px;
      position: relative;
      transform: translate(-17%, -17%);
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    .platform-description {
      font-size: 1rem;
      margin: 0.4rem 0;
      position: relative;
    }
  }
  .tial-main {
    display: flex;
    justify-content: space-between;
    flex: 2;
    .bottombar-wrapper {
      width: 100%;
      .title {
        font-size: 1.2rem;
      }
      .bar-list {
        font-size: 0.8rem;
        .item {
          margin: 12px 0;
        }
      }
    }
  }
}
</style>
