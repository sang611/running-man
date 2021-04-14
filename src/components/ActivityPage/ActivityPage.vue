<template>
  <div>
<!--    <div id="activity-banner"></div>-->
    <div>
      <a-carousel autoplay>
        <div class="activity-banner banner1">
        </div>
        <div class="activity-banner banner2"></div>
        <div class="activity-banner banner3"></div>
        <div class="activity-banner banner4"></div>
      </a-carousel>
    </div>
    <div id="detail-activity-wrapper">
      <h3>
        <b>
          <i class="fas fa-running"></i>&nbsp;Morning Run
        </b>
      </h3>
      <a-divider/>
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

      <br><br>

      <div class="activity-info">
        <h3>
          <b>
            Information
          </b>
        </h3>
        <a-divider/>
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="categories">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card
                :title="item.title"
                :key="index"
                class="information-card"
                :headStyle="{
              backgroundColor: '#fa4c5f',
              color: '#fff',
            }"
            >
              <a-list
                  class="demo-loadmore-list"
                  item-layout="horizontal"
                  :data-source="item.data"
              >
                <a-list-item slot="renderItem" slot-scope="">
                  <a-list-item-meta>
                    <div slot="title">Avg Pace</div>
                  </a-list-item-meta>
                  <div>
                    <b>08:05/km</b>
                  </div>
                </a-list-item>
              </a-list>

            </a-card>
          </a-list-item>
        </a-list>
      </div>


      <div class="activity-info">
        <DTPLineChart/>
      </div>

      <a-row>
        <a-col :span="16">
          <div>
            <h3>
              <b>
                Bản đồ
              </b>
            </h3>
            <a-divider />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476859.2078392469!2d105.37248923502332!3d20.97408735882671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135008e13800a29%3A0x2987e416210b90d!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2shk!4v1618286789272!5m2!1svi!2shk" style="border:0; width: 100%; height: 55vh" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </a-col>

      </a-row>
      <br><br>
      <div class="activity-info">
        <h3>
          <b>
            Hoạt động gần đây
          </b>
        </h3>
        <a-divider/>
        <div class="list-activity">
          <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <ActivityComponent :index="index" :item="item"/>
            </a-list-item>
          </a-list>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import DTPComponent from "../DTPComponent";
import DTPLineChart from "./DTPLineChart";
import ActivityComponent from "../ActivityComponent";

const categories = [
  {
    title: 'Timing',
    data: [{}, {}]
  },
  {
    title: 'Heart Rate',
    data: [{}, {}, {}]
  },
  {
    title: 'Elevation',
    data: [{}]
  },
  {
    title: 'Cadence',
    data: []
  },
];
export default {
  name: "ActivityPage",
  components: {ActivityComponent, DTPLineChart, DTPComponent},
  data() {
    return {
      categories,

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
      joinedChallenges: [],

    }
  }
}
</script>

<style scoped>
#detail-activity-wrapper {
  padding: 40px 100px;
  height: 100%;
}

.activity-info {
  margin-bottom: 50px;
}

.activity-banner {
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

.activity-banner.banner1 {
  background-image: url("https://www.polar.com/blog/wp-content/uploads/2020/02/What-is-mindful-running-main.jpg");
}
.activity-banner.banner2 {
  background-image: url("https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blta6841a27bf715b11/5de0ba105cdb1a020dde4c76/Run_interval_head_cut.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496");
}
.activity-banner.banner3 {
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/runningbuildmuscle-1586550834.jpg?crop=1.00xw:0.730xh;0,0.180xh&resize=1200:*");
}
.activity-banner.banner4 {
  background-image: url("https://www.aura.asn.au/wp-content/uploads/2018/11/RunningFlow-image-1280x640.jpg");
}


</style>
