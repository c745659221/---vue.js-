<template>	
	<div>
		
		<img src="../assets/ygcyc.png"  class="banner"/>
		<ul class="list">
			<li>
				<img src="../assets/1.png" />
				<p>通知公告</p>
			</li>
			<li>
				<img src="../assets/2.png" />
				<p>贡献榜</p>
			</li>
			<li>
				<img src="../assets/3.png" />
				<p>礼品兑换</p>
			</li>
		</ul>
		
		<div id="con">
			<div class="con left">
				<h1>致谢</h1>
				<p>截至目前，贡献最多的前 3 位白帽子是：<br>
					<span>x、Graves、。</span><br/>
					感谢他们对饿了么安全作出的贡献！
				</p>
				
			</div>
			<div class="con">
				<div class="ewm-left">
					<img src="../assets/5.png" />
					<p>欢迎关注 ESRC 微信公众号</p>					
				</div>
				<div class="ewm-right">
					<a href="" class="up"></a>
					<a href="" class="down"></a>
				</div>
			</div>
		</div>
	</div>
	
</template>


<script>
	export default{
		data:function(){
			return {
				msg:'首页'
			}
			
		},
		methods:{
			
		}
		
	}
	
</script>

<style>

  html{
  	    overflow-x: hidden;
  }
  
  .banner{
		position: relative;
		left: 50%;
		margin-left: -720px;
		height:451px;
  }
  
  .list{
  	width: 900px;
  	margin: 30px auto 40px;
  	display: flex;
  }
  
  .list li{
  flex: 1;
  	text-align: center;
  }
  
  .list li img{
  	width: 80px;
  	height:80px;
  }
  
  .list li p{
  	
  }
  #con{
  	width: 1100px;
  	display: flex;
  	justify-content: space-between;   
  	margin: 0 auto;
  }
  .con{ 	
  	width: 530px;
  	height:256px;
    box-sizing: border-box;
  	margin-bottom: 40px;
  	padding: 40px 24px 0;
  	background-color: #F5F5F5;
  }
   .con.left{
  	background: url(../assets/4.png) no-repeat 300px 40px/190px 152px #F5F5F5;
   	
   }
    .con.left p{
    	line-height: 24px;
    	font-size: 14px;
    }
   .ewm-left{
   	float: left;
   	width:200px;
   	margin-left: 20px;
   }
    .ewm-left img{
    	width:172px;
    	height:172px;
    }
   .ewm-right{
   	float: left;
   	width:190px;
   	height:200px;
   }
   
   .ewm-right .up{
   	display: block;
   	width:190px;
   	height:46px;
   	background: url(../assets/6.png) no-repeat 0 0/190px 46px;
   	margin-top: 30px;
   }
   .ewm-right .down{
   	display: block;
   	width:190px;
   	height:46px;
   	background: url(../assets/7.png) no-repeat 0 0/190px 46px;
   	margin-top: 20px;
   }
  
</style>