<template>
  <div>
    <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
      <li class="mui-table-view-cell" v-for="item in newList" :key="item.docid">
        <a :href="item.link">
          <div class="mui-table">
            <div class="mui-table-cell mui-col-xs-10">
              <h4 class="mui-ellipsis">{{ item.title }}</h4>
              <h6>{{ item.category }}</h6>
              <p class="mui-h6 mui-ellipsis">{{ item.digest }}</p>
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
      newList: []
    };
  },
  created() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        // console.log(result.body)
        if (result.body.code == "200") {
          this.newList = result.body.data.tech;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>