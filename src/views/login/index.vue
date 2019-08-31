<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单组件 el-form表单容器 -->

      <!-- 数据校验 首先要给el-form 一个model属性 表示数据对象 -->
      <!-- ref 是获取dom元素 -->

      <!-- 表单项  prop绑定需要校验的字段名 但是只写mobile -->

      <!-- 放组件内容 -->
      <!-- 绑定手机号 -->
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 400px;
    height: 350px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
