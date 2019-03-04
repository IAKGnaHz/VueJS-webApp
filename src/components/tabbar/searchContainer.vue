<template>
  <div>
    <div class="columns" style="margin-top: 20px; background-color: #f0f0f0;">
      <div class="column is-3">
        <div class="menu is-light">
          <menus label="内容管理">
            <menu-item icon="image">
              <span>图片</span>
              <menus slot="sub">
                <menu-item
                  :to="{ path: '/components/menu/submenu1', query: { userId: 321 }}"
                  icon="car"
                  :is-active="true"
                >汽车</menu-item>
                <menu-item icon="slack">
                  <span>风景</span>
                  <menus slot="sub">
                    <menu-item icon="home">Picture</menu-item>
                    <menu-item icon="home">Content</menu-item>
                    <menu-item icon="home">
                      <span>Nav</span>
                      <menus slot="sub" type="float">
                        <menu-item icon="home">Main Nav</menu-item>
                        <menu-item icon="home">Sub Nav</menu-item>
                      </menus>
                    </menu-item>
                  </menus>
                </menu-item>
              </menus>
            </menu-item>
            <menu-item icon="music" to="/components/menu/submenu2">音乐</menu-item>
            <menu-item icon="file-text-o" to="/components/menu/submenu4">
              <span>文章</span>
            </menu-item>
            <menu-item icon="film" to="/components/menu/submenu3">
              <span>视频</span>
            </menu-item>
          </menus>
          <menus label="内容管理">
            <menu-item icon="image">
              <span>图片</span>
              <menus slot="sub">
                <menu-item
                  :to="{ path: '/components/menu/submenu1', query: { userId: 321 }}"
                  icon="car"
                  :is-active="true"
                >汽车</menu-item>
                <menu-item icon="slack">
                  <span>风景</span>
                  <menus slot="sub">
                    <menu-item icon="home">Picture</menu-item>
                    <menu-item icon="home">Content</menu-item>
                    <menu-item icon="home">
                      <span>Nav</span>
                      <menus slot="sub" type="float">
                        <menu-item icon="home">Main Nav</menu-item>
                        <menu-item icon="home">Sub Nav</menu-item>
                      </menus>
                    </menu-item>
                  </menus>
                </menu-item>
              </menus>
            </menu-item>
            <menu-item icon="music" to="/components/menu/submenu2">音乐</menu-item>
            <menu-item icon="file-text-o" to="/components/menu/submenu4">
              <span>文章</span>
            </menu-item>
            <menu-item icon="film" to="/components/menu/submenu3">
              <span>视频</span>
            </menu-item>
          </menus>
          <menus label="系统设置">
            <menu-item icon="users">会员管理</menu-item>
            <menu-item icon="users">会员管理</menu-item>
            <menu-item icon="ticket">工单管理</menu-item>
            <menu-item icon="lock">修改密码</menu-item>
            <div class="divider"></div>
            <menu-item icon="sign-out">退出登录</menu-item>
          </menus>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.column {
  padding: 0px 10px 10px 10px;
}

</style>