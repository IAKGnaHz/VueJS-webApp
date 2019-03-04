<template>
  <div>
    <div class="column">
      <tabs type="boxed">
        <tab-item label="走心广告">
          <li v-for="item in adList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="动画短片">
          <li v-for="item in carList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="创意生活">
          <li v-for="item in liftList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="运动精选">
          <li v-for="item in sportList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="视觉艺术">
          <li v-for="item in artList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="音乐盛宴">
          <li v-for="item in musicList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
        <tab-item label="电影剧集">
          <li v-for="item in movieList" :key="item.id">
            <div class="mui-card">
              <div
                id="mui-card-image"
                class="mui-card-header mui-card-media"
                v-bind:style="{height:height+'vw',backgroundImage:'url(' + item.data.content.data.cover.feed + ')'}"
              ></div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{ item.data.header.title }}</p>
                  <p
                    style="color: #333;font-size:13px;overflow:auto"
                  >{{ item.data.content.data.description}}</p>
                </div>
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
              </div>
            </div>
          </li>
        </tab-item>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adList: [],
      height: 40,
      carList: [],
      liftList: [],
      sportList: [],
      artList:[],
      musicList:[],
      movieList:[]
    };
  },
  created() {
    this.getAdVideo();
    this.getcarVideo();
    this.getLiftVideo();
    this.getSportVideo();
    this.getArtVideo();
    this.getMusicVideo();
    this.getMovieVideo();
  },
  methods: {
    getAdVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=14")
        .then(result => {
          if (result.body.code == 200) {
            this.adList = Array.prototype.slice.call(result.body.result, 0);
            console.log(this.adList)
          }
        });
    },
    getcarVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=10")
        .then(result => {
          if (result.body.code == 200) {
            this.carList = Array.prototype.slice.call(result.body.result, 0);
          }
        });
    },
    getLiftVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=36")
        .then(result => {
          if (result.body.code == 200) {
            this.liftList = Array.prototype.slice.call(result.body.result, 0);
          }
        });
    },
    getSportVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=18")
        .then(result => {
          if (result.body.code == 200) {
            this.sportList = Array.prototype.slice.call(result.body.result, 0);
          }
        });
    },
    getArtVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=2")
        .then(result => {
          if (result.body.code == 200) {
            this.artList = Array.prototype.slice.call(result.body.result, 0);
          }
        });
    },
    getMusicVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=20")
        .then(result => {
          if (result.body.code == 200) {
            this.musicList = Array.prototype.slice.call(result.body.result, 0);
          }
        });
    },
    getMovieVideo() {
      this.$http
        .get("https://api.apiopen.top/videoCategoryDetails?id=12")
        .then(result => {
          if (result.body.code == 200) {
            this.movieList = Array.prototype.slice.call(result.body.result, 0);
          }
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
  display: flex;
  flex-direction: column;
}

.tab-content > .tab-pane {
    display: block;
}
/* #mui-card-image {
  height: 40vw !important;
} */
</style>