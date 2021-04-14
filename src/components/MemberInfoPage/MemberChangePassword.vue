<template>
    <div>
      <h2>Đổi mật khẩu</h2>
      <a-divider />
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item v-bind="formItemLayout" label="Mật khẩu cũ">
          <a-input
              v-decorator="[
          'password',
          {
            rules: [

              {
                required: true,
                message: 'Nhập mật khẩu cũ!',
              },
            ],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="Mật khẩu mới" has-feedback>
          <a-input
              v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Nhập mật khẩu mới!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
              type="password"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="Nhập lại mật khẩu mới" has-feedback>
          <a-input
              v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Nhập lại mật khẩu mới!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
              type="password"
              @blur="handleConfirmBlur"
          />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit" class="primary-button">
            Đổi mật khẩu
          </a-button>
        </a-form-item>
      </a-form>
    </div>
</template>

<script>
export default {
  name: "MemberChangePassword",
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 6 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 12 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 6,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], {force: true});
      }
      callback();
    },
  }
}
</script>

<style scoped>

</style>
