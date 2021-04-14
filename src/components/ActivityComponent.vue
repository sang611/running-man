<template>
  <a-card :key="this.index" :bordered="false">

    <a-card-meta title="Vũ Ngọc Sáng" description="24/03/2021 06:18">
      <a-avatar
          slot="avatar"
          :src="this.item.url"
          :size="64"
      />
    </a-card-meta>
    <div class="primary-color">
      <b>
        <i class="fas fa-running"></i>&nbsp;Morning Run
      </b>
    </div>

    <a-divider/>

    <div class="info-activity">
      <a-row>

        <a-col span="16">
          <a-row type="flex" justify="space-between">
            <center>
              <div class="info-number">18.1km</div>
              <p class="info-title">Distance</p>
            </center>

            <center>
              <div class="info-number">18.1km</div>
              <p class="info-title">Distance</p>
            </center>
            <center>
              <div class="info-number">18.1km</div>
              <p class="info-title">Distance</p>
            </center>
            <center>
              <div class="info-number">18.1km</div>
              <p class="info-title">Distance</p>
            </center>
          </a-row>
        </a-col>

      </a-row>

    </div>
    <router-link to="/activity/1">
      <img
          src="https://challenge.vn/Upload/Map/20210323/f9850894a8249276bc30a28ff4880c02.png"
          alt="No image"
          width="100%"
      >
    </router-link>

  </a-card>
</template>

<script>
  export default {
  name: "ActivityComponent",
    props: ['index', 'item']
}
</script>

<style scoped>
.info-activity {
  margin: 10px 0 10px 0;
}

.info-number {
  font-weight: 600;
  color: #1c768f;
  font-size: 18px;
}

.info-title {
  color: #7f87aa;
  font-weight: inherit;
}
</style>
