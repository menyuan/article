<template>
	<div id="sql">
		<ul class="list-group" v-for="item in sql">
		    <li class="list-group-item">
		    	<a class="list-group-item-heading">
		    		【数据库】{{item.title}}
		    	</a>
		    	<p>
					 {{item.description}}
		    	</p>
		    </li>

		    </p> 
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return {
			sql:[]
		}
	},
	mounted:function(){
		var _self=this;
		$.ajax({
	      type:'POST',
	      url:'/api/sql',
	      dataType:'json',
	      success:function(res){
	        _self.sql=res.data;
	      }
	    })
	}
}
</script>
<style scoped src="../assets/css/common.css">
</style>