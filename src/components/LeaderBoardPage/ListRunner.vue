<template>
  <div style="margin-top: 40px">
    <h2 style="color: #2b304c; letter-spacing: 1.5px" >Bảng xếp hạng</h2>

    <FilterBarRankComponent />

    <a-table
        :columns="columns"
        :row-key="record => record.login.uuid"
        :data-source="ranks"
        :pagination="pagination"
        :loading="loading"
        bordered
        @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">
          <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size="large"
              @click="$router.push('/profile/1')"
              style="cursor: pointer"
          />
        {{ name.first }} {{ name.last }}
      </template>

      <template slot="chart">
        <RunnerLineChart :height="100" :showXAxisLabel="true"/>
      </template>
    </a-table>

  </div>

</template>

<script>
import FilterBarRankComponent from "../FilterBarRankComponent";
import RunnerLineChart from "./RunnerLineChart";

const columns = [
  {
    title: 'Hạng',
    dataIndex: 'rank',
    width: '80px'
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'KM',
    dataIndex: 'distance',
    width: '10%',
  },
  {
    title: 'Tốc độ',
    dataIndex: 'pace',

  },
  {
    title: 'Thời gian',
    dataIndex: 'duration',
  },
  {
    title: '',
    width: '30%',
    scopedSlots: { customRender: 'chart' },
  },
];
  export default {
    name: "ListRunner",
    components: {RunnerLineChart, FilterBarRankComponent},
    data: () => ({
      columns,
    }),
    mounted() {
      this.fetch();
    },
    methods: {
      handleTableChange(pagination, filters, sorter) {
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;

        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },

      fetch(params = {}) {
        /*console.log('params:', params);
        this.loading = true;
        reqwest({
          url: 'https://randomuser.me/api',
          method: 'get',
          data: {
            results: 10,
            ...params,
          },
          type: 'json',
        }).then(data => {
          const pagination = { ...this.pagination };
          pagination.total = 200;
          this.loading = false;
          this.data = data.results.map((d, index) => {
            d.key=index;
            d.rank=index+1;
            return d;
          });
          this.pagination = pagination;
        })*/

        this.$store.dispatch("getRanks", {params})

      },
    },

    computed : {
      ranks() {
        return this.$store.state.leaderBoard.ranks
      },

      loading() {
        return this.$store.state.leaderBoard.loading
      },

      pagination() {
        return this.$store.state.leaderBoard.pagination
      },

    }
  }
</script>

<style scoped>

  table tr th {
    background: #2c3e50 !important;
    color: #fff !important;
  }
</style>
