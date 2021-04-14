<template>
  <div>
    <a-space :size="200">
      <a-space>
        <a-avatar
            src="https://challenge.vn/Thumbnail/ExtraLarge/Upload/Avartars/20210324/be368173e5dfed795f49ffdc0c457945.jpg"
            :size="72"/>
        <div>
          <h3><b>Passionate - Khát khao</b></h3>
          <a-space>
            <div>
              <i class="fas fa-trophy"></i><span> 5</span>
            </div>
          </a-space>
        </div>
      </a-space>


      <center>
        <a-space size="large">
          <a-card hoverable style="width: 150px; height: 150px">
            <i class="fas fa-user dpt-icon primary-color"></i>
            <a-card-meta>
              <template slot="description" >
                <h3 class="primary-color">
                  <b>5 người</b>
                </h3>
                Số thành viên
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable style="width: 150px; height: 150px">
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
          <a-card hoverable style="width: 150px; height: 150px">
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
          <a-card hoverable style="width: 150px; height: 150px">
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
    </a-space>
    <a-divider />
    <h2>Danh sách thành viên</h2>
    <TableRankMission :type="1" />
  </div>
</template>

<script>

import TableRankMission from "../DetailMissionPage/TableRankMission";
export default {
name: "DetailTeamPage",
  components: {TableRankMission}
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
</style>
