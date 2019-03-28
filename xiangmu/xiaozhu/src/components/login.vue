<template>
	<div class="main">
		<img class="img-responsive tou" src="../assets/v4.gif">
	<div class="zhong">
		<div class="xian">
			<span class="xian1">输入手机号</span>
			<input class="kuang" type="text" placeholder="手机号/邮箱" />
		</div>
		<div class="xian">
			<span class="xian1">密码</span>
			<input class="kuang1" type="text" placeholder="填写密码" />
		</div>
		<div class="denglu">
				<input type="button" class="zhudeng" value="登录" />
			</div>
			<div class="di">
				<span class="di1">忘记密码？</span>
			</div>
			<img class="img-responsive biao" src="../assets/v3.gif">
	</div>
	</div>
</template>

<script>
</script>

<style>
		.biao{
		width: 448px;
		height: 59px;
		float: left;
		margin-left: 316px;
		margin-top: 156px;
	}
	.di1{
		float: left;
		font-size: 37px;
		font-weight: bold;
		color: #757575;
		margin-left: 1px;
		
	}
	.di{
		width: 305px;
		height: 42px;
		float: left;
		margin-left: 460px;
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
	.kuang1{
		width: 621px;
		height: 55px;
		font-size: 46px;
		color: #bdbdbd;
		float: left;
		margin-top: 74px;
		margin-left: -60px;
		border: 0px solid red;
	}
	.kuang{
		width: 621px;
		height: 55px;
		font-size: 46px;
		color: #bdbdbd;
		float: left;
		margin-top: 74px;
		margin-left: -160px;
		border: 0px solid red;
	}
	.xian1{
		float: left;
		font-size: 32px;
		color: #8f4e64;
		font-weight: bold;
	}
	.xian{
		width: 905px;
		height: 164px;
		border-bottom: 6px solid #e0e0e0;
		float: left;
		margin-left: 90px;
		margin-top: 70px;
	}
	.zhong{
		float: left;
		margin-top: -35px;
		width: 1080px;
		height: 1544px;
		background-color: white;
		border: 1px solid black;
		border-radius: 45px 45px 0 0;
	}
	.tou{
		float: left;
		width: 1080px;
		height: 744px;
	}
</style>