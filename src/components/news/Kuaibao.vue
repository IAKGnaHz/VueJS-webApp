<template>
  <timeline>
    <timeline-item
      date="2 minutes ago"
      icon="twitter"
      type="primary"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.</timeline-item>
    <timeline-item type="primary" date="Sat, 5 Mar">
      <p>adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <p>
        <a href>news center</a>
      </p>
      <p>
        <img src="https://pek3a.qingstor.com/warehouse1/c1.jpg">
      </p>
    </timeline-item>
    <timeline-item
      date="Sun, 11 Feb"
      icon="wechat"
      type="success"
    >Call to customer Jacob and discuss the detail.</timeline-item>
  </timeline>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getKuaipao();
  },
  methods: {
    getKuaipao() {
      this.$http
        .get(
          "https://api.apiopen.top/getImages",
          { page: "2", count: "10" },
          { emulateJSON: true }
        )
        .then(result => {
          console.log(result.body);
        });
    }
  }
};
</script>

<style>
</style>