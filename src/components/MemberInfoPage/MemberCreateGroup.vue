<template>
  <div>
    <h2>Tạo nhóm</h2>
    <a-divider />
    <a-row>
      <a-col :span="18" :offset="3">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="Logo">
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
          <a-form-model-item label="Tên nhóm">
            <a-input v-model="form.group_name" />
          </a-form-model-item>
          <a-form-model-item label="Mô tả">
            <a-textarea v-model="form.description"/>
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="handleSubmitForm" class="primary-button">
              Tạo nhóm
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
name: "MemberCreateGroup",
  data() {
    return {
      loading: false,
      imageUrl: '',

      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        group_name: "",
        description: "",
      },
      logo: null
    };
  },
  methods: {
    handleSubmitForm() {
      console.log(this.form, this.logo)
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

  }

}
</script>

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
