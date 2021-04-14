<template>
  <div>

    <a-row>
      <a-col span="11" offset="1">
        <br><br>
        <center>
          <h2>Đăng ký</h2>
        </center>
        <br>
        <a-form
            id="components-form-demo-validate-other"
            v-bind="formItemLayout"
            :form="form"
            @submit="handleSubmit"
        >
          <a-form-item label="Họ và tên">
            <a-input
                v-decorator="['input-fullname',
                {rules: [{required: true, message: 'Họ tên không được để trống' }]}
                ]"

                size="large"/>
          </a-form-item>

          <a-form-item label="Giới tính">
            <a-radio-group v-decorator="['radio-group', {rules: [{required: true, message: 'Chọn giới tính' }]}]">
              <a-radio value="1">
                Nam
              </a-radio>
              <a-radio value="=2">
                Nữ
              </a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item
              label="Ngày sinh"
          >
            <a-date-picker v-decorator="['date-picker', {rules: [{ required: true, message: 'Chọn ngày sinh' }]}]" />
          </a-form-item>

          <a-form-item label="Điện thoại">
            <a-input v-decorator="['input-phone']" size="large"/>
          </a-form-item>

          <a-form-item label="Chứng minh nhân dân">
            <a-input v-decorator="['input-identical', {rules: [{ required: true, message: 'Nhập số CMND/CCCD' }]}]" size="large"/>
          </a-form-item>

          <a-form-item label="Địa chỉ">
            <a-input v-decorator="['input-address']" size="large"/>
          </a-form-item>

          <a-form-item label="Email">
            <a-input v-decorator="['input-email', {rules: [{ required: true, message: 'Nhập email' }]}]" size="large"/>
          </a-form-item>

          <a-form-item label="Mật khẩu">
            <a-input
                size="large"
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Mật khẩu không được bỏ trống!' }] },
                ]"
                type="password"

            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>

          <a-form-item label="Nhập lại mật khẩu">
            <a-input
                size="large"
                v-decorator="[
                  're-password',
                  { rules: [{ required: true, message: 'Nhập lại mật khẩu!' }] },
                ]"
                type="password"

            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <br>
          <a-form-item :wrapper-col="{ span: 18, offset: 6 }">
            <a-button type="primary" html-type="submit" block>
              Đăng ký
            </a-button>
          </a-form-item>

        </a-form>

        <br><br>


      </a-col>
      <a-col span="11" offset="1">
        <img
            src="https://st4.depositphotos.com/30562326/38195/v/950/depositphotos_381954412-stock-illustration-fitness-blog-and-workout-app.jpg"
            alt="No img"
            width="100%"
            height="100%"
        >
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
name: "SignupPage",
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
}
</script>

<style scoped>

</style>
