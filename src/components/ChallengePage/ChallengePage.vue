<template>
  <div>
    <div class="challenge-banner">
      <p class="challenge-banner-header">KHÁM PHÁ GIỚI HẠN BẢN THÂN</p>

      <a-button
          shape="round"
          size="large"
          class="create-challenge-header-btn"
          @click="goToChallengePage">
        Tạo challenge
      </a-button>

    </div>

<!--    <center>
      <h1>
        TẠO CHALLENGE TRONG 30 GIÂY
      </h1>
      <ul id="category-sport">
        <li class="cate active">RUN</li>
        <li class="cate">SWIM</li>
        <li class="cate">RIDE</li>
        <li class="cate">TRIATHLON</li>
      </ul>
      <br>

      <a-space size="large" style="margin-bottom: 40px">
        <a-card hoverable style="width: 240px" class="child-cate">
          <i class="fas fa-running"></i>
          <h1>
            <b>WALK</b>
          </h1>
          <a-button class="create-challenge-btn" shape="round" size="large">Tạo challenge</a-button>
        </a-card>
        <a-card hoverable style="width: 240px" class="child-cate">
          <i class="fas fa-walking"></i>
          <h1>
            <b>RUN</b>
          </h1>
          <a-button class="create-challenge-btn" shape="round" size="large">Tạo challenge</a-button>
        </a-card>
        <a-card hoverable style="width: 240px" class="child-cate">
          <i class="fas fa-running"></i>
          <h1>
            <b>TRAIL</b>
          </h1>
          <a-button class="create-challenge-btn" shape="round" size="large">Tạo challenge</a-button>
        </a-card>
      </a-space>
    </center>-->

      <a-row style="padding: 0 100px; margin-bottom: 40px;">
        <a-col span="12">
          <a-input-search placeholder="Tìm kiếm" size="large" @search="onSearchChallenge"/>
        </a-col>
      </a-row>


    <div>
      <center>
        <h1>
          CHALLENGE ĐANG DIỄN RA
        </h1>
      </center>

      <div id="happening-challenges" class="challenges">
        <a-list :grid="{ gutter: 30, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }" :data-source="challenges">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <ChallengeCard :item="item" :index="index" :isHappening="true"/>
          </a-list-item>
        </a-list>
      </div>
    </div>
    <br>
    <div>
      <h1 style="color: #ED9B33; text-align: center;">
        CHALLENGE ĐÃ KẾT THÚC
      </h1>

      <div id="ended-challenges" class="challenges">
        <a-list :grid="{ gutter: 30, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }" :data-source="endedChallenge">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <ChallengeCard :item="item" :index="index" :isHappening="false"/>
          </a-list-item>
        </a-list>
      </div>
    </div>

  </div>
</template>

<script>
import ChallengeCard from "./ChallengeCard";

export default {
  name: "ChallengePage",
  components: {ChallengeCard},
  data() {
    return {
      endedChallenge: [{}, {}, {}, {}, {}, {}, {}],
    }
  },

  methods: {
    goToChallengePage() {
      this.$router.push('/member/info/create-challenge')
    },

    onSearchChallenge(value) {
      console.log(value)
    }
  },

  mounted() {
    this.$store.dispatch('getChallenges')
  },

  computed: {
    challenges() {
      return this.$store.state.challenge.challenges;
    }
  }

}
</script>

<style scoped>

h1 {
  color: #ED9B33;
}

ul li {
  list-style-type: none;
}

.challenge-banner {
  background-image: url("https://challenge.vn/Content/banner.jpg?v=1.0.1");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.challenge-banner .challenge-banner-header {
  color: #fff;
  font-size: 32px;
  font-weight: 300;
}

.challenge-banner .create-challenge-header-btn {
  background: #ED9B33;
  color: #fff;
  border: none;
  font-size: 18px;
  transition: .6s;
  padding: 0 25px;
}

.challenge-banner .create-challenge-header-btn:hover {
  background-color: #ffbf00;
  color: #fff;
}

#category-sport {
  display: inline-flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

#category-sport .cate {
  padding: 15px 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #7f87aa;
}

#category-sport .cate:hover {
  background-color: #ED9B33;
  color: #fff;
  cursor: pointer;
}

.child-cate i {
  font-weight: 900;
  font-size: 5rem;
  margin-bottom: 50px;
}

.challenges {
  margin-top: 40px;
  padding-left: 100px;
  padding-right: 100px;
}


.create-challenge-btn {
  background-color: #1c768f;
  color: #fff;
  margin-top: 50px;
  font-size: 13px;
  border: none;
  outline: none;
  transition: .5s;
}


</style>
