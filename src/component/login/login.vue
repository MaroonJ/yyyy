<template>
	<div>
		
		<div class="login-header">
			<img src="../../../imges/01cf2c685c5d7ddbb21b7c7b961da77454.jpg" alt="">
			<div class="login-banner">
				<div class="login-top">
				<button></button>
				<router-link to="/register">
					<a href="">注册</a>
					</router-link>
				</div>
			</div>
			<div class="tip">
				Yoho!Family账号可登录Yoho!Buy有货 
			</div>
		</div>
		
		<div class="login-mid">
			<div class="login-mobile">
				<div class="label">
					<svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianhua"></use>
                    </svg>
				</div>
				<select name="" id="country"></select>
				
				<i class="line">|</i>
				<input type="tel" name="mobile" placeholder="输入手机号码" class="mobile-input">
			</div>
			<div class="yanzheng">
				<div class="label-1">
					<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-dunpai"></use>
					</svg>
				</div>
				<input type="text" name="verifyCode" placeholder="请输入验证码" class="verify-code-input">
				<button class="login-code">获取验证码</button>
			</div>
			
			<div class="login-verify">
				<div class="login-check">
					<div class="login-header">
						<span>请将下列图片点击翻转至正向朝上</span>
						<a href="">换一批</a>
						<ul class="login-img">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					
						<button class="denglu">登录</button>
						<div class="login-info">
							<a href="" class="login-left">账号密码登录</a>
							<a href="" class="login-right">忘记密码?</a>
						</div>
					</div>
				</div>
			</div>
			
			
			
			
			
		</div>
		
		
		
	</div>
</template>

<style scoped="scoped">
	a{
		text-decoration: none;
	}
	.login-info .login-right{
		float: right;
		color: #000;
	}
	.login-info .login-left{
		float: left;
		color: #000;
	}
	.login-info{
		margin-top: 10px;
	}
	.denglu{
		background-color: #b0b0b0;
		border-radius: 0.1rem;
		color: #fff;
		font-size: 1.3rem;
		margin-top: 0.5rem;
		width: 353.19px;
		height: 38.63px;
		border: none;
	}
	.login-img li{
		border: 1px solid #e0e0e0;
		width: 75.35px;
		height: 75.35px;
		float: left;
		margin-right: 19px;
	}
	.login-img{
		margin-top: 25px;
		width: 386.22px;
		height: 82.8px;
	}
	.login-header a{
		margin-left: 70px;
		color: #d0021b;
	}
	.login-header span{
		color: #444;
	}
	.login-header{
	color: #b0b0b0;
    font-size: .9rem;
    line-height: .875rem;
    margin-bottom: .75rem;
    text-align: left;
	}
	.login-verify{
		margin-top: 1rem;
		width: 354.22px;
		height: 119.34px;
	}
	.login-code{
		border: none;
	background-color: #b0b0b0;
    border-radius: .625rem;
    color: #fff;
    float: right;
    font-size: .55rem;
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: -.2rem;
    padding: 0 .4rem;
    width: 77.66px;
     height: 27.59px;
	}
	.verify-code-input{
		width: 143.52px;
		height: 19px;
		margin-left: 70px;
		border: none;
		margin-top: 5px;
	}
	.label-1{
		width: 20px;
		height: 20px;
		margin-right: 0.9rem;
		position: relative;
		top: 20px;
	}
	.yanzheng{
		border-bottom: 1px solid #e0e0e0;
		height: 53.59px;
	}
	.mobile-input{
		width: 154.55px;
		height: 19px;
		border: none;
	}
	.line{
		margin-right: 0.5rem;
	}
	#country{
		width: 77.27px;
		height: 20px;
		border: none;
		margin-left: 70px;
	}
	.label{
		position: relative;
		top: 19px;
		width: 20px;
		height: 20px;
		margin-right: 0.75rem;
	}
	.login-mid .login-mobile{
		margin-bottom: 2.55rem;
		border-bottom: 1px solid #e0e0e0;
		height: 45.59px;
	}
	.login-mid{
		margin-top: 1.5rem;
		padding-left: 1.875rem;
		padding-right: 1.875rem;
		height: 291.53px;
	}
	.tip{
	bottom: .35rem;
    color: #fffefe;
    font-size: 0.85rem;
    left: 50%;
    margin-top: 3.8rem;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    width: 100%;
	}
	.login-top a{
	background-color: transparent;
    border: 1px solid #fff;
    border-radius: 2.625rem;
    color: #fff;
    float: right;
    height: 27.59px;
    line-height: 1.95rem;
    text-align: center;
    width: 60.72px;
	}
	.login-top{
		height: 1.25rem;
		margin-top: 1.25rem;
		width: 355.19px;
	}
	.login-header .login-banner{
		top: 0;
		height: 100%;
		z-index: 2;
		padding-left: 1.875rem;
		padding-right: 1.875rem;
		position: absolute;
		width: 354px;
	}
	.login-header{
		 height: 160.8px;
      /*   overflow: hidden; */
         position: relative;
         width: 414px;
	}
	.login-header img{
		width: 100%;
	}
</style>