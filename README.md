# webpack-h5
### webpack h5制作模板

* **es6**
* **rem**
* **less**
* **htmltemplate**

# get started
* 依赖webpack,如没有安装,**npm install -g webpack webpack-dev-server**
* **npm run dev** 在本地8080端口起测试服务,引用的所有文件都在内存，不在硬盘上，更新速度飞快
* **npm run online** 在硬盘上生成online.config.js中指定的ROOT文件夹，直接发布ROOT包即可

# 说明


### 目录结构

```
.
├── online.config.js          # 上线配置文件，运行npm run online
├── webpack.config.js         # 开发配置文件,npm run dev
├── rem.template.handlebars   # 雪碧图生成模板
└── src
    ├── css
	|	├── preset.less       # 可放全局less样式，比如.abs()
	|	├── index.less        # 页面主要样式
	|	├── loading.less      # loading
	|	└── sprite.less       # 雪碧图生成的样式
	|
	├── img
	|	├── sprites               # 所有需要生成雪图的都可放在这
	|   |	├── a.png             
    |   |   └── b.png   
    |   |       
	|   └── sprite.png            #webpack执行后会把sprites中的图片生成一张雪碧图sprite.png
	|
	├── js
	|	└── index.js          # 主要的index.js
	|
	├── index.html            # 主html,不用在里面写loading,自适应,统计的代码
	|
	└── view
		├── testTemplate.html # 模板碎片，与下面的loading.html不一样，是在index.js中动态加载的
		├── loading.html      # loading板块的代码，含有自适应、预加载代码
		└── statistics.html   # 所有的统计代码块

```

### 功能
#### html模块化

参考上面目录结构，

* loading.html指loading代码的模块，运行时index.html会插入loading.html中的内容，详细配置见hmtl-yu-plugin
* statistics.html指统计代码的模块，跟loading一样会插入到index.html中，不过是插在body结束标签前，

#### 自适应

* 所有less,css中都用px单位，会自动转化成rem，至于rem跟px的变换关系在loading.html中有设置	
* 个别单位不需要转换的,建议**小于4px**的都不转:
	
		border:1px solid \#000;/*no*/

#### 雪碧图

* 将需要拼接的雪碧图放在img/sprites文件下，运行npm run dev后会自动生成sprite.png和sprite.less
* sprite.less中的单位依然为px,rem.template.handlebars这个模板生成的less会自动设置background-size
* **texture-packer** 除了生成less文件外，还可以生成json文件，类似于texture-packer的功能，而且是自动生成 

#### base64图片处理
* 在js中加载的小图会自动转成base64


####  pixi
* 利用pageUtil缩放canvas所在容器，pixi代码的尺寸都按照640*1136

		new window.pageUtil("#cvsContainer").response();

---------------------------------------

### 编写代码
* **所有代码均在src下编写**
* **集成有ES6开发环境**


### 上线
在online.config.js中有如下代码

	var ROOT = "yursile/fuckdd/"
	
	output:{
        path: path.join(__dirname,ROOT),
        publicPath: "http://news.sohu.com/upload/"+ROOT,
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },

* **path:**  会在根目录生成ROOT中指定的目录结构，直接打包上传ROOT目录，(例子中会生成yursile目录)

	如需要index.html单独提出来，直接发布index.html即可，**不用再换里面链接**
* **publicPath**  会把所有的链接地址替换成线上的地址


	
## 关于[hmtl-yu-plugin](https://github.com/yursile/html-yu-plugin)

这个工具可以动态生成css,js甚至html代码块。在webpack plugin配置如下：
```javascript
new HtmlWebpackPlugin({           
    filename:'/view/index.html',  
    template:'./src/view/index.html', 
    inject:true,  //this value must be true
    blockFile:"./src/view/statistics.html", //把这个目录下的代码块放到body结束标签之前，  通常放统计代码
    headBlockFile:"./src/view/loading.html"  //把这个目录下的代码块放到body开始标签之后，通常放loading
})
```
# 更新日志
* **解决windows shell问题**
* **添加Pixi适配**