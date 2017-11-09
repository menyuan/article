<template>
	<div id="login">
		 <div class="container">
		 	<div class="row">
		 		<div class="col-md-2"></div>
		 		<div class="col-md-8">
		 			<form class="form-horizontal" role="form">
					  <div class="form-group">
					    <label for="username" class="col-sm-2 control-label">姓名</label>
					    <div class="col-sm-10">
					      <input type="text" v-model="loginModel.name" class="form-control" id="username" placeholder="请输入姓名">
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="password" class="col-sm-2 control-label">密码</label>
					    <div class="col-sm-10">
					      <input type="password" v-model="loginModel.pwd" class="form-control" id="password" placeholder="请输入密码">
					    </div>
					  </div>
					  <div class="form-group">
					    <div class="col-sm-offset-2 col-sm-10">
					      <button type="submit" class="btn btn-default" @click="handleLogin">登录</button>
					    </div>
					  </div>
					</form>
		 		</div>
		 		<div class="col-md-2"></div>
		 	</div>
		 </div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			loginModel:{
				name:'',
				pwd:''
			},
			userName:'',
			data:[]
		}
	},
	ready:function(){
		this.userName=sessionStorage.getItem('name');
		alert(this.userName);
	},
	methods:{
		handleLogin(){
			var _self = this   
            var flag=0;
            $.ajax({
                url: '/api/user',
                type: 'POST',
                dataType: 'json',
                success: function(res) {
                    _self.data=res.users;
                }
            });

            for(var i=0;i<this.data.length;i++){
                if(this.name==this.data[i].username && this.pwd==this.data[i].password){
                    this.$router.push('/');
                    _self.userName=this.data[i].username;
                    sessionStorage.setItem('accessToken', data.access_token)
                	sessionStorage.setItem('userName', this.userName)
                    break;
                }
            }
                     
                 
		}
	}
}
</script>
<style scoped>
#login{
	margin-top:50px;
}
.form-group{
	margin-bottom:30px;
}
</style>