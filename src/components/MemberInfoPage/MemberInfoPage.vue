<template>
  <div style="padding: 24px 10%">
    <a-row type="flex" justify="space-between">
      <a-space :size="100">
        <a-space>
          <a-avatar
              src="https://challenge.vn/Thumbnail/ExtraLarge/Upload/Avartars/20210324/be368173e5dfed795f49ffdc0c457945.jpg"
              :size="72"/>
          <div>
            <h3><b>Sáng Vũ</b></h3>
            <a-space>
              <div>
                <i class="fas fa-trophy"></i><span> 5</span>
              </div>
            </a-space>
          </div>
        </a-space>

        <div>
          <i class="fas fa-envelope"></i> <span>tuyetdinhyoyo611@gmail.com</span><br>
          <i class="fas fa-phone"></i> <span>0123456789</span>
        </div>
      </a-space>


      <center>
        <a-space size="large">
          <a-card hoverable class="card-dpt">
            <i class="fas fa-map-marked-alt dpt-icon primary-color"></i>
            <a-card-meta>
              <template slot="description" >
                <h3 class="primary-color">
                  <b>748.66 KM</b>
                </h3>
                Tổng số KM hoàn thành
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable class="card-dpt">
            <i class="fas fa-rocket dpt-icon primary-color"></i>
            <a-card-meta>
              <template slot="description" >
                <h3 class="primary-color">
                  <b>748.66 KM</b>
                </h3>
                Tổng số KM hoàn thành
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable class="card-dpt">
            <i class="fas fa-clock dpt-icon primary-color"></i>
            <a-card-meta>
              <template slot="description" >
                <h3 class="primary-color">
                  <b>748.66 KM</b>
                </h3>
                Tổng số KM hoàn thành
              </template>
            </a-card-meta>
          </a-card>

        </a-space>
      </center>
    </a-row>
    <a-divider />
    <div>
      <a-menu mode="horizontal">
        <a-menu-item key="mail"> <a-icon type="mail" />Tổng quan </a-menu-item>

        <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting" />Quản lý challenge</span
        >

            <a-menu-item key="setting:1">
              <router-link to="/member/info/manager-challenge/list-challenge">
                Danh sách challenge
              </router-link>

            </a-menu-item>
            <a-menu-item key="setting:2">
              Phê duyệt hoạt động
            </a-menu-item>

            <a-menu-item key="setting:3">
              Danh sách xử lý vi phạm
            </a-menu-item>
            <a-menu-item key="setting:4">
              Báo cáo
            </a-menu-item>

        </a-sub-menu>
        <a-menu-item key="app" >

          <router-link to="/member/info/activity"><a-icon type="appstore" />Hoạt động</router-link>
        </a-menu-item>
        <a-menu-item key="createGroup">
          <router-link to="/member/info/group/creating">
            Tạo nhóm
          </router-link>
        </a-menu-item>
        <a-menu-item key="profile">
          <router-link to="/member/info/private">
            Thông tin cá nhân
          </router-link>
        </a-menu-item>
        <a-menu-item key="changePassword">
          <router-link to="/member/info/change-password">
            Đổi mật khẩu
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>

    <div style="margin-top: 50px">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "MemberInfoPage",

}
</script>

<style scoped>

.dpt-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.primary-color {
  color: #ED9B33;
}

.card-dpt {
  transition: .5s;
  width: 150px;
  height: 150px;
  border: solid 1px #ED9B33;
}


</style>
