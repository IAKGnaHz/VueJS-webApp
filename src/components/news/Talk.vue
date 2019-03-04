<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for='item in talkList' :key='item.type'>
        <a :href="item.videouri?item.videouri:item.image1">
          <img class="mui-media-object mui-pull-left" :src='item.profile_image'>
          <div class="mui-media-body">{{ item.text}}
            <p class="mui-ellipsis">{{ item.passtime }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      talkList : []
    };
  },
  created() {
    this.getTalk();
  },
  methods: {
    getTalk() {
      this.$http.get("https://www.apiopen.top/satinApi?type=1&page=1").then(
        result => {
          if(result.body.code == 200) {
            this.talkList = result.body.data
          }
        }
      );
    }
  }
};
</script>

<style lang="">
</style>