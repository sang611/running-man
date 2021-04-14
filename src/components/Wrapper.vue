<template>
  <div class="hello">
    <a-layout id="components-layout-demo-responsive">
      <a-row :style="{width: '100%'}">
        <a-layout-sider
            breakpoint="xl"
            collapsed-width="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            width="260"
            :style="{
                height: '100%',
                position: 'fixed',
                left: 0,
                paddingTop: '40px',
                backgroundColor: '#2F2E38'
              }"
        >
          <center>
            <img src="https://challenge.vn/Content/Logo.png?v=1.0.1" width="150px"/>
          </center>

          <a-menu
              theme="dark"
              mode="inline"
              :default-selected-keys="[menuName]"
              :style="{backgroundColor: '#2F2E38', marginTop: '60px'}"
              id="nav-sider"
          >

            <a-menu-item key="leaderboard" class="item-sidebar">
              <router-link to="/leaderboard">
                <a-icon type="line-chart"/>
                <span class="nav-text">Xếp hạng</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="challenge" class="item-sidebar">
              <router-link to="/challenge">
                <a-icon type="thunderbolt"/>
                <span class="nav-text">Challenge</span>
              </router-link>
            </a-menu-item>


            <a-menu-item key="mission" class="item-sidebar">
              <router-link to="/mission">
                <a-icon type="file-protect"/>
                <span class="nav-text">Nhiệm vụ</span>
              </router-link>
            </a-menu-item>

            <!--              <a-menu-item key="4" class="item-sidebar">
                            <router-link to="/plan">
                              <a-icon type="tags" />
                              <span class="nav-text">Training Plan</span>
                            </router-link>

                          </a-menu-item>-->
          </a-menu>
        </a-layout-sider>

        <a-layout :style="{ marginLeft: !collapse ? '260px' : '0px' , transition: '.5s'}">
          <a-layout-header
              :style="{
            display: 'flex',
            background: '#FDFCFB',
            padding: '0 20px',
            position: 'fixed',
            zIndex: 1000,
            transition: '.5s',
            width: collapse ? '100%' : 'calc(100% - 260px)',
            boxShadow: '0 0 5px gray',
          }"

          >

              <a-menu
                  mode="horizontal"
                  :style="{ border: 'none', marginLeft: 'auto', lineHeight: '64px'}"

              >
                <a-menu-item key="app" @click="showDrawer">
                  <a-icon type="bell" style="font-size: 16px"/>
                </a-menu-item>
                <a-menu-item key="account">
                  <router-link to="/member/info/activity">
                    <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/login">
                    Đăng nhập
                  </router-link>

                </a-menu-item>
                <a-menu-item>
                  <router-link to="/signup">
                    Đăng ký
                  </router-link>

                </a-menu-item>
              </a-menu>

          </a-layout-header>

          <a-layout-content :style="{ margin: '64px 16px 0', height: '100%' }">
            <div :style="{ background: '#fff', height: '100% !important' }">
              <router-view></router-view>
            </div>
          </a-layout-content>

        </a-layout>

      </a-row>
    </a-layout>

    <DrawerComponent :showDrawer="showDrawer" :onClose="onClose" :visible="visible"/>
  </div>
</template>

<script>


import DrawerComponent from "@/components/DrawerComponent";

export default {
  name: 'Wrapper',
  components: {DrawerComponent},
  props: {
    msg: String
  },
  beforeMount() {
    const menuName = this.$router.history.current.fullPath.split("/")[1];
    console.log(menuName)
    this.menuName = menuName
  },
  data() {
    return {
      visible: false,
      collapse: false,
      menuName: ""
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
      this.collapse = collapsed
    },
    onBreakpoint(broken) {
      console.log(broken);
    },

    showDrawer() {
      this.visible = true;
    },

    onClose() {
      this.visible = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#nav-sider .ant-menu-item.ant-menu-item-selected {
  background-color: #4b4b58 !important;
  border-radius: 50px;
}

.item-sidebar {
  border-radius: 50px !important;
}



</style>
