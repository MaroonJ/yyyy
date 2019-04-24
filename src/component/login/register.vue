<template>
	<div>
		<div class="register-page">
		<div class="register-top">
			<button></button>
			<span class="page-title">注册</span>
		</div>
		<form class="reg-form"></form>
		<div class="form-group">
			<label for="mobile" class="label">
				<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-dianhua"></use>
				</svg>
			</label>
			<select name="" id="countryCodeSelector" class="country-select">
                    <option value="+61">澳大利亚</option>
                    <option value="+82">韩国</option>
                    <option value="+1">加拿大</option>
                    <option value="+60">马来西亚</option>
                    <option value="+1">美国</option>
                    <option value="+81">日本</option>
                    <option value="+65">新加坡</option>
                    <option value="+44">英国</option>
                    <option value="+86" selected="">中国</option>
                    <option value="+853">中国澳门</option>
                    <option value="+886">中国台湾</option>
                    <option value="+852">中国香港</option>
            </select>
			<i class="line"><img src="../../../imges/竖.png" alt=""></i>
			<input type="tel" name="mobile" placeholder="请输入手机号" class="mobile-input" autocomplete="off">
		</div>
		<div class="form-group">
			<label for="mobile" class="label">
				<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-dunpai"></use>
				</svg>
			</label>
			<input type="text" name="verifyCode" placeholder="请输入验证码" class="mobile-input" autocomplete="off">
			<button class="get-verify-code">获取验证码</button>
		</div>
		<div class="form-group">
			<label for="mobile" class="label">
				<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-jiesuo"></use>
				</svg>
			</label>
			<input type="text" name="verifyCode" placeholder="请输入密码" class="mobile-input" autocomplete="off">
			<span class="eye-close">
				<img src="../../../imges/eyes_closedd.png" alt="">
			</span>
		</div>
		<div class="form-group">
			<label for="mobile" class="label">
				<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-haoyou"></use>
				</svg>
			</label>
			<input type="text" name="verifyCode" placeholder="好友潮流口令(非必填)" class="mobile-input" autocomplete="off">
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
					<div class="protocol">
						 注册即表示您已阅读并同意
						 <br>
						 <br>
						 <a href="">有货用户服务协议</a>
						 <a href="">有货隐私条款</a>
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
	.protocol{
		margin-top: 20px;
	}
	.protocol a{
		margin-top: 10px;
		color: red;
		text-decoration: underline;
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
	.eye-close{
		position: relative;
		top: 15px;
		right: -125px;
	}
	.eye-close img{
          width: 6%;		
	}
	.get-verify-code{
		background-color: #b0b0b0;
		color: #fff;
		float: right;
		border-radius: 2.625rem;
		height: 2.25rem;
		line-height: 1.25rem;
		margin-top: -0.01rem;
		padding: 0 0.4rem;
		border: none;
		width: 100px;
	}
	.mobile-input{
		font-size: 14px;
		position: relative;
		top: 10px;
		right: -7px;
		border: none;
	}
	.label{
		position: relative;
		top: 10px;
	}
	.line img{
		width: 7%;
	}
	.line{
		width: 6px;
		position: relative;
		margin-right: 0.5rem;
		right: -20px;
		height: 32px;
		top: 18px;
	}
	.form-group{
		height: 50px;
		border-bottom: 1px solid #e0e0e0;
		margin-bottom: 1.4rem;
	}
	.country-select{
		position: relative;
		top: 12px;
		right: -30px;
		border: none;
		font-size: 21px;
		font-weight: 600;
	}
	.reg-form{
		margin-top: 2.5rem;
	}
	.page-title{
	display: inline-block;
    font-size: 1.65rem;
    margin-top: .175rem;
    text-align: center;
    width: 333px;
	font-weight: 700;
	}
	.register-top{
	color: #444;
    height: 50px;
    margin-top: 1.25rem;
    width: 354px;
	}
	.register-page{
    padding-left: 1.875rem;
    padding-right: 1.875rem;
	}
</style>