<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.url" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="icon is-large">
            <i class="fa fa-bath"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/talk">
          <span class="icon is-large">
            <i class="fa fa-camera"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photo">
          <span class="icon is-large">
            <i class="fa fa-bicycle"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/video">
          <span class="icon is-large">
            <i class="fa fa-chrome"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/demo">
          <span class="icon is-large">
            <i class="fa fa-calendar-check-o"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/kuaibao">
          <span class="icon is-large">
            <i class="fa fa-comment-o"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/folder">
          <span class="icon is-large">
            <i class="fa fa-folder"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <span class="icon is-large">
            <i class="fa fa-music"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <span class="icon is-large">
            <i class="fa fa-check-square"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <span class="icon is-large">
            <i class="fa fa-apple"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <span class="icon is-large">
            <i class="fa fa-pied-piper-alt"></i>
          </span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to>
          <span class="icon is-large">
            <i class="fa fa-share-alt"></i>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: [] //保存轮播图数组
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    getSwipe() {
      // 获取轮播图的方法
      this.$http.get("../../../api/Swipe.json").then(result => {
        this.swipeList = result.body.message;
      });
    }
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: aqua;
}
.mint-swipe-item:nth-child(2) {
  background-color: yellow;
}
.mint-swipe-item:nth-child(3) {
  background-color: red;
}
img {
  height: 100%;
  width: 100%;
}
.mui-table-view {
  background-color: #fff;
}
.mint-header[data-v-7ba5bd90] {
  background-color: #f7f7f7;
}
</style>