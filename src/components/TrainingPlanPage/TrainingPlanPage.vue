<template>
  <div id="plan-wrapper">
    <center>
      <h1 class="plan-header">TRAINING PLAN 5KM</h1>
    </center>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card style="margin-bottom: 30px;" :key="index">
          <img
              slot="cover"
              alt="example"
              src="https://challenge.vn/Upload/2020/4/22/7-ngay-chay-hm-lien-tiep-637231478833188802.png"
          />
          <a href="#" class="plan-title">7 ngày chạy HM liên tiếp</a>
          <a-divider />
          <a-card-meta >
            <template slot="description">
              <a-row type="flex" justify="space-between">
                <a-space>
                  <a-date-picker
                      :default-value="moment('01/01/2021', dateFormatList[0])"
                      :format="dateFormatList"
                  />
                  <router-link :to="{ name: 'DetailMission', params: { id: item.id }}">
                    <a-button class="join-btn">
                      Tham gia
                    </a-button>
                  </router-link>

                </a-space>
                <a-space align="center">
                  <a-icon type="user" />10
                </a-space>

              </a-row>

            </template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import moment from 'moment';
const data = [
  {
    id: 'Title 1',
  },
  {
    id: 'Title 2',
  },
  {
    id: 'Title 3',
  },
  {
    id: 'Title 4',
  },
  {
    id: 'Title 5',
  },
  {
    id: 'Title 6',
  },
];
export default {
  name: "TrainingPlanPage",
  data() {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
      data
    }
  },
  methods: {
    moment,
  }

}
</script>

<style scoped>
  #plan-wrapper {
    padding: 40px 150px;
  }

  .plan-header {
    color: #ED9B33;
    margin-bottom: 40px;
  }

  .plan-title {
    font-size: 18px;
    color: black;
    font-weight: 500;
    margin-bottom: 30px;
  }
</style>
