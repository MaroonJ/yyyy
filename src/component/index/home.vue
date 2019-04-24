<template>
	<div>
	<div class="home-header">
		<span class="meun"></span>
		<span class="logo"></span>
		<span class="search">
			<a href="#"></a>
		</span>
	</div>
           
			<mt-swipe :auto="4000">
              <mt-swipe-item v-for="(v,i) in home">
				  <img :src="v.one" mode="" width="100%"></img>
			</mt-swipe-item>
            </mt-swipe>
			
			
		<div class="home-wrapper">
			<ul class="wrapper">
				<li v-for="(v,i) in home1">
					<a href="#">
					<img :src="v.img" alt="">
					<p class="wenzi">{{v.wenzi}}</p>
					</a>
				</li>
				
			</ul>
		</div>	
			
		<div class="home-banner">
			<img src="./imges/011b38b2de8ff682ebd5ea2d019f4e20ee.jpg" alt="">
			<img src="./imges/013ebbfdea210ea8cde67d32007f8a39f2.jpg" alt="">
			<img src="./imges/015e57e3cc0de6512110cc4a5a2bd97e56.jpg" alt="">
			<img src="./imges/01fe475dbb1f779f9f3e76eac86e938812.jpg" alt="">
		</div>	
			
		<div class="home-header-foot">
			<h2>热门品类</h2>	
			
		</div>	
		<ul class="home-category">
			<li v-for="(v,i) in home2">
				<img :src="v.img" alt="">
			</li>
			
		</ul>
		<div class="cgj-div">
			<img src="./imges/019af52e46fe602b54b3d395349984d252.jpg" alt="">
		</div>
	 <div class="home-banner-foot">
	    <mt-swipe :auto="4000">
	      <mt-swipe-item v-for="(v,i) in home3">
	    	  <img :src="v.img" mode="" width="100%"></img>
	    </mt-swipe-item>
	    </mt-swipe>
	</div>
	
	<ul class="cgj-brand">
	<div class="home-header-foot">
		<h2>热门品牌</h2>
	</div>
	<li v-for="(v,i) in home4">
			<img :src="v.img" alt="">
		</li>
		<li class="more">
			<img src="./imges/0173088d664d59084d9dd61fa2d8b78908.png" alt="">
		</li>
	</ul>
	
	<div class="cgj-div">
		<img src="./imges/01dbf0c6445f14fb9990d84ef371501e9e.jpg" alt="">
	</div>
	<div class="banner-list">
		<img src="./imges/0167230098d1cc72ea4c282e7f6e08fce3.jpg" alt="">
	</div>
	<div class="home-header-foot">
		<h2>人气推荐</h2>
		<a href="#"><img src="./imges/等等等.png" alt="" style="width: 32px; height: 51.75px;"></a>
	</div>
	<div class="banner-list">
		<a href="#">
			<img src="./imges/01fb8c7d110e2fb499dbd5303f018010b3.jpg" alt="">
		</a>
	</div>
	
	<div  class="hot-single-goods">
	<ul>
		<li v-for="(v,i) in home5">
			<a href="#">
				<img :src="v.img" alt="">
				<div class="good-infon">
					<h3 class="price">{{v.price}}</h3>
					<p class="view-num">{{v.num}}</p>
					<p class="view-status">{{v.status}}</p>
				</div>
				
			</a>
		</li>
		
	</ul>
	</div>
	<div class="cgj-div">
		<img src="./imges/011b38b2de8ff682ebd5ea2d019f4e20ee.jpg" alt="">
	</div>
	
	<div class="maybe-like">
		<p class="title">
			<i class="icon1"></i>
			<span>你可能喜欢</span>
		</p>
		
		<ul class="maybelike"> 
	            <li v-for="(v,i) in home6">
					<div class="tag"></div>
					<a href="">
						<img :src="v.img" alt="">
					</a>
					<div class="good-detail">
						<h3 class="name">
							<a href="">
								{{v.name}}
							</a>
						</h3>
						<p class="p-price">
							<span class="sale-pirce">{{v.sale}}</span>
							<span class="market-price">{{v.market}}</span>
						</p>
					</div>
				</li>
				
				 <li v-for="(v,i) in home7">
					<div class="tag"></div>
					<a href="">
						<img :src="v.img" alt="">
					</a> 
					<div class="good-detail">
						<h3 class="name">
							<a href="">
								{{v.name}}
							</a>
						</h3>
						<p class="p-price">
							<span class="sale1-pirce">{{v.sale1}}</span>
						</p>
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
			 <i class="iconicon"><img src="./imges/上箭头.png" alt=""></i>
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
		text-decoration: none
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
	.p-price .market-price{
		color: #b0b0b0;
		font-size: 12px;
		margin: 0 0 0 0.125rem;
		text-decoration: line-through;
	}
	.p-price .sale-pirce{
		color: #d62927;
	}
	.p-price{
		width: 160.68px;
		height: 12.6px;
		line-height: 0.55rem;
		white-space: nowrap;
	}
	.maybelike .good-detail a{
		width: 160.68px;
		line-height: 0.75rem;
		margin: 0.375rem 0 0.25rem;
		padding: 0.125rem 0;
		height: 34.93px;
		font-size: 12px;
		color: #444;
		display: -webkit-box;
	}
	.maybelike img{
		width: 178.53px;
		height: 238.05px;
	}
	.maybelike li{
		width: 178.53px;
		height: 327.31px;
		float: left;
	    margin: 0.25rem 0.375rem 1rem;
	}
	.tag{
		height: 18.11px;
		overflow: hidden;
		width: 100%;
	
	}
	.icon1{
		display: inline-block;
		height: 0.775rem;
		width: 0.775rem;
		background: url(./imges/up-icon.dd4b29b7e6.png) no-repeat;
		background-size: 100% 100%;
	}
	.title{
		color: #dadada;
		font-size: 0.95rem;
		height: 2.6rem;
		line-height: 2.6rem;
		text-align: center;
	}
	.maybe-like{
		background: #fff;
		border-top: 1px solid #ccc;
		margin-top: -0.25rem	;
		padding-left: 0.375rem;
		position: relative;
		height: 6630px;
	}
	.view-status{
		color: #b0b0b0;
		font-size: 0.75rem;
		line-height: 1;
		margin-top: 0.35rem;
	}
	.view-num{
		color: #b0b0b0;
		font-size: 0.75rem;
		line-height: 1;
		margin-top: 0.5rem;
	}
	.price{
		color: #444;
		font-size: 1rem;
		line-height: 1;
	}
	.good-infon{
		position: relative;
		height: 27.16px;
		background: #fff;
		padding: 0.6rem 0 0.5rem;
		width: 100%%;
		text-align: center;
	}
	.hot-single-goods li img{
		width: 100%;
		height: 133.25px;
	}
	.hot-single-goods li{
		display: inline-block;
		background: #fff;
		border-radius: 0.125rem;
	    width: 98.97px;
		height: 187.59px;
		margin-right: 0.65rem;
		vertical-align: top;
	
	}
	.hot-single-goods ul{
		height: 213.47px;
		width: 100%;
		padding: 0.625rem 0 0.425rem 0.65rem;
		white-space: nowrap;
	}
	.hot-single-goods{
		height: 213.47px;
		overflow-x: scroll;
		overflow-y: hidden;
		width: 100%;
	}
	.home-header-foot a{
		width: 32px;
		height: 51.75px;
		position: absolute;
		top: 245%;
		right: 2%;
	}
	.banner-list{
		height: 129.38px;
	}
	.banner-list img{
		width: 100%;
		height: 100%;
	}
	.cgj-brand .more{
		width: 207px;
	}
	.cgj-brand{
		height: 259.75px;
	}
	.cgj-brand li img{
		width: 100%;
		height: 100%;
	}
	.cgj-brand li{
		width: 102.5px;
		height: 102.5px;
		float: left;
	}
	.home-banner-foot{
		width: 100%;
		height: 100%;
	}
	.cgj-div img{
		width: 100%;
	}
	.cgj-div{
		background: #f0f0f0;
		height: 16.81px;
	}
	.home-category li{
		width: 102.5px;
		height: 112.55px;
		border-left: 1px solid #e0e0e0;
		border-top: 1px solid #e0e0e0;
		float: left;
		overflow: hidden;
	}
	.home-category li img{
		width: 100%;
	}
	.home-category{
		height: 337.64px;
	}
	.home-header-foot{
		width: 414px;
		height: 51.75px;
		background: #f0f0f0;
		color: #444;
		font-size: 0.8rem;
		line-height: 2rem;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	}
	.home-header-foot h2{
		color: #000;
		font-size: 15px;
	}
	.home-banner img{
		width: 100%;
	}
	.home-banner{
		background: #f0f0f0;
	}
	.wenzi{
		display: block;
	    font-size: 12px;
		line-height: 22px;
		color: #444;
	}
	.home-wrapper .wrapper li a{
		display: block;
		width: 100%;
		height: 40px;
		font-size: 12px;
	    margin: 0 auto;
	}
	.home-wrapper .wrapper li img{
		width: 40px;
		height: 40px;
	}
	.home-wrapper .wrapper li{
		float: left;
		width: 103.5px;
		height: 70px;
		text-align: center;
	}
	.home-wrapper .wrapper{
		height: 76.47px;
	}
	.home-wrapper{
		padding: 15px 0 2px;
		height: 67.47px;
		background-image: url(./imges/012861c7ab0b730fe5825bab664bd374b7.jpg);
	}
	.mint-swipe{
		width: 100%;
		height: 200px;
	}
	.mint-swipe .mint-swipe-indicator{
		margin: 0 8px;
		opacity: 0.6;
	}
	.home-header{
		position: relative;
		height: 58.22px;
		background: black;
	}
	.meun{
		position: absolute;
	    background-position: center;
		margin: 0 0.75rem;
		display: block;
		width: 25.88px;
		height: 58.22px;
		background-image: url(./imges/meun.png);
		background-size: 30px;
		background-repeat: no-repeat;
	}
	.logo{
		margin: auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size:134px;
		width: 134.55px;
		height: 56.27px;
		display: block;
		background-image: url(./imges/yohologo02.4b84a9fb7d.png);
	}
	.search{
		top: 0;
		position: absolute;
		right: 0;
		width: 58.22px;
		height: 58px;
		background-image: url(./imges/search.png);
		background-size:26px;
		background-repeat: no-repeat;
		background-position: center;
	}
	.home-mid{
		height: 201.81px;
	}
	.banner-top{
		height: 201.81px;
	}
</style>


<script>
	export default{
			data(){
				return{
					home:[],
					home1:[],
					home2:[],
					home3:[],
					home4:[],
					home5:[],
					home6:[],
					home7:[]
				}
			},
			mounted(){
				var m=this
				this.$http.get('./data/home.json')
				  .then(function (response) {
				    console.log(response.data);
				    m.home=response.data.home;
					m.home1=response.data.home1;
					m.home2=response.data.home2;
					m.home3=response.data.home3;
					m.home4=response.data.home4;
					m.home5=response.data.home5;
					m.home6=response.data.home6;
					m.home7=response.data.home7;
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