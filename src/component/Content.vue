<template>
	<div>
		<h2>{{msg.title}}</h2>
		<p v-html="msg.content"></p>
	</div>
	
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg:''
			}
			
		},methods:{
			getContent(){
				var aid=this.$route.params.aid
				//console.log(aid)
				var that=this
				this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+ aid)
				.then(function(res){
					
					console.log(res.body)
					that.msg=res.body.result[0]
					
				},function(err){
					
					console.log(err)
				})
			}
		},
		mounted(){
			
			this.getContent()
		}
		
	}
	
</script>

<style>
	
	h2{
		text-align: center;
	}
</style>