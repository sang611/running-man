<template>
  <div id="profile-wrapper">
    <a-row type="flex" justify="space-between">
      <a-space :size="100">
        <a-space>
          <a-avatar
              src="https://challenge.vn/Thumbnail/ExtraLarge/Upload/Avartars/20210324/be368173e5dfed795f49ffdc0c457945.jpg"
              :size="72"/>
          <div>
            <h3><b>Phạm Duy Minh</b></h3>
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

      <DTPComponent/>

    </a-row>


    <br>

    <StatisticColumnChart :height="450"/>

    <br>

    <JoinedChallenge />

    <br>

    <div class="list-activity">
      <h3><b>Hoạt động</b></h3>
      <a-divider/>
      <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <ActivityComponent :index="index" :item="item"/>
        </a-list-item>
      </a-list>
    </div>


  </div>
</template>

<script>
import StatisticColumnChart from "./StatisticColumnChart";
import ActivityComponent from "../ActivityComponent";
import DTPComponent from "../DTPComponent";
import JoinedChallenge from "./JoinedChallenge";



export default {
  name: "ProfilePage",
  components: {JoinedChallenge, DTPComponent, ActivityComponent, StatisticColumnChart},
  data: function () {
    return {
      data: [
        {
          url: "https://challenge.vn/Thumbnail/Large/Upload/Avartars/20210319/b7697ab90f9f8bb61a4827cd66deba7a.png"
        },
        {
          url: "https://challenge.vn/Thumbnail/Large/Upload/Avartars/20210319/b7697ab90f9f8bb61a4827cd66deba7a.png"
        },
        {
          url: "https://challenge.vn/Thumbnail/Large/Upload/Avartars/20210319/b7697ab90f9f8bb61a4827cd66deba7a.png"
        }
      ],

    }
  },


}
</script>

<style scoped>

#profile-wrapper {
  padding: 40px 100px;
}


.list-activity {
  margin-top: 50px;
}




</style>
