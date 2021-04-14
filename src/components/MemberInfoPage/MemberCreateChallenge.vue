<template>
  <div>
    <h2>Thông tin challenge: </h2>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item
          label="Tên challenge"
          :rules="{
                      required: true,
                      message: 'Tên challenge không được để trống',
                      trigger: 'blur',
                    }"
      >
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item
          label="Hiển thị"
          :rules="{
                      required: true,
                      message: 'Chọn một kiểu hiển thị',
                      trigger: 'blur',
                    }"
      >
        <a-select v-model="form.display" key="all">
          <a-select-option value="all">
            Mọi người đều nhìn thấy challenge này
          </a-select-option>
          <a-select-option value="both">
            Những người được share link và invite
          </a-select-option>
          <a-select-option value="only">
            Chỉ những người được invite
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item
          label="Thời gian diễn ra challenge"
          :rules="{
                      required: true,
                      message: 'Chọn thời gian diễn ra challenge',
                      trigger: 'blur',
                    }"
      >
        <a-range-picker
            v-model="form.dateDuration"
            show-time
            type="date"
            :placeholder="['Bắt đầu', 'Kết thúc']"
            style="width: 60%;"
        />
      </a-form-model-item>
      <a-form-model-item
          label="Thời gian mở/đóng đăng ký"
          :rules="{
                      required: true,
                      message: 'Chọn thời gin mở/đóng đăng ký',
                      trigger: 'blur',
                    }"
      >
        <a-range-picker
            v-model="form.dateOpenClose"
            show-time
            type="date"
            :placeholder="['Bắt đầu', 'Kết thúc']"
            style="width: 60%;"
        />
      </a-form-model-item>
      <a-form-model-item label="Mã code để tham gia">
        <a-input v-model="form.code" />
      </a-form-model-item>
      <a-form-model-item label="Thời gian chỉnh sửa thông tin đăng ký">
        <a-date-picker
            v-model="form.dateEditing"
            show-time
            type="date"
            placeholder="Chọn một ngày"
            style="width: 30%;"
        />
      </a-form-model-item>
      <a-form-model-item
          label="Xếp hạng (toàn thời gian)"
      >
        <a-select v-model="form.rank" key="1">
          <a-select-option value="1">
            Tổng số km (Cao -> Thấp)
          </a-select-option>
          <a-select-option value="2">
            Tổng thời gian (Moving time) (Cao -> Thấp)
          </a-select-option>
          <a-select-option value="3">
            Avg Pace
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item
          label="Thời gian đồng bộ các workout"
          :rules="{required: true}"
      >
        (UTC+07:00) Bangkok, Hanoi, Jakarta
      </a-form-model-item>
      <a-form-model-item
          label="Mô tả"
          :rules="{
                      required: true,
                      message: 'Mô tả về challenge để mọi người cùng biết',
                      trigger: 'blur',
                    }"
      >
        <a-textarea v-model="form.desc"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button @click="onSubmit" class="create-challenge-btn">
          Tạo challenge
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "MemberCreateChallenge",
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        display: '',
        dateDuration: '',
        dateOpenClose: '',
        dateEditing: '',
        code: '',
        rank: '',
        desc: ''
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  },
}
</script>

<style scoped>
  .create-challenge-btn {
    background: #ED9B33;
    color: #fff;
    border: none;
  }
</style>
