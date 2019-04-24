<template>
	<div>
		<div class="header">
			<a href="">
				<img src="../../../imges/箭头.png" alt="" style="width: 50%;">
			</a>
			<span class="mune"></span>
			<p class="my-title">个人中心</p>
		</div>
		
		<div class="my-mid">
			<div class="my-header">
				<a class="login-btn" href="" >
                <router-link style="color: #fff;" to="/login">登录&nbsp;/&nbsp;注册</router-link>
            </a>
			</div>
			
			<ul class="my-list">
				<li>
					<span>默认购物频道</span>
				</li>
				<li class="right">
					<a href="">
						男士MEN
					</a>
					<img src="../../../imges/右箭头.png" alt="">
				</li>
			</ul>
			<div class="cgj-div"><img src="../../../imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt=""></div>
			
			<ul class="my-list">
				<li>
					<span>我的订单</span>
				</li>
				<li class="right">
					<a href="">
						全部订单
					</a>
					<img src="../../../imges/右箭头.png" alt="">
				</li>
			</ul>
			
			<ul class="my-order">
				<li>
					<div class="concon">
					<svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yinhangqia"></use>
                    </svg>
					</div>
					<p>待付款</p>
				</li>
				<li>
					<div class="concon">
					<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-daishouhuo"></use>
				    </svg>
					</div>
					<p>待发货</p>
				</li>
				<li>
					<div class="concon">
					<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-daifahuo"></use>
				    </svg>
					</div>
					<p>待收货</p>
				</li>
				<li>
					<div class="concon">
					0
					</div>
					<p>商品收藏</p>
				</li>
				<li>
					<div class="concon">
					0
					</div>
					<p>品牌收藏</p>
				</li>
				<li>
					<div class="concon">
					0
					</div>
					<p>浏览记录</p>
				</li>
			</ul>
			<div class="cgj-div"><img src="../../../imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt=""></div>
			
			<ul class="my-list">
				<li style="border-bottom: 1px solid #e0e0e0;">
					
					<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-daishouhuo"></use>
					</svg>
					
					<span>优惠券</span>
				</li>
				<li class="right" style="border-bottom: 1px solid #e0e0e0;">
					<img src="../../../imges/右箭头.png" alt="">
				</li>
				
				<li>
					
					<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-juyouhuobishuxing"></use>
					</svg>
					
					<span>有货币</span>
				</li>
				<li class="right">
					<img src="../../../imges/右箭头.png" alt="">
				</li>
			</ul>
			<div class="cgj-div"><img src="../../../imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt=""></div>
			
			<div class="my-banner">
				<img src="../../../imges/015ca6b18d8571b763e583a288646f737c.jpg" alt="">
				<div class="cgj-div"><img src="../../../imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt=""></div>
				<img src="../../../imges/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg" alt="">
				<div class="cgj-div"><img src="../../../imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt=""></div>
			</div>
			
			<div class="toper">
				 <div class="toper-title">
					 为你优选
				 </div>
			</div>
			
			<ul class="my-youxuan">
				<li v-for="(v,i) in my">
					<div class="tag"></div>
					<a href="">
						<img :src="v.img" alt="">
					</a>
					<div class="my-detail">
						<div class="name">.
							<a href="">
							{{v.name}}
							</a>
						</div>
						<div class="price">
							<span class="sale-pirce">{{v.sale}}</span>
							<span class="market-price">{{v.market}}</span>
						</div>
					</div>
				</li>
				
				<li v-for="(v,i) in my1">
					<div class="tag"></div>
					<a href="">
						<img :src="v.img" alt="">
					</a>
					<div class="my-detail">
						<div class="name">
							<a href="">
							{{v.name}}
							</a>
						</div>
						<div class="price">
							<span class="sale-pirce1">{{v.sale}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		
		<div class="footer">
					<p class="op-row">
						<a href="">登录</a>
						 <span class="sep-line">|</span>
						 <a href="">注册</a>
						 <span class="back-to-top">回到顶部
						 <i class="iconicon"><img src="../../../imges/上箭头.png" alt=""></i>
						 </span>
					 </p>
					 <div class="address">
						         CopyRight©2007-2019 南京新与力文化传播有限公司
					 </div>
			
			
		</div>
		
		
		
		
		
		
</div>
	
</template>

<style scoped="scoped">
	a{
		text-decoration: none;
	}
	
	.address{
		background-color: #eee;
		color: #666;
		line-height: 60px;
		text-align: center;
		height: 60px;
	}
	.iconicon img{
		height: 15px;
	}
	.op-row .back-to-top{
		position: relative;
		left: 10rem;
	}
	.op-row .sep-line{
		color: #e0e0e0;
		margin: 0 0.75rem;
	}
	.op-row a{
		display: inline-block;
		color: #000;
	}
	.op-row{
		height: 77.63px;
		line-height: 3rem;
		padding: 0 0.75rem;
	}
	.footer{
		width: 100%;
		display: block;
		height: 137.63px;
		margin-bottom: 74px;
	}
	.sale1-pirce{
		color: #000;
	}
	.price .market-price{
		color: #b0b0b0;
		font-size: 12px;
		margin: 0 0 0 0.125rem;
		text-decoration: line-through;
	}
	.price .sale-pirce{
		color: #d62927;
	}
	.my-detail .price{
		margin-top: 10px;
	    font-size: .65rem;
        line-height: .65rem;
	}
	.my-detail .name a{
		color: #444;
		font-size: 0.65rem;
		height: 1.75rem;
		line-height: 0.875rem;
		margin: 0.45rem 0 0.3rem;
		padding: 0.15rem 0;
	}
	.my-detail{
		position: relative;
	}
	.my-youxuan li img{
		width: 100%;
	}
	.my-youxuan li .tag{
		height: 0.825rem;
		overflow: hidden;
		width: 100%;
	}
	.my-youxuan li{
		float: left;
		height: 327.33px;
		margin: 0.3rem 0.45rem 1.175rem;
		width: 178.28px;
	}
	.my-youxuan{
		padding-left: 0.375rem;
		height: 4550px;
	}
	.toper-title{
		border-left: 0.125rem solid #444;
		color:#444;
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 0.7rem;
		margin-top: 12px;
		padding-left: 0.5rem;
	}
	.toper{
		border-bottom:1px solid #e0e0e0;
		height: 2rem;
		line-height: 0.8rem;
		padding: 0.6rem 0.75rem;
	}
	.my-banner img{
		width: 100%;
	}
	.my-order li .concon{
		font-size: 1.25rem;
		color: #444;
		height: 1.375rem;
		line-height: 1.125rem;
		padding-top: 0.25rem;
	}
	.my-order li p{
		font-size: 0.6rem;
		color: #444;
		height: 1.375rem;
		line-height: 1.375rem;
	}
	.my-order li{
		text-align: center;
		border-top: 1px solid #e0e0e0;
		width: 86px;
		height: 63.03px;
		color: #444;
		float: left;
		padding: 0.5rem 1.625rem;
	}
	.my-order{
		height: 160.6px;
	}
	.cgj-div img{
		width: 100%;
		height: 12.81px;
	}
	.cgj-div{
		height: 15px;
		margin-top: -4px;
	}
	.right a{
		position: relative;
		top: -17px;
		right: -28px;
	}
	.right img{
		width: 30px;
		height: 30px;
		position: relative;
		right: -15px;
		top: -7px;
	}
	.right{
		text-align: right;
	}
	.my-list li a{
		color: #444;
	}
	.my-list li{
		padding-top: 12px;
		float: left;
		 width: 48%;
		 height: 32.16px;
	 }
	.my-list{
		height: 44.16px;
		padding: 0 0 0 0.75rem;
	}
	.login-btn{
		position: relative;
		top: 20px;
		left: 120px;
		width: 143.52px;
		height: 38.63px;
		border: 0.15rem solid #fff;
		color: #fff;
		display: block;
		font-size: 1rem;
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		text-decoration: none;
	}
	.my-header{
		height: 5.1rem;
		background-image: url(../../../imges/header-bg.b98d69725a.jpg);
		background-size: 100%;
		padding: 1.15rem 0.75rem 1.45rem;
		position: relative;
	}
	.header a{
		top: 15px;
		position: absolute;
		height: 42.95px;
		width: 57.95px;
	}
	.my-title{
		width: 284.84px;
		height: 37.95px;
		font-weight: 400;
		padding-top: 20px;
		text-align: center;
		margin-left: 3.925rem;
		margin-right: 2.925rem;
		font-size: 1.02rem;
	}
	.header{
		height: 57.95px;
		background-color: #000;
		color: #fff;
	}
	.header .mune{
		background: url(../../../imges/meun.png) no-repeat;
		background-position: center;
		float: right;
		width: 57.95px;
		height: 57.95px;
		background-size: 65%;
	}
</style>

<script>
	  export default{
		  data(){
		  		return{
		  			my:[],
					my1:[]
		  		}
		  	},
		  	mounted(){
		  		var m=this
		  		this.$http.get('./data/my.json')
		  		  .then(function (response) {
		  		    console.log(response.data);
		  		    m.my=response.data.my;
					m.my1=response.data.my1;
		  		
		  		  })
		  		  .catch(function (error) {
		  		    console.log(error);
		  		  })
		  		  .then(function () {
		  		    // always executed
		  		  });  
		  	}
			
		  	
		  }
	  
</script>