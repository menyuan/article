<template>
	<div id="qianduan">
		<ul class="list-group" v-for="item in data">
		    <li class="list-group-item">
		    	<a class="list-group-item-heading">
		    		【前端】{{item.title}}
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
import axios from 'axios'
import $ from 'jquery'
export default{
	data(){
		return {
			data:[
			
			]
		}
	},
	mounted:function(){
		var _self=this
		$.ajax({
	      type:'POST',
	      url:'/api/qianduan',
	      dataType:'json',
	      success:function(res){
	        _self.data=res.data;
	      }
	    })
	}
}
</script>
<style scoped src="../assets/css/common.css">
</style>