<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <h1 style="font-family: 'Open Sans', sans-serif;">Đăng Nhập</h1>
    <a-form-item label="Email">
      <a-input
        v-decorator="[
          'userName',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập email!' },
              {
                pattern: /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i,
                message: 'Vui lòng nhập đúng định dạng email',
              },
            ],
          },
        ]"
        placeholder="Nhập email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>

    <a-form-item label="Password">
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập mật khẩu!' },
              {
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  'Vui lòng nhập password trên 8 ký tự, có số và có ký tự đặc biệt',
              },
            ],
          },
        ]"
        type="password"
        placeholder="Nhập mật khẩu"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      <a-button style="marginLeft: 30px" @click="handleReset">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          alert("Đăng nhập thành công!", values);
        }
      });
    },
    handleReset() {
      this.form.resetFields();
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login {
  width: 20%;
  margin-left: 590px;
  padding: 24px 14px 0px 14px;
  border: 1px solid #b3b3b3;
  border-radius: 8px;
  background: #f1f1f1;
}
label {
  margin-right: 170px;
}
</style>
