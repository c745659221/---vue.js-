<template>
  <div id="app">
	  	<div id="wrap_header">
		  	<div class="header">
		  		<img src="./assets/logo.png" class="fl" />
				   <ul class="fl">
							<li><router-link to="/index">首页</router-link></li>
							<li @click="change">漏洞/情报上报</li>
							<li><router-link to="/info">通知公告</router-link></li>
							<li><router-link to="/gx">贡献榜</router-link></li>
							<li><router-link to="/gift">礼品兑换</router-link></li>
						</ul>
						<button class="login">登录</button>
				 </div>
			 </div>
		   
		   
		   
		   	  <transition name="solid">
		   	  	<div id="qb"  v-if="isShow">
			   	  
					  <div class="out">
						  <p class="title">微信登录<span @click="close">X</span></p>
						  <div class="sao">
						  	   <h2>微信登录</h2>
						  	   <img src="./assets/5.png">
						  	   <p>请使用微信扫描二维码登录</p>
						  	   <p>“饿了么安全应急响应中心”</p>
						  </div>
					  </div>
				   </div>
		   </transition>
		   
		   <div class="all"  v-if="isShow"></div>
				  
		  

		   
      
     <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      isShow:false
    }
  },
  methods:{
  	change:function(){
  		this.isShow=true
  	},
  	close:function(){
  		this.isShow=false
  	}
  },
  components:{
	  
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	
	li{
		list-style: none;
		float: left;
	}
	.fl{
		float: left;
	}
	#wrap_header{
		width: 100%;
		
	}
	.header{
		width:1000px;
		margin: 0 auto;
		overflow: hidden;
	}
	.header img{
		width: 200px;
		height:50px;
		margin-top: 10px;
		margin-right: 20px;
		
	}
	.header ul li{
		height:70px;
		line-height: 70px;
		padding: 0 20px;
	}
	
	.login{
		float: left;
		margin-left: 100px;
		margin-top: 20px;
		width:100px;
		height:30px;
		background: lightskyblue;
		border: 0;
		
	}
	
	.solid-enter-active{
		animation: solidenter 300ms
	}
	
	.solid-leave-active{
		animation: solidleave 50ms
	}
	
	@keyframes solidenter{
		
		0%{				
			width:340px;
		  height:440px;
		  position: fixed;
		  left: 50%;
		  margin-left: -170px;
		  top: 50%;
		  margin-top: -220px;
			transform:scale(0,0);
		  z-index: 200;
			
		}
		
		100%{
			width:340px;
		  height:440px;
		  position: fixed;
		  left: 50%;
		  margin-left: -170px;
		  top: 50%;
		  margin-top: -220px;
			transform:scale(1,1);
		  z-index: 200;
			
		}
		
	}
	
	@keyframes solidleave{
		
		0%{		
			  width:340px;
			  height:440px;
			  position: fixed;
			  left: 50%;
			  margin-left: -170px;
			  top: 50%;
			  margin-top: -220px;
				transform:scale(1,1);
			  z-index: 200;
		}
		
		100%{
			  width:0px;
			  height:0;
			  position: fixed;
			  left: 50%;
			  margin-left:0;
			  top: 50%;
			  margin-top:0;
				transform: scale(0.7,0.7);
			  z-index: 200;
		}
		
	}
	
	.all{
		position: fixed;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,0.4);
		z-index: 10;
	}
	
	.out{
		width:340px;
		height:440px;
		position: fixed;
		left: 50%;
		margin-left: -170px;
		top: 50%;
		margin-top: -220px;
		background: #fff;
		z-index: 200;
	}
	
	.out .title{
		height:25px;
		line-height: 25px;
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
		border-bottom: 2px solid #f5f5f5;
	}
	.out .title span{
		float: right;
		cursor: pointer;
	}
	
	.sao{
		text-align: center;
		margin-top: 20px;
	}
</style>