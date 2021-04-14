<template>
<div>
  <a-card class="ended-challenges-child">
    <img
        slot="cover"
        alt="example"
        src="https://challenge.vn/Upload/2021/2/11/tet-2021-challenge-chay-cham-chi-so-gi-tang-can-637486588239392378.png"
    />
    <p>12/02/2021 - 15/02/2021</p>

    <a @click="goToDetailChallengePage">Tet 2021 Challenge - Chạy chăm chỉ sợ gì tăng cân</a>
    <a-divider />
    <a-row type="flex" justify="end" v-if="isHappening">
      <a-button class="join-btn" @click="goToDetailChallengePage">
        Tham gia
      </a-button>
    </a-row>
  </a-card>
</div>
</template>

<script>
export default {
  name: "ChallengeCard",
  props: ['isHappening', 'item'],
  methods: {
    goToDetailChallengePage() {
      this.$router.push('/challenge/1/information')
    }
  }
}
</script>

<style scoped>
.ended-challenges-child {
  border: none;
}
.ended-challenges-child a {
  font-size: 18px;
  color: black;
  font-weight: 500;
  margin-bottom: 30px;
}
.join-btn {
  background-color: #5578eb;
  color: #fff;
}
</style>
