<template>
	<div id="firstcomponent">
		<ul class="list-group" v-for="item in data">
		    <li class="list-group-item">
		    	<div class="container">
		    		<div class="row">
		    			<div class="col-md-2">
		    				<a v-bind:href="item.href">
		    					<img src="../assets/logo.png">
		    				</a>
		    			</div>
		    			<div class="col-md-10">
		    				<a class="list-group-item-heading" v-bind:href="item.href">
					    		{{item.title}}
					    	</a>
					    	<p>
					    		<img src="../assets/logo.png" />
								{{item.author}}
					    	</p>
		    			</div>
		    		</div>
		    	</div>
		    </li>

		    </p> 
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default{
	data(){
		return {
			data:[]
		}
	},
	mounted:function(){
		var _self=this
		$.ajax({
	      type:'POST',
	      url:'/api/first',
	      dataType:'json',
	      success:function(res){
	        _self.data=res.data;
	      }
	    })
	}
}
</script>
<style scoped>
#firstcomponent a{
	display:block;
	margin-bottom:10px;
	font-size:20px;
	color:#000;
	padding:10px 0;
	text-decoration:none;
	cursor:pointer;
}
.col-md-2{
	padding-left:0;
}
#firstcomponent p{
	font-size:18px;
	line-height:30px;
}
.col-md-2 img{
	width:150px;
	height:150px;

}
.col-md-10{
	text-align:left;
}
#firstcomponent .col-md-10 a.list-group-item-heading{
	padding-bottom:40px;
	font-size:24px;
	border-bottom:1px solid #eee;
}
.col-md-10 p img{
	width:30px;
	height:30px;
	display:inline-block;
	margin-right:10px;
}
#firstcomponent .col-md-10 p{
	padding-top:20px;
	font-size:20px;
}
 
</style>