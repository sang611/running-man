<template>
  <div id="detail-mission-wrapper">
    <div class="detail-mission-banner">
      <p id="mission-title">{{challenge.name}}</p>
    </div>
    <br><br>
    <div id="mission-detail">
      <center>
        <a-tabs :default-active-key="tabName" size="large" @change="onChangeTab" :tabBarGutter="200">
          <a-tab-pane key="information" tab="Thông tin">

          </a-tab-pane>
          <a-tab-pane key="rank" tab="Bảng xếp hạng" force-render>

          </a-tab-pane>
          <a-tab-pane key="activity" tab="Hoạt động">
          </a-tab-pane>
        </a-tabs>
      </center>

      <router-view/>

    </div>
  </div>
</template>

<script>


// import InfoMission from "./InfoMission";
// import RankMission from "./RankMission";
export default {
  name: "DetailMissionPage",
  //components: {RankMission, InfoMission},
  data() {
    return {
      keyActive: "1",
      tabName: ""
    }
  },

  beforeMount() {
    const tabName = this.$router.history.current.fullPath.split("/").pop();
    this.tabName = tabName;

    this.$store.dispatch('getChallengeById', {id: 8989});
  },

  watch: {
    challenge() {
      console.log(this.challenge)
    }
  },

  computed: {
    challenge() {
      return this.$store.state.challenge.challenge;
    }
  },

  methods: {
    onRoute(path) {
      this.$router.push("/challenge/1/" + path)
    },

    onChangeTab(tab) {
      this.onRoute(tab)
    }
  }
}
</script>

<style scoped>
#detail-mission-wrapper {

}

.detail-mission-banner {
  width: 100%;
  height: 40vh;
  background-image: url('https://challenge.vn/Content/banner.jpg?v=1.0.1');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}


#mission-title {
  text-align: center;
  color: #fff;
  margin: 40px 0;
  font-size: 38px;
}

#mission-detail {
  padding: 0 150px;
}

.ant-tabs-nav-scroll {
  display: flex !important;
  justify-content: center !important;
}


</style>
