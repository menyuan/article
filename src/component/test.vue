<template>
	<div id="test">
		<ul class="list-group" v-for="item in test">
		    <li class="list-group-item">
		    	<a class="list-group-item-heading">
		    		【测试】{{item.title}}
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
			test:[]
		}
	},
	mounted:function(){
		var _self=this
		$.ajax({
	      type:'POST',
	      url:'/api/test',
	      dataType:'json',
	      success:function(res){
	        _self.test=res.data;
	      }
	    })
	}
}
</script>
<style scoped src="../assets/css/common.css">
</style>