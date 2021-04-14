<template>
  <center>
    <a-space size="large">
      <a-card hoverable class="card-dpt">
        <i class="fas fa-map-marked-alt dpt-icon primary-color"></i>
        <a-card-meta>
          <template slot="description" >
            <h3 class="primary-color">
              <b>748.66 KM</b>
            </h3>
            Tổng số KM hoàn thành
          </template>
        </a-card-meta>
      </a-card>
      <a-card hoverable class="card-dpt">
        <i class="fas fa-rocket dpt-icon primary-color"></i>
        <a-card-meta>
          <template slot="description" >
            <h3 class="primary-color">
              <b>748.66 KM</b>
            </h3>
            Tổng số KM hoàn thành
          </template>
        </a-card-meta>
      </a-card>
      <a-card hoverable class="card-dpt">
        <i class="fas fa-clock dpt-icon primary-color"></i>
        <a-card-meta>
          <template slot="description" >
            <h3 class="primary-color">
              <b>748.66 KM</b>
            </h3>
            Tổng số KM hoàn thành
          </template>
        </a-card-meta>
      </a-card>

    </a-space>
  </center>
</template>

<script>
export default {
name: "DTPComponent"
}
</script>

<style scoped>
.dpt-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-dpt {
  transition: .5s;
  width: 150px;
  height: 150px;
  border: solid 1px #ED9B33;
  border-radius: 5px;
}

</style>
