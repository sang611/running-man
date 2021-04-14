<template>
  <div>
    <h2>Thông tin cá nhân</h2>
    <a-divider />
    <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
      <a-form-model-item ref="email" label="Email" prop="email">
        <a-input
            v-model="form.email"
            @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item label="Ảnh đại diện">
        <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :before-upload="beforeUpload"
            @change="onChangeLogo"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon type="plus" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item ref="name" label="Họ tên" prop="name">
        <a-input
            v-model="form.name"
            @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item label="Giới tính" prop="gender">
        <a-radio-group v-model="form.gender">
          <a-radio value="1">
            Nam
          </a-radio>
          <a-radio value="2">
            Nữ
          </a-radio>
        </a-radio-group>
      </a-form-model-item>

      <a-form-model-item label="Ngày sinh" required prop="birthday">
        <a-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="Chọn ngày sinh"
        />
      </a-form-model-item>

      <a-form-model-item label="Số điện thoại" prop="phone">
        <a-input
            v-model="form.phone"
            @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-model-item label="CMND/CCCD/HC" prop="cmnd">
        <a-input
            v-model="form.cmnd"
            @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
        />
      </a-form-model-item>


      <a-form-model-item label="Địa chỉ" prop="address">
        <a-input v-model="form.address" type="textarea" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="primary-button">
          Cập nhật
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>

</template>

<script>
export default {
name: "MemberInfoPrivate",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        email: '',
        name: '',
        gender: undefined,
        birthday: undefined,
        phone: undefined,
        cmnd: '',
        address: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        address: [{ required: true, message: 'Vui lòng để lại địa chỉ', trigger: 'blur' }],
        birthday: [{ required: true, message: 'Vui lòng chọn ngày sinh', trigger: 'blur' }],

        phone: [
          { required: true, message: 'Vui lòng để lại số điện thoại', trigger: 'blur' },
        ],
        cmnd: [{ required: true, message: 'Vui lòng nhập số CMND/CCCD', trigger: 'blur' }],
        gender: [{ required: true, message: 'Vui lòng cho biết giới tính', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
          console.log(this.form)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    onChangeLogo(logo) {
      console.log(logo)
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return false;
    },
  },
}
</script>

<style scoped>

</style>
