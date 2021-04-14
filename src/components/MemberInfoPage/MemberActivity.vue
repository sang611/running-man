<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Hoạt động">
        <div class="list-activity">
          <a-list :grid="{ gutter: 20, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <ActivityComponent :index="index" :item="item"/>
            </a-list-item>
          </a-list>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="DS cuộc thi tham gia" force-render>
        <a-row>
          <a-col span="16" offset="4">
            <a-list
                class="demo-loadmore-list"
                item-layout="horizontal"
                :data-source="joinedChallenges"
            >

              <a-list-item
                  class="challenge-item"
                  slot="renderItem"
                  slot-scope="item"
                  @click="$router.push('/mission/1')"
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
        </a-row>
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script>
import reqwest from "reqwest";
import ActivityComponent from "../ActivityComponent";
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
export default {
  name: "MemberActivity",
  components: {ActivityComponent},
  data: function () {
    return {
      data: [
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
      joinedChallenges: [],
    }
  },
  mounted() {
    this.getData(res => {
      this.joinedChallenges = res.results;
    })

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

</style>
