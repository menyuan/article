import axios from 'axios'
const Mock=require('mockjs');
//前端博文
var Qarticle={
	"data":[
		{
			"title":"从 Vue.js 源码角度再看数据绑定",
			"url":"",
			"description":"写在前面因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。之后会以博客的形式慢慢地输出一些新的学习心得以及总结。原文都发表在我的github上。以及我在阅读源码的过程中为Vue.js加上了部分注释，希望可以给有需要阅读Vue.js源码的朋...",
			"article":"因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。"
		},
		{
			"title":"从 Vue.js 源码角度再看数据绑定",
			"url":"",
			"description":"写在前面因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。之后会以博客的形式慢慢地输出一些新的学习心得以及总结。原文都发表在我的github上。以及我在阅读源码的过程中为Vue.js加上了部分注释，希望可以给有需要阅读Vue.js源码的朋...",
			"article":"因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。"
		} ,
		{
			"title":"从 Vue.js 源码角度再看数据绑定",
			"url":"",
			"description":"写在前面因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。之后会以博客的形式慢慢地输出一些新的学习心得以及总结。原文都发表在我的github上。以及我在阅读源码的过程中为Vue.js加上了部分注释，希望可以给有需要阅读Vue.js源码的朋...",
			"article":"因为对Vue.js很感兴趣所以花了些时间研究了一下框架的源码，从中学习到了很多，感谢尤大大。"
		}
	]
}
//测试博文
var Tarticle={
	"data":[
		{
			"title":"随机测试：如何从小白快速进阶为大咖",
			"description":"前言   小编曾经也是一个没有测试经验的小白，且被leader评价为测试发散度、灵敏度不够。... ",
			"article":""
		},
		{
			"title":"用python复制文件的九种方法",
			"description":"以下是演示“如何在Python中复制文件”的九种方法。　　1.shutil copyfile（）方法　　2.shutil copy（）方法　　3.shutil copyfileobj（）方法　　4.shutil copy2（）方法　　5.os popen方法　　6.os系统（）...",
			"article":""
		},
		{
			"title":"随机测试：如何从小白快速进阶为大咖",
			"description":"前言   小编曾经也是一个没有测试经验的小白，且被leader评价为测试发散度、灵敏度不够。... ",
			"article":""
		},
		{
			"title":"用python复制文件的九种方法",
			"description":"以下是演示“如何在Python中复制文件”的九种方法。　　1.shutil copyfile（）方法　　2.shutil copy（）方法　　3.shutil copyfileobj（）方法　　4.shutil copy2（）方法　　5.os popen方法　　6.os系统（）...",
			"article":""
		}
	]
}
//数据库文章
var Sarticle={
	"data":[
		{
			"title":"数据库的原理",
			"description":"这篇文章大约分为3个部分：1.底层和上层数据库组件概况2.查询优化过程概况3.事务和缓冲池管理概况",
			"article":""
		},
		{
			"title":"数据库的原理",
			"description":"这篇文章大约分为3个部分：1.底层和上层数据库组件概况2.查询优化过程概况3.事务和缓冲池管理概况",
			"article":""
		},
		{
			"title":"数据库的原理",
			"description":"这篇文章大约分为3个部分：1.底层和上层数据库组件概况2.查询优化过程概况3.事务和缓冲池管理概况",
			"article":""
		}
	]
}
//首页
var First={
	"data":[
		{
			"title":"智能合约Solidity",
			"href":"http://blog.csdn.net/column/details/17247.html",
			"src":"http://img.blog.csdn.net/20171024105627374.jpg",
			"authorSrc":"http://avatar.csdn.net/C/6/6/3_diandianxiyu.jpg",
			"author":"diandianxiyu"
		},
		{
			"title":"智能合约Solidity",
			"href":"http://blog.csdn.net/column/details/17247.html",
			"src":"http://img.blog.csdn.net/20171024105627374.jpg",
			"authorSrc":"http://avatar.csdn.net/C/6/6/3_diandianxiyu.jpg",
			"author":"diandianxiyu"
		},
		{
			"title":"智能合约Solidity",
			"href":"http://blog.csdn.net/column/details/17247.html",
			"src":"http://img.blog.csdn.net/20171024105627374.jpg",
			"authorSrc":"http://avatar.csdn.net/C/6/6/3_diandianxiyu.jpg",
			"author":"diandianxiyu"
		}
	]
}
var User={
	"users":[
		{
			"id":1,
			"username":"aaa",
			"password":"aaa"
		},
		{
			"id":2,
			"username":"bbb",
			"password":"bbb"
		},
		{
			"id":3,
			"username":"ccc",
			"password":"ccc"
		}
	]
}
Mock.mock('/api/qianduan',Qarticle);
Mock.mock('/api/test',Tarticle);
Mock.mock('/api/sql',Sarticle);
Mock.mock('/api/first',First);
Mock.mock('/api/user',User);