<template>
  <div>
    <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
      <li class="mui-table-view-cell" v-for="item in photoList" :key="item.comment">
        <a :href="item.image">
          <div class="mui-table">
            <div class="mui-table-cell mui-col-xs-10">
              <h4 class="mui-ellipsis">{{ item.text }}</h4>
            </div>
            <div class="mui-table-cell mui-col-xs-2 mui-text-right">
            </div>
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
      photoList: []
    };
  },
  created() {
    this.getphoto();
  },
  methods: {
    getphoto() {
      this.$http
        .get("https://www.apiopen.top/satinGodApi?type=3&page=1")
        .then(result => {
          // console.log(result.body);
          this.photoList = result.body.data;
        });
    }
  }
};
</script>

<style lang="">
</style>