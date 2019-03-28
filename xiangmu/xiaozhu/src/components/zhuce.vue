<template>
	<div class="main">
		<img class="img-responsive tou" src="../assets/v1.gif">
		<form class="zhong">
			<div class="xian">
				<span class="xian1">输入账号</span>
				<input v-model="username" class="kuang" type="text" placeholder="请输入账号" />
			</div>
			<div class="xian">
				<span class="xian1">输入密码</span>
				<input v-model="password" class="kuang" type="text" placeholder="请输入密码" />
			</div>
			<div class="xian">
				<span class="xian1">再次输入密码</span>
				<input v-model="rePassword" class="kuang" type="text" placeholder="请再次输入密码" />
			</div>
			<div class="xian">
				<span class="xian1">输入邮箱</span>
				<input v-model="userMail" class="kuang" type="text" placeholder="请输入邮箱" />
			</div>	
			<div class="xian">
				<span class="xian1">输入手机号</span>
				<input v-model="userPhone" class="kuang" type="text" placeholder="请输入手机号" />
			</div>
			<div class="denglu">
				<button v-on:click=userRegister() class="zhudeng">注册</button>
				
			</div>
			</form>
			<div class="di">
				<router-link class="di1" to="login">直接登录</router-link>
			</div>
			<img class="img-responsive biao" src="../assets/v3.gif">
		</div>
	</div>
</template>

<script>
 export default {
    data(){
      return{
        username:'',
        password:'',
        userMail:'',
        userPhone:'',
        rePassword:'',
        
      }
    },
    methods:{
//      注册方法

    userRegister:function(event){
		if(this.password!=this.repassword){
			alert('两次密码不正确')
		}else{
			let sendDate={
				username:this.username,
				password:this.password,
				userMail:this.userMail,
				userPhone:this.userPhone,
			}
			this.axios.post('/api/users/register',sendDate)
			.then((data)=>{
				if(data.data.message){
					alert(data.data.message);
					this.$router.push({path:'/login'})
				}else{
					alert(data.data.message);
					this.$router.go(-1)
				}
			})
		}
	},
}

  }
</script>

<style>
	.main{
		width: 100%;
	}
	.biao{
		width: 448px;
		height: 59px;
		float: left;
		margin-left: 316px;
		margin-top: 156px;
	}
	.di1{
		float: left;
		font-size: 42px;
		font-weight: bold;
		color: #757575;
		text-decoration: none;
		margin-left: 70px;
		margin-top: 100px;
		
	}
	.di{
		width: 305px;
		height: 42px;
		float: left;
		margin-left: 390px;
		margin-top: 67px;
	}
	.zhudeng{
		width: 305px;
		height: 100px;
		font-size: 50px;
		color: #ff4181;
		float: left;
		margin-left: 327px;
		margin-top: 5px;
		background-color: white;
		border: 0px;
	}
	.denglu{
		float: left;
		width: 905px;
		height: 109px;
		border: 6px solid #ff4181;
		margin-top: 84px;
		margin-left: 80px;
		border-radius: 65px 65px 65px 65px;
	}
	.ma{
		font-size: 46px;
		color: #bdbdbd;
		float: left;
		margin-top: 70px;
	}
	.yanzheng{
		float: left;
		width: 905px;
		height: 155px;
		margin-top: 70px;
		margin-left: 90px;
		border-bottom: 6px solid #e0e0e0;
	}
	
	.tou{
		float: left;
		width: 1080px;
		height: 680px;
	}
	.zhong{
		float: left;
		margin-top: -50px;
		width: 1080px;
		height: 1280px;
		background-color: white;
		
		border-radius: 45px 45px 0 0;
	}
	.xian{
		width: 905px;
		height: 164px;
		border-bottom: 6px solid #e0e0e0;
		float: left;
		margin-left: 90px;
		margin-top: 70px;
	}
	.xian1{
		
		float: left;
		font-size: 32px;
		color: #8f4e64;
		font-weight: bold;
	}
	.kuang{
		width: 621px;
		height: 55px;
		font-size: 46px;
		color: #bdbdbd;
		float: left;
		border-right: 2px solid #e0e0e0;
		border-left: 0px solid #e0e0e0;
		border-bottom: 0px solid #e0e0e0;
		border-top: 0px solid #e0e0e0;
		margin-top: 74px;
		margin-left: -135px;
	}
	.guo{
		float: left;
		width: 262px;
		height: 132px;
		margin-left: 15px;
		
	}
	.guo1{
		float: left;
		width: 60px;
		height: 42px;
		margin-top: 38px;
	}
	.xiala{
		width: 143px;
		height: 37px;
		font-size:38px;
		font-weight: bold;
		float: left;
		margin-top: 38px;
		margin-left: 18px;
		border: 0px solid black;
	}
</style>