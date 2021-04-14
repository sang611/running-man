<template>
  <a-card style="margin-bottom: 30px;" :key="index">
    <img
        slot="cover"
        alt="example"
        src="https://challenge.vn/Upload/2020/4/22/7-ngay-chay-hm-lien-tiep-637231478833188802.png"
    />
    <router-link :to="{ name: 'DetailMission', params: { id: item.id }}">
      <a href="#" class="mission-title">7 ngày chạy HM liên tiếp</a>
    </router-link>

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
</template>

<script>
import moment from 'moment';
export default {
  name: "OneMissionCard",
  props: ['item', 'index'],
  data: function () {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
    }
  },
  methods: {
    moment,
  }
}
</script>

<style scoped>

.mission-title {
  font-size: 18px;
  color: black;
  font-weight: 500;
  margin-bottom: 30px;
}

.join-btn {
  background-color: #5578eb;
  color: #fff;
}
</style>
