<template>
	<div>
		<ul class="act">
		    <li v-for="item in arr"><router-link :to="'/content/'+ item.aid">{{item.title}}</router-link></li>
		</ul>
		<div class="footer">
			Copyright © 2015 Ele.me. All Rights Reserved
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			getData:function(){
			var that=this
			 this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
			 .then(function(res){
			 	
			 	that.arr=res.body.result
			 	console.log(res)
			 },function(err){
			 	console.log(err)
			 })
			}
		},
		mounted(){
			this.getData()
		}
	}
	
</script>

<style>
	.act {
		width: 800px;
		margin: 20px auto;
		overflow: hidden;
		
	}
	.act li{
		width: 100%;
		list-style: none;
		height:40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
	    cursor: pointer;
	}
	
	.footer{
		height:100px;
		line-height: 100px;
		text-align: center;
		background: #f5f5f5;
		margin-top: 20px;
	}
</style>