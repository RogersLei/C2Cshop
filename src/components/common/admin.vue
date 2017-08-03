<style scoped>

</style>
<template>
  <div class="orderModal">
    <div class="modal" role="dialog" v-show="modelshow" id="admin">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">管理员登录</h4>
          </div>
          <div class="modal-body">
            <form action="" class="form-horizontal">
              <div class="form-group">
                <label for="username" class="col-md-2 control-label">用户名</label>
                <div class="col-md-10">
                  <input type="text" class="col-md-9" id="username" placeholder="用户名/手机号/邮箱">
                  <span class="col-md-3 glyphicon glyphicon-ok control-label"></span>
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-md-2 control-label">密码</label>
                <div class="col-md-10">
                  <input type="text" class="col-md-9" id="password" placeholder="请输入您注册时的密码">
                  <span class="col-md-3 glyphicon glyphicon-ok control-label"></span>
                </div>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-success" @click="submit">登陆</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
//  name: login
    props:{
      modelshow: {
        type: Boolean,
      }
    },
    methods:{
      submit:function () {
        console.log("333")  //验证发送请求
        location.href = "/?#/"
        location.reload()
      }
    }
  }
</script>
