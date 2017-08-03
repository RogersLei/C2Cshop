<style scoped>
  @media all and (min-width: 768px) {
    .margin{
      margin-left: 30%;
    }
  }

</style>
<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Logo</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="navbar-form navbar-left" v-if="isNotLogin">
            <button class="btn btn-danger" @click="admin">管理员</button>
          </div>
          <form class="navbar-form navbar-left margin">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </form>
          <div class="navbar-form navbar-right" v-if="isNotLogin">
            <button class="btn btn-primary" @click="login" >登录</button>
            <button class="btn btn-primary" @click="register">注册</button>
          </div>
          <div class="navbar-form navbar-right" v-else>
            <img src="" alt="">
            <span>当前用户为{{name}}</span>
            <span>会员等级为{{level}}</span>
            <button class="btn btn-primary" @click="">退出</button>
          </div>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <login v-if="showLogin" :isNotLogin="isNotLogin"
      @changeStatus="changeStatus"></login>
    <register v-if="showRegister"></register>
    <admin v-if="showAdmin"></admin>
  </div>
</template>
<script>
  import login from './login.vue'
  import register from './register.vue'
  import admin from './admin.vue'
  export default{
    data: function () {
      return {
        showAdmin: false,
        showLogin: false,
        showRegister: false,
        isNotLogin: true,
        name: '张三',
        level:3
      }
    },
    components:{
      login,
      register,
      admin
    },
    methods:{
      'login':function () {
        this.showLogin = true
        setTimeout(function () {
          $('#login').modal({backdrop: 'static'});
        },0)
      },
      'register':function () {
        this.showRegister = true
        setTimeout(function () {
          $('#register').modal({backdrop: 'static'});
        },0)
      },
      'admin':function () {
        this.showAdmin = true
        setTimeout(function () {
          $('#admin').modal({backdrop: 'static'});
        },0)
      },
      'changeStatus': function (msg) {
        // console.log(msg)
        this.isNotLogin = msg
      }
    }
  }
</script>
