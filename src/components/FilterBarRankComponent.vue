<template>
  <a-row type="flex" justify="space-between" style="margin-bottom: 40px">
    <a-space>
      <a-select default-value="distance" style="width: 200px">
        <a-select-option value="distance">
          Xếp hạng quãng đường
        </a-select-option>
        <a-select-option value="time">
          Xếp hạng thời gian
        </a-select-option>
        <a-select-option value="pace">
          Xếp hạng tốc độ
        </a-select-option>
      </a-select>

      <a-select default-value="distance" style="width: 150px">
        <a-select-option value="distance">
          Tất cả
        </a-select-option>
        <a-select-option value="time">
          Nam
        </a-select-option>
        <a-select-option value="pace">
          Nữ
        </a-select-option>
      </a-select>

    </a-space>


    <a-input-search placeholder="Tìm kiếm theo tên. mã nhân viên, ..." style="width: 30%"  />

  </a-row>
</template>

<script>
export default {
  name: "FilterBarRankComponent",

}
</script>

<style scoped>
.gender-filter label {

  color: orange;
  width: 100px;
  border: solid 1px darkorange;
  border-radius: 50px;
  text-align: center;
}

.gender-filter label:nth-child(2) {
  margin: 0 20px;
}

/*
.gender-filter .ant-radio-button-wrapper-checked,
.gender-filter .ant-radio-button-wrapper-checked:hover{
  color: darkorange;
  background: #ecc5ac;
  font-weight: bold;
  border: none;
  outline: none;
  box-shadow: none;
}
*/

.gender-filter label::before {
  display: none;
}
</style>
