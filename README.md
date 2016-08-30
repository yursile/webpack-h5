# webpack-react-ui
###制作微信网站模板

* **es6**
* **react-weui**
* **react热插拔**
* **less**
* **本地动态生成代码块**

#get started
* **npm run dev** 在本地8080端口起测试服务,引用的所有文件都在内存，不在硬盘上，更新速度飞快
* **npm run online** 在硬盘上生成dist文件夹，直接发布dist包即可

#说明

###编写代码
	所有代码均在src下编写
**css目录:** 
* base目录下放通用css，比如reset.css
* page目录下放具体某页css，比如login.css
* index.less一般对应index.html的css
* 所有的css的引入均是从js文件中import的，webpack会把引入的文件自动插入到index.html中
	
**js目录**
* page目录与css中类似
* tools目录可放自适应，统计流量的辅助代码
* index.js指应用主入口

**view目录**
* index.html是网页模板
* loading.html指loading代码的模块，执行npm run online后dist目录中对应的index.html会插入loading.html中的内容，详细配置见hmtl-yu-plugin
* statistics.html指统计代码的模块，与js中tools下的统计不同，这个是直接往index.html中插入所有dom元素，而不是一个js

	
##关于[hmtl-yu-plugin](https://github.com/yursile/html-yu-plugin)

这个工具可以动态生成css,js甚至html代码块。在webpack plugin配置如下：
```javascript
new HtmlWebpackPlugin({           
    filename:'/view/index.html',  
    template:'./src/view/index.html', 
    inject:true,  //this value must be true
    heads:['response'],  //会把webpack chunks 中的response放到head标签里，  通常放自适应的代码
    blockFile:"./src/view/statistics.html", //把这个目录下的代码块放到body结束标签之前，  通常放统计代码
    headBlockFile:"./src/view/loading.html"  //把这个目录下的代码块放到body开始标签之后，通常放loading
})
```
#更新日志
* **解决windows shell问题**