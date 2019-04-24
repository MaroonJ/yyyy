<template>
	<div>
		<ul class="stroll-scroll">
			<li v-for="(v,i) in stroll">
				<span>{{v.wenzi}}</span>
			</li>
		</ul>
		
		<div class="home-banner-foot">
		    <mt-swipe :auto="4000">
		      <mt-swipe-item v-for="(v,i) in stroll1">
		    	  <img :src="v.img" mode="" width="100%"></img>
		    </mt-swipe-item>
		    </mt-swipe>
		</div>
		
		
		
	</div>
</template>

<style scoped="scoped">
	.home-banner-foot{
		width: 100%;
		height: 200.53px;
	}
	.stroll-scroll li span{
	border-bottom: .1rem solid #fff;
    display: block;
    line-height: 2.9rem;
    padding: 0 .35rem;
	width: 46.09px;
	height: 51.58px;
	}
	.stroll-scroll li{
		width: 75.84px;
		height: 51.58px;
	color: #ccc;
	display: inline-block;
    font-size: 14PX;
    padding: 0 .575rem;
    text-align: center;
	}
	.stroll-scroll{
	background-color: #fff;
    font-size: 0;
    height: 51.75px;
    line-height: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 .575rem;
    white-space: nowrap;
	}
</style>

<script>
	export default{
		 data(){
				return{
					stroll:[],
					stroll1:[]
				}
			},
			mounted(){
				var m=this
				this.$http.get('./data/stroll.json')
				  .then(function (response) {
				    console.log(response.data);
				    m.stroll=response.data.stroll;
					 m.stroll1=response.data.stroll1;
				
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