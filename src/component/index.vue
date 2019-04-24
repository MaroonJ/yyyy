<template>
	<div>
		<router-view></router-view>
		<ul>
			<li>
				<router-link to="/home">
			<svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-index"></use>
            </svg>
					首页
					</router-link>
			</li>
			<li>
				<router-link to="/classify">
				<svg class="icon" aria-hidden="true">
				      <use xlink:href="#icon-leimupinleifenleileibie"></use>
				</svg>	
					分类
					</router-link>
			</li>
			<li>
				<router-link to="/stroll">
					<svg class="icon" aria-hidden="true">
					      <use xlink:href="#icon-guangguang"></use>
					</svg>	
					逛
					</router-link>
			</li>
			<li>
				<router-link to="/shoppingcar">					
				<svg class="icon" aria-hidden="true">
				      <use xlink:href="#icon-gouwuche1"></use>
				</svg>	
					购物车
					</router-link>
			</li>
			<li>
				<router-link to="/my">
					<svg class="icon" aria-hidden="true">
					      <use xlink:href="#icon-wodedangxuan-copy"></use>
					</svg>	
					我的
					</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped="scoped">
	.router-link-active .icon{
		color:#000;
	}
	.router-link-active{
		color:#000;
	}
	ul{
		background:#fff;
		border-top: 1px solid #b0b0b0;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-top: 0.5rem;
		height: 64.69px;
	}
	li{
		margin-top: 10px;
		text-align: center;
		float: left;
      }
	a{  
		color: #CCCCCC;
		font-size: 12px;
		text-decoration: none;
	}
	.icon{
		height: 25px;
		width: 82.8px;
		display: block;
		color: #CCCCCC;
		line-height: 1;
		font-size: 1rem;
	}
	
	
</style>