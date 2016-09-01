import PIXI from "pixi.js"
import $ from "jquery"


/**
 * 给canvas画布定宽高
 * 640*1136
 * 然后利用pageUtil缩放
 * pageUtil是在loading.html中引入的
 */
var WIDTH  = 640;
var HEIGHT = 1136;
var cvsContainer = $("#cvsContainer")[0]
new window.pageUtil("#cvsContainer").response();


/**
 * 定义pixi测试类
 * 注意写法
 */
export default class PIXITest{
	/**
	 * 构造函数
	 * 在new的时候会自动执行
	 */
	constructor(){
		//pixi使用的基本写法
		this.stage = new PIXI.Container(0xF0F0F0);
		this.renderer = new PIXI.CanvasRenderer(WIDTH, HEIGHT);
		this.renderer.backgroundColor = 0xF0F0F0;
		cvsContainer.appendChild(this.renderer.view);

		//加载所需文件
		this.loadSpriteSheet();
	}
	/**
	 * pixi内置loader的json路径
	 * 此文件中加载json的相对路径放在线上后是以index.html所在目录为参考的
	 * 在index.html目录引入就是img/sprite.json 没有../
	 *
	 *
	 * json中的文件解析完成之后会自动获取里面的图片
	 * 并把该图片放到PIXI.textureCache里
	 */
	loadSpriteSheet(){
		var assetsToLoad = ["img/sprite.json"];
		var loader = new PIXI.loaders.Loader();
		loader.add(assetsToLoad);
		loader.once("complete",this.spriteSheetLoaded.bind(this));
		loader.load();
	  
	}

	/**
	 * loader完成之后的回调
	 * sprite.json里有sohu这一项
	 * sohu对应的图片也在PIXI.textureCache里
	 * 可以通过如下API使用
	 */
	spriteSheetLoaded(){
		//这是pixi往stage里添加元素的基本写法
		var scoreBg = new PIXI.Sprite.fromFrame("sohu")
		scoreBg.position.x = 50
		scoreBg.position.y = 250
		this.stage.addChild(scoreBg)

		//重复渲染，防止在渲染前图片没加载完成
		webkitRequestAnimationFrame(this.update.bind(this));
	}

	update(){
		this.renderer.render(this.stage);
	}

}