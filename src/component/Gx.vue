<template>
	<div class="box">
		<div class="container">
			<div class="name">
				<h3>ESRC英雄榜及感谢名单</h3>
				<img src="../assets/9.png" />
				<p>在 2016 年 ，有   <span>50</span> 位白帽子通过 ESRC 平台上报了  <span>446</span> 个饿了么漏洞，ESRC 对这些白帽子的付出表示由衷的感谢!</p>
			</div>
			<div class="search">
				<div class="top">
					<div class="formgroups">
						<label for='year'>年份</label>
						<select>
							<option>全部</option>
							<option>2016</option>
							<option>2017</option>
						</select>
					</div>
					<div class="formgroups">
						<label for='mouth'>月份</label>
						<select>
							<option>全部</option>						
							<option>1</option>						
							<option>2</option>						
							<option>3</option>						
							<option>4</option>						
							<option>5</option>						
							<option>6</option>						
							<option>7</option>						
							<option>8</option>						
							<option>9</option>						
							<option>10</option>						
							<option>11</option>						
							<option>12</option>						
						</select>
					</div>
				</div>
				<table class="table table-striped">					
					<tr>
						<th>排名</th>
						<th>昵称</th>
						<th>团队</th>
						<th>贡献值</th>
					</tr>
					<tr v-for="(item,key) in list">
						<td>{{key+1}}</td>
						<td><span @click="detail(key)">{{item.nikname}}</span></td>
						<td>{{item.group}}</td>
						<td>{{item.attri}}</td>
					</tr>					
				</table>
				
					<div class="detailInfo" v-if="detailShow"></div>
					<transition name="bounce">
						<div class="attriDetail" v-if="detailShow">
							<div class="header">
								<h3>用户详情</h3>
								<button @click="detailClose">X</button>
							</div>
							<ul>
								<li><i>昵称</i>{{obj.nikname}}</li>
								<li><i>贡献值</i>{{obj.attri}}</li>
								<li><i>有效漏洞</i>{{num}}</li>
								<li><i>所属团队</i>{{obj.group}}</li>
								<li><i>个人主页</i>http://www.nsoad.com</li>
								<li><i>个人简介</i></li>
							</ul>
						</div>
					</transition>
					
				
			</div>
		</div>
		<div class="footer">
			Copyright © 2015 Ele.me. All Rights Reserved
		</div>
	</div>
		
</template>

<script>

	export default{
		
		data(){
			return{
				list: [
					{						
						nikname:'x',
						group:233,
						attri:1290
					},{						
						nikname:'Graves',
						group:233,
						attri:1290
					},{						
						nikname:'',
						group:233,
						attri:1290
					},{						
						nikname:'呵呵呵',
						group:233,
						attri:1290
					},{						
						nikname:'呵呵呵',
						group:233,
						attri:1290
					},{						
						nikname:'4ck1k@shadow7',
						group:233,
						attri:154
					},{						
						nikname:'骑虎打狗',
						group:'',
						attri:18
					},{						
						nikname:'红客十年',
						group:'',
						attri:77
					},{						
						nikname:'il0vnn',
						group:'shadow7',
						attri:1290
					},{						
						nikname:'share',
						group:233,
						attri:152
					},{						
						nikname:'土夫子',
						group:233,
						attri:1290
					},{						
						nikname:'Coody',
						group:'网络攻防小组',
						attri:1290
					},{						
						nikname:'x',
						group:'',
						attri:1290
					},{						
						nikname:'直男',
						group:'',
						attri:15
					},{						
						nikname:'wcc526',
						group:'',
						attri:90
					},{						
						nikname:'Loneyer',
						group:'',
						attri:1290
					},{						
						nikname:'wps2015',
						group:233,
						attri:1290
					},{						
						nikname:'我又换了一个马甲 哈哈哈',
						group:'',
						attri:90
					},{						
						nikname:'punck',
						group:'',
						attri:10
					},{						
						nikname:'龙刃',
						group:233,
						attri:1290
					},{						
						nikname:'纳米翡翠',
						group:'',
						attri:1290
					},{						
						nikname:'ok',
						group:233,
						attri:1290
					},{						
						nikname:'catsay',
						group:233,
						attri:1290
					},{						
						nikname:'小博',
						group:233,
						attri:1290
					},{						
						nikname:'whoamisb',
						group:233,
						attri:1290
					},
					{						
						nikname:'x',
						group:233,
						attri:1290
					},{						
						nikname:'Graves',
						group:233,
						attri:1290
					},{						
						nikname:'',
						group:233,
						attri:1290
					},{						
						nikname:'呵呵呵',
						group:233,
						attri:1290
					},{						
						nikname:'呵呵呵',
						group:233,
						attri:1290
					},{						
						nikname:'4ck1k@shadow7',
						group:233,
						attri:154
					},{						
						nikname:'骑虎打狗',
						group:'',
						attri:18
					},{						
						nikname:'红客十年',
						group:'',
						attri:77
					},{						
						nikname:'il0vnn',
						group:'shadow7',
						attri:1290
					},{						
						nikname:'share',
						group:233,
						attri:152
					},{						
						nikname:'土夫子',
						group:233,
						attri:1290
					},{						
						nikname:'Coody',
						group:'网络攻防小组',
						attri:1290
					},{						
						nikname:'x',
						group:'',
						attri:1290
					},{						
						nikname:'直男',
						group:'',
						attri:15
					},{						
						nikname:'wcc526',
						group:'',
						attri:90
					},{						
						nikname:'Loneyer',
						group:'',
						attri:1290
					},{						
						nikname:'wps2015',
						group:233,
						attri:1290
					},{						
						nikname:'我又换了一个马甲 哈哈哈',
						group:'',
						attri:90
					},{						
						nikname:'punck',
						group:'',
						attri:10
					},{						
						nikname:'龙刃',
						group:233,
						attri:1290
					},{						
						nikname:'纳米翡翠',
						group:'',
						attri:1290
					},{						
						nikname:'ok',
						group:233,
						attri:1290
					},{						
						nikname:'catsay',
						group:233,
						attri:1290
					},{						
						nikname:'小博',
						group:233,
						attri:1290
					},{						
						nikname:'whoamisb',
						group:233,
						attri:1290
					}
				],
				
				detailShow: false,				
				num:12,
				obj:{}
			}					
		},
		
		methods:{
			detail(key){
				
				this.detailShow = true;
				this.num = Math.floor(Math.random()*50);
				
				this.obj = this.list[key];
//				console.log(this.list[key].nikname)
			},
			
			detailClose(){
				
				this.detailShow = false;
			}
		}
	}
	
</script>

<style scoped>
	
	.container {
		width:1080px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding-top: 50px;
	}
	
	.name {
		width:420px;
	}
	
	.name h3 {
		width:262px;
		height: 40px;
		line-height: 40px;
		background: orange;
		text-align: center;
		font-size: 20px;
		color: #fff;
		margin-bottom: 30px;
	}
	
	.name img {
		width:336px;
		height: 239px;
	}
	
	.name {
		color: #666;
	}
	
	.name span {
		font-size: 20px;
		color: orange;		
	}
	
	.search {
		width:648px;
	}
	
	.top {
		display: flex;
		justify-content: space-between;
	}
	
	.top label {
		height:30px;
		line-height: 30px;
		margin-right: 10px;
	}
	
	.top select {
		width:250px;
		height: 30px;
		font: 16px "微软雅黑";
	}
	
	table {
		width:648px;
		margin-top: 20px;
		text-align: center;
		border-collapse: collapse;
	}
	
	table th {
		color: #fff;
		background:rgb(253, 86, 107);
		height: 30px;
	}
	
	table tr {
		height: 36px;
	}
	
	table th:nth-child(2) {
		width:190px;
	}
	
	table th:nth-child(3) {
		width:190px;
	}
	
	table th:nth-child(4) {
		width:190px;
	}
	
	table tr:nth-child(2n+1) {
		background: #F0F4F7;	
	}
	
	table td,th {
		border: 1px solid #ddd;
	}
	
	table span {
		color: #0068B7;
		cursor: pointer;
	}
	
	.detailInfo {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,.3);
	}
	
	.attriDetail {
		width:790px;
		height: 400px;
		position: fixed;
		left: 50%;
		top: 50%;
		margin-left: -395px;
		margin-top: -200px;
		background: #fff;
	}
	
	.attriDetail .header {
		height: 45px;
		background: #63a6e4;
		display: flex;
		justify-content: space-between;
		width: 790px;
		
	}
	
	.attriDetail h3 {
		color: #fff;
		font-size: 16px;
		padding:10px;
		line-height: 25px;
	}
	
	.attriDetail button {
		background: none;
		outline: none;
		border: none;
		color: #fff;
		width: 50px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		font-size: 20px;
		cursor: pointer;
		
	}
	
	.attriDetail li {
		padding-left: 40px;
		height: 45px;
		line-height: 45px;
		color:#666;
		display: block;
	}
	
	.attriDetail li:nth-child(2n) {
		background: #F0F4F7;	
	}
	
	.attriDetail i {
		font-style: normal;
		display: inline-block;
		width:200px;
	}
	
	.bounce-enter-active{
		animation: bounceEnter 200ms
	}
	
	.bounce-leave-active{
		animation: bounceLeave 100ms
	}
	
	
	@keyframes  bounceEnter{
		0%{
			width:790px;
			height: 400px;
			position: fixed;
			left: 50%;
			top: 50%;
			margin-left: -395px;
			margin-top: -200px;
			background: #fff;
			transform:scale(0.7,0.7)
		}
		
		100%{
			width:790px;
			height: 400px;
			position: fixed;
			left: 50%;
			top: 50%;
			margin-left: -395px;
			margin-top: -200px;
			background: #fff;
			transform:scale(1,1)
		}
	}
	
	@keyframes  bounceLeave{
		0%{
			width:790px;
			height: 400px;
			position: fixed;
			left: 50%;
			top: 50%;
			margin-left: -395px;
			margin-top: -200px;
			background: #fff;
			transform:scale(1,1)
		}
		
		100%{
			width:790px;
			height: 400px;
			position: fixed;
			left: 50%;
			top: 50%;
			margin-left: -395px;
			margin-top: -200px;
			background: #fff;
			transform:scale(0,0)
		}
	}
</style>