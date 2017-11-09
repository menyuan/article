<template>
	<div id="secondcomponent">
		<h1>I am another page</h1>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			articles:[]
		}
	},
	mounted:function(){
		this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
			headers:{
			},
			emulateJSON:true
		}).then(function(response){
			//这里是处理正确的回调
			this.articles=response.data.subjects
		},function(response){
			//这里是处理错误的回调
			console.log(response)
		});
	}
}
</script>