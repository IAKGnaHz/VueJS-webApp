<template>
  <div>
    <ul>
      <li v-for="item in videoList" :key="item.id">
        <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <img :src="item.data.header.icon">
            <div class="mui-media-body">
              {{ item.data.content.data.title}}
              <p>{{ item.data.header.description }}</p>
            </div>
          </div>
          <div class="mui-card-content">
            <img :src="item.data.content.data.cover.feed" alt width="100%">
          </div>
          <div class="mui-card-footer">
            <a class="mui-card-link">
              <span class="icon is-small">
                <i class="fa fa-heart" style="color:red"></i>
              </span>
            </a>
            <a class="mui-card-link" :href="item.data.content.data.playUrl">
              <span class="icon is-small">
                <i class="fa fa-link" style="color:darkorange"></i>
              </span>
            </a>
            <a class="mui-card-link">
              <span class="icon is-small">
                <i class="fa fa-share" style="color:#007aff"></i>
              </span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoList: []
    };
  },
  created() {
    this.getvideo();
  },
  methods: {
    getvideo() {
      this.$http.get("https://api.apiopen.top/todayVideo").then(result => {
        this.videoList = Array.prototype.slice.call(result.body.result, 1, 6);
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>