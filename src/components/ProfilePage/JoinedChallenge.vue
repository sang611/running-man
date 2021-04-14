<template>
  <div>
    <h3><b>Các cuộc thi đã tham gia</b></h3>
    <a-divider/>
    <!--    <a-row>
          <a-col span="16" offset="4">
            <a-list
                class="demo-loadmore-list"
                item-layout="horizontal"
                :data-source="joinedChallenges"
                bordered
            >
              <a-list-item
                  class="challenge-item"
                  slot="renderItem"
                  slot-scope="item"
                  @click="$router.push('/challenge/1/information')"
              >
                <a-list-item-meta
                    description="261.7 km"
                >
                  <a slot="title" style="color: #1c768f">{{ item.name.last }}</a>

                </a-list-item-meta>

                <a-space size="large">
                  <div>08/01/2021 - 22/01/2021</div>
                </a-space>
              </a-list-item>
            </a-list>
          </a-col>
        </a-row>-->

    <a-list item-layout="vertical" size="large" :data-source="joinedChallenges">
      <a-list-item slot="renderItem" key="item.name.last" slot-scope="item">

        <img
            slot="extra"
            width="280"
            alt="logo"
            src="https://challenge.vn/Upload/2020/4/3/nhiem-vu-14-ngay-637214824867142745.png"
            style="cursor: pointer"
            @click="$router.push('/challenge/1/information')"
        />
        <a-list-item-meta description="261.7 km">

          <h3 slot="title">
            <router-link to="/challenge/1/information" style="color: orange">
              {{ `${item.name.first} ${item.name.last}` }}
            </router-link>
          </h3>

        </a-list-item-meta>
        <div>08/01/2021 - 22/01/2021</div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import reqwest from "reqwest";

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
export default {
  name: "JoinedChallenge",
  mounted() {
    this.getData(res => {
      this.joinedChallenges = res.results;
    })

  },
  data() {
    return {
      joinedChallenges: [],
    }
  },
  methods: {
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
  }
}
</script>

<style scoped>
.challenge-item {
  cursor: pointer;
  transition: .5s;
}


.challenge-item:hover {
  background: #ffc29d;
  padding: 10px 20px;
}
</style>
