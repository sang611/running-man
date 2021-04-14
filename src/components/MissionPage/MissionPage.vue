<template>
  <div id="mission-wrapper">
    <center>
      <h1 id="mission-header">Nhiệm vụ</h1>
    </center>

    <a-input-search
        placeholder="Tìm kiếm nhiệm vụ"
        enter-button
        size="large"
    />
    <br><br><br>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <OneMissionCard :item="item" :index="index" />
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

import OneMissionCard from "./OneMissionCard";

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
  name: "MissionPage",
  components: {OneMissionCard},
  data: function () {
    return {
      data
    }
  },

}
</script>

<style scoped>
  h1 {
    font-size: 26px;
    font-weight: 700;
  }

  #mission-wrapper {
    padding: 0 200px;
  }

  #mission-header {
    color: #ED9B33;
    margin-bottom: 40px;
  }

</style>
