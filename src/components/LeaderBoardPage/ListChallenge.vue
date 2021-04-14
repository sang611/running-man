<template>
  <div style="padding: 0 40px;">
    <center>
      <h2><b>Viettel Running news</b></h2>
    </center>
    <a-row>
      <a-card hoverable style="margin-bottom: 30px;" v-for="challenge in challenges" :key="challenge.key">
        <img
            slot="cover"
            alt="example"
            src="https://www.viettel-hanoi.vn/sites/default/files/pictures/Graphic-01-min_0.png"
        />
        <a-card-meta >
          <template slot="description">

            <h3>
              <b>Người Viettel có nền tảng chạy bộ ảo riêng</b>
            </h3>
            <div>
              <i class="fas fa-user"></i>&nbsp;<span>Lê Việt (Ban CNTT tập đoàn)</span>
            </div>
            <a-space size="large">
              <div>
                <i class="fas fa-clock"></i>&nbsp;<span>09:58</span>
              </div>
              <div>
                <i class="fas fa-clock"></i>&nbsp;<span>1903</span>
              </div>

            </a-space>
          </template>
        </a-card-meta>
      </a-card>
    </a-row>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: "ListChallenge",
    data() {
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
        dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
        challenges: [
          {
            key: 1
          },
          {
            key: 2
          },
          {
            key: 3
          }
        ]
      };
    },
    methods: {
      moment,
    }
  }
</script>

<style scoped>

</style>
