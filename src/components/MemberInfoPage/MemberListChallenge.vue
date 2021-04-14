<template>
  <div>
    <div>
      <h2>Danh sách challenge</h2>
      <a-divider />
      <ChallengeTableComponent :columns="columns" :dataSource="dataSource"/>
    </div>


  </div>
</template>

<script>
import ChallengeTableComponent from "./ChallengeTableComponent";
const columns = [
  {
    dataIndex: 'stt',
    key: 'stt',
    title: '#'
  },
  {
    title: 'Challenge',
    dataIndex: 'challenge_name',
    key: 'challenge_name',
  },
  {
    title: 'Ngày bắt đầu',
    dataIndex: 'date_start',
    key: 'date_start',
  },
  {
    title: 'Ngày kết thúc',
    key: 'date_end',
    dataIndex: 'date_end',
  },
  {
    title: 'Kết thúc',
    key: 'isEnd',
    dataIndex: 'isEnd'
  },
];

const dataSource = [];

export default {
  name: "MemberListChallenge",
  components: {ChallengeTableComponent},
  data () {
    return {
      columns,
      dataSource
    }
  }
}
</script>

<style scoped>

</style>
