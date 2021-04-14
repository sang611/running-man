<template>
  <div>
    <a-table
        :columns="columns"
        :row-key="record => record.login.uuid"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        bordered
        @change="handleTableChange"
    >
      <template slot="name" slot-scope="name, record">
        <a-badge :count="record.rank">
          <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size="large"
              style="cursor: pointer"
              @click="goToProfile"
          />
        </a-badge>

        {{ name.first }} {{ name.last }} </template>
    </a-table>
  </div>
</template>

<script>
import reqwest from "reqwest";

const columnsPrivate = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
    width: '30%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Tổng quãng đường',
    dataIndex: 'distance',
    width: '20%',
  },
  {
    title: 'Tốc độ',
    dataIndex: 'pace',
  },
  {
    title: 'Tổng thời gian',
    dataIndex: 'duration',
  },

  {
    title: '24h %',
    dataIndex: '',
  },
  {
    title: '7d %',
    dataIndex: '',
  },
];

const columnsTeam = [
  {
    title: 'Tên nhóm',
    dataIndex: 'name',
    width: '30%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Số thành viên',
    dataIndex: 'members',
    width: '20%',
  },
  {
    title: 'Tổng quãng đường',
    dataIndex: 'distance',
    width: '20%',
  },
  {
    title: 'Tốc độ',
    dataIndex: 'pace',
  },
  {
    title: 'Tổng thời gian',
    dataIndex: 'duration',
  },
]
export default {
name: "TableRankMission",
  props: ['type'],
  data () {
    return {
      pagination: {},
      loading: false,
      columns: this.type == 1 ? columnsPrivate : columnsTeam
    }
  },
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
      console.log('params:', params);
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
      });
    },

    goToProfile() {
      if(this.type == 1) {
        this.$router.push('/profile/1')
      }
      else if (this.type == 2) {
        this.$router.push('/challenge/1/teams/234')
      }
    }
  }
}
</script>

<style scoped>

</style>
