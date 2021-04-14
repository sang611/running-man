<template>
  <div style="margin-top: 40px">

    <div id="rank-private">
        <a-space align="center">
          <h1 class="rank-title">Xếp hạng cá nhân</h1>

        </a-space>
      <br><br>
      <a-row type="flex" justify="space-between" style="margin-bottom: 40px">
        <a-space>
          <a-select default-value="distance" style="width: 200px">
            <a-select-option value="distance">
              Xếp hạng quãng đường
            </a-select-option>
            <a-select-option value="time">
              Xếp hạng thời gian
            </a-select-option>
            <a-select-option value="pace">
              Xếp hạng tốc độ
            </a-select-option>
          </a-select>
          <a-select default-value="distance" style="width: 150px">
            <a-select-option value="distance">
              Tất cả
            </a-select-option>
            <a-select-option value="time">
              Nam
            </a-select-option>
            <a-select-option value="pace">
              Nữ
            </a-select-option>
          </a-select>
          <a-button @click="showModal"> Hạng mục
            <a-icon type="down"/>
          </a-button>
        </a-space>

        <a-input-search placeholder="Tìm kiếm theo tên. mã nhân viên, ..." style="width: 30%"  />

      </a-row>

      <a-modal v-model="visibleModalCategories" title="Chọn hạng mục: Quãng đường" @ok="handleOk">
        <a-list
            class="demo-loadmore-list"
            item-layout="horizontal"
            :data-source="dataCategories"
        >
          <a-list-item slot="renderItem" slot-scope="item">

            <a-list-item-meta
            >
              <a slot="title" style="color: #1c768f">{{ item.name.last }}</a>
            </a-list-item-meta>
            <a-space size="large">
              <div style="color: #ED9B33">Hoàn thành</div>
              <div>20 km</div>
              <input type="radio" name="cate"/>
            </a-space>
          </a-list-item>
        </a-list>
      </a-modal>
      <br>
      <TableRankMission :type="1"/>
    </div>
    <br><br>
    <div id="rank-team">

      <h1 class="rank-title">Xếp hạng nhóm</h1>
      <br>
      <a-select default-value="distance" style="width: 150px">
        <a-select-option value="distance">
          Quãng đường
        </a-select-option>
        <a-select-option value="time">
          Thời gian
        </a-select-option>
        <a-select-option value="pace">
          Tốc độ
        </a-select-option>
      </a-select>
      <br><br>
      <TableRankMission :type="2"/>
    </div>


  </div>

</template>

<script>
import reqwest from 'reqwest';

import TableRankMission from "./TableRankMission";



export default {
  name: "RankMission",
  components: {TableRankMission, },

  data: () => ({
    visibleModalCategories: false,
    dataCategories: [],
  }),

  mounted() {
    this.getRankCategories(res => {
      this.dataCategories = res.results;
    });
  },

  methods: {
    showModal() {
      this.visibleModalCategories = true;
    },

    handleOk(e) {
      console.log(e);
      this.visibleModalCategories = false;
    },

    getRankCategories(callback) {
      reqwest({
        url: 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo',
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },


  },
}
</script>

<style scoped>
  .rank-title {
    margin: 0;
    color: #ED9B33;
  }
</style>
