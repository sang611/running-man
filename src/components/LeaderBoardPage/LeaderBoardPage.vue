<template>
  <div style="padding: 24px">
    <a-space align="center">
      <b>
        <div style="font-size: 40px">Bảng xếp hạng <span style="color: #7f87aa">của</span></div>
      </b>

      <a-cascader :options="rankByDateOptions" class="date-filter" :default-value="['all']"/>
    </a-space>

    <br><br>
    <a-row>
      <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <a-list :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }" :data-source="dataThreeTop">
          <a-list-item slot="renderItem">
            <a-card
                hoverable
                style="background: #F0F2F5;"
            >
              <center>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="64"/>
                <b>
                  <h3>
                    Vu Ngoc Sang
                  </h3>
                </b>
                <p>Computing</p>
              </center>

              <template>
                <a-row :gutter="16">
<!--                  <a-col :span="12">
                    <a-statistic
                        title="Feedback"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >
                      <template #prefix>
                        <a-icon type="arrow-up" />
                      </template>
                    </a-statistic>
                  </a-col>
                  <a-col :span="12">
                    <a-statistic
                        title="Idle"
                        :value="9.3"
                        :precision="2"
                        suffix="%"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >
                      <template #prefix>
                        <a-icon type="arrow-down" />
                      </template>
                    </a-statistic>
                  </a-col>-->
                  <RunnerLineChart :height="160" :showXAxisLabel="true"/>
                </a-row>
              </template>
            </a-card>
          </a-list-item>
        </a-list>

        <ListRunner />

      </a-col>
      <a-col  :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <ListChallenge />
      </a-col>
    </a-row>

  </div>
</template>

<script>
  import ListRunner from "@/components/LeaderBoardPage/ListRunner";
  import ListChallenge from "@/components/LeaderBoardPage/ListChallenge";
  import RunnerLineChart from "./RunnerLineChart";
  const dataThreeTop = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },

  ];

  const rankByDateOptions = [
    {
      value: 'all',
      label: 'Tất cả',
    },
    {
      value: 'thisWeek',
      label: 'Tuần này',
    },
    {
      value: 'lastWeek',
      label: 'Tuần trước',
    },
    {
      value: 'older',
      label: 'Cũ hơn',
      children: [
        {
          value: 'week1',
          label: 'Tuần 1',
        },
        {
          value: 'week2',
          label: 'Tuần 2',
        },
        {
          value: 'week3',
          label: 'Tuần 3',
        },
      ],
    },
  ];
  export default {
    name: "LeaderBoardPage",
    components: {RunnerLineChart, ListChallenge, ListRunner},
    data() {
      return {
        deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
        dataThreeTop,
        rankByDateOptions
      };
    },
    methods: {
      onFinish() {
        console.log('finished!');
      },
    },
  }
</script>

<style scoped>
  .date-filter {
    width: 150px !important;
    border-radius: 50px !important;
  }
</style>
