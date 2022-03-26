module.exports = {
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js'
		}
	},
	lintOnSave:false,  //关闭语法检查
	// 开启代理服务器(方式一)
	// devServer:{
	// 	proxy:"http://localhost:5000"
	// }
	// 方式二
	devServer: {
		proxy: {
		  '/atguigu': {		//请求前缀
			target: 'http://localhost:5000',
			pathRewrite:{"^/atguigu":""},		//"正则匹配条件":"" 表示匹配正则表达式的都变成空字符串
			ws: true,		//用于支持webSocket,默认值是true
			changeOrigin: true 		//用于控制请求头中的host值,默认值是true
		  },
		  '/demo': {		//请求前缀
			target: 'http://localhost:5001',
			pathRewrite:{"^/demo":""}
		  },
		//   '/foo': {
		// 	target: '<other_url>'
		//   }
		}
	  }
}