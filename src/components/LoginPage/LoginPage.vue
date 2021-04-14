<template>
  <div id="login-wrapper">
    <a-row>
      <a-col span="11">
        <center>
          <h2>Đăng nhập</h2>
        </center>
        <br>
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
                size="large"
                v-decorator="[
                  'email',
                  { rules: [{ required: true, message: 'Email không được bỏ trống!' }] },
        ]"
                placeholder="Email"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
                size="large"
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Mật khẩu không được bỏ trống!' }] },
                ]"
                type="password"
                placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-row type="flex" justify="space-between" align="middle">
            <a-col>
              <a class="login-form-forgot" href="" style="color: #ED9B33">
                Quên mật khẩu
              </a>
            </a-col>
            <a-col>
              <button class="btn btn-login" type="submit">
                Login
              </button>
            </a-col>
          </a-row>
        </a-form>

        <br><br>
        <a-divider />

        <div>
          <center>
            <h3>Hoặc đăng nhập bằng</h3>
          </center>
          <br><br>
          <a-row type="flex" justify="center" align="middle">
            <a-col span="11">
              <button class="btn btn-login-facebook"><a-icon type="facebook" /> Facebook</button>
            </a-col>
            <a-col span="11" offset="2">
              <button class="btn btn-login-google"><a-icon type="google" /> Google</button>
            </a-col>
          </a-row>
        </div>
        <br>
        <a-divider />
        <center>
          Nếu chưa có tài khoản ? <span><a href="">Đăng ký tài khoản</a></span>
        </center>
      </a-col>
      <a-col span="11" offset="2">
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
name: "LoginPage",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
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
  #login-wrapper {
    padding: 100px 100px;

  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }

  .btn {
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-login {
    padding: 13px 39px;
    font-size: 16px;
    background-color: #ED9B33;
  }

  .btn-login:hover {
    background-color: #ffbf00;
  }

  .btn-login-facebook,
  .btn-login-google {
    padding: 13px 0;
    width: 100%;
  }

  .btn-login-facebook {
    background-color: #385998;

  }

  .btn-login-facebook:hover {
    background-color: #5072b1;
  }

  .btn-login-google {
    background-color: #EA4335;
  }

  .btn-login-google:hover {
    background-color: #e75b4f;
  }



</style>
