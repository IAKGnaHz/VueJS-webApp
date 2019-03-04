<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="Vue项目"></mt-header>
    <!-- 中间区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="icon is-medium">
          <i class="fa fa-home"></i>
        </span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="icon is-medium">
          <i class="fa fa-youtube-play"></i>
        </span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcart">
        <span class="icon is-medium">
          <i class="fa fa-play"></i>
        </span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="icon is-medium">
          <i class="fa fa-cog"></i>
        </span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mint-header {
  background-color:#f7f7f7;
  color: #929292;
}

body {
  background-color: #fff !important;
}
</style>