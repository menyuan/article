<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand" href="#">M & Y</a>
          </div>
          <div>
              <ul class="nav navbar-nav navbar-right" v-for="(item,index) in navs" @click="navTabs(index)">
                  <li v-if="index==3" class="active"><router-link :to="{path:item.href}">{{item.title}}</router-link></li>
                  <li v-else><router-link :to="{path:item.href}">{{item.title}}</router-link></li>
              </ul>
          </div>
          <ul class="nav navbar-nav navbar-right login">
              <li  v-if="userName==''"><span><a href="#" @click="login">登陆</a></span></li>
              <li v-else><span>{{userName}} | <a href="#" @click="logout">注销</a></span></li>
          </ul>
        </div>
    </nav>
    <!--遮罩层-->
    <div v-bind:class="{cover:isCover}"></div>
    <!--遮罩层 ending-->
    <!--login starting-->
      <div v-bind:class="{login_form:isLogin,hide_form:isHide}" id="login_form">
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
    <!--login ending-->
    <div class="navbar navbar-default" role="navigation" v-if="ok">
        <div class="container">
          <div class="row">
            <div class="col-md-6 columnP">
              <router-link :to="{path:isPath}" v-bind:class="{active:isActive}" @click.native="bowen">博文</router-link>
            </div>
            <div class="col-md-6 columnZ">
              <router-link to="/qzhuanlan" v-bind:class="{active:sureActive}" @click.native="zhuanlan">专栏</router-link>
            </div>
          </div>
        </div>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navs:[
        {
          title:'测试',
          href:'/test',
        },
        {
          title:'前端',
          href:'/qianduan',
        },
        {
          title:'数据库',
          href:'/sql',
        },
        {
          title:'首页',
          href:'/',
        }
      ],
      ok:false,
      isActive:true,
      sureActive:false,
      //博文路径切换
      isPath:'',
      isCover:false,
      isLogin:false,
      isHide:true,
      userName:'',
      data:[],
      loginModel:{
        name:'',
        pwd:''
      }
    }
  },
  ready:function(){
    this.userName=sessionStorage.getItem('userName');
  },
  methods:{
    navTabs(index){
      $(".navbar-right li").removeClass('active');
      $(".navbar-right li").eq(index).addClass('active');
      if(index==3){
        this.ok=false;
      }else{
        this.ok=true;
        this.isActive=true;
        this.sureActive=false;
      }
      this.isPath=this.navs[index].href;

    },
    zhuanlan(){
      this.sureActive=true;
      this.isActive=false;
    },
    bowen(){
      this.sureActive=false;
      this.isActive=true;
    },
    login(){
      //获取页面的可视区域高度和宽度
      var wHeight=document.documentElement.clientHeight || document.body.clientHeight;
      var wWidth=document.documentElement.clientWidth || document.body.clientWidth;
      $('#login_form').css({
        'top':(wHeight/2-150)+'px',
        'left':(wWidth/2-200)+'px'
      });
      this.isCover=true;
      this.isLogin=true;
      this.isHide=false;
    },
    logout(){
      var _self=this;
      this.userName='';
      this.loginModel.name='';
      this.loginModel.pwd='';
      //清楚cookie
      sessionStorage.removeItem('userName');
     // sessionStorage.removeItem('accessToken');
    },
    handleLogin(){
      var _self=this;
      $.ajax({
        type:'POST',
        url:'/api/user',
        dataType:'json',
        success:function(res){
          var flag=1;
          _self.data=res.users;
          for(var i=0;i<res.users.length;i++){
            if(_self.loginModel.name==res.users[i].username&&_self.loginModel.pwd==res.users[i].password){
              _self.loginModel.name=res.users[i].username;
              _self.userName=res.users[i].username;
              //sessionStorage.setItem('accessToken',data.access_token);
              sessionStorage.setItem('userName',_self.loginModel.name);
              _self.isCover=false;
              _self.isLogin=false;
              _self.isHide=true;
              flag=0;
              break;
            }
          }
        }
      })
    }
  }
}
</script>

<style>
body{
  font-family:Helvetica,sans-serif;
  background-color:#eee;
}
li{
  padding:0 15px;
} 
.navbar-default{
  padding:0 170px;
  background-color:#fff;
  font-size:18px;
}
.row{
  font-size:20px;
  text-align:center;
}
.row a{
  display:block;
  color:#000;
  text-decoration:none;
  padding:12px 5px;
}
.row a.active{
  border-bottom:2px solid #Be0000;
}
.hide_form{
  display:none;
}
ul.login{
  display:inline-block;
  position:absolute;
  right:40px;
  top:12px;
  display:block;
}
.login a{
  color:#000;
  font-size:16px;
}
.login_form{
  position:absolute;
  z-index:99999;
  width:400px;
  background:#fff;
  padding:30px 25px;
}
.cover{
  background-color:#ccc;
  z-index:9999;
  opacity:0.7;
  filter:alpha(opacity=70);
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
</style>
