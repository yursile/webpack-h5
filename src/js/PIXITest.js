import PIXI from "pixi.js"
import $ from "jquery"


var WIDTH  = 640;
var HEIGHT = 1136;
var cvsContainer = $("#cvsContainer")[0]
new window.pageUtil("#cvsContainer").response();

export default class PIXITest{
	constructor(){
		console.log("rinima")
		this.stage = new PIXI.Container(0xF0F0F0);
		this.renderer = new PIXI.CanvasRenderer(WIDTH, HEIGHT);
		this.renderer.backgroundColor = 0xF0F0F0;
		cvsContainer.appendChild(this.renderer.view);
		this.loadSpriteSheet();
	}
	/**
	 * pixi内置loader的json路径
	 * 此文件中加载json的相对路径放在线上后是以index.html所在目录为参考的
	 * 在index.html目录引入就是img/sprite.json 没有../
	 */
	loadSpriteSheet(){
		var assetsToLoad = ["img/sprite.json"];
		var loader = new PIXI.loaders.Loader();
		loader.add(assetsToLoad);
		loader.once("complete",this.spriteSheetLoaded.bind(this));
		loader.load();
	  
	}

	spriteSheetLoaded(){
		var scoreBg = new PIXI.Sprite.fromFrame("sohu")
		scoreBg.position.x = 50
		scoreBg.position.y = 250
		this.stage.addChild(scoreBg)
		webkitRequestAnimationFrame(this.update.bind(this));
	}

	update(){
		this.renderer.render(this.stage);
	}

}