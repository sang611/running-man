<template>
  <div>
    <br>
    <a-row>
      <a-col :span="10" :offset="7">
        <a-row align="middle" type="flex">
          <a-col :span="3">
            <span class="filter-label">Nhóm</span>
          </a-col>
          <a-col :span="18" :offset="1">
            <a-select size="large" default-value="a1" style="width: 100%; ">
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </a-col>

        </a-row>
        <br>
        <a-row align="middle" type="flex">
          <a-col :span="3">
            <span class="filter-label">Cá nhân</span>
          </a-col>
          <a-col :span="18" :offset="1">
            <a-select size="large" default-value="a1" style="width: 100%; ">
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </a-col>

        </a-row>
      </a-col>
    </a-row>

    <br>
    <a-list :grid="{ gutter: 20, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }" :data-source="activities">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <ActivityComponent :index="index" :item="item"/>
      </a-list-item>
    </a-list>


  </div>
</template>

<script>
import ActivityComponent from "../ActivityComponent";

export default {
  name: "ActivityMission",
  components: {ActivityComponent},
  data: function () {
    return {
      activities: [
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
  .filter-label {
    color: #646CB2;
  }
</style>
