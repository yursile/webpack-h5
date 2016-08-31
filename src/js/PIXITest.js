import PIXI from "pixi.js"
import $ from "jquery"
var WIDTH = window.SCREEN_WIDTH = 640;
var HEIGHT = window.SCREEN_HEIGHT =1136;
var cvsContainer = $("#cvsContainer")[0]

export default class PIXITest{
	constructor(){
		this.stage = new PIXI.Container(0xF0F0F0);
		this.renderer = new PIXI.CanvasRenderer(WIDTH, HEIGHT);
		this.renderer.backgroundColor = 0xF0F0F0;
		cvsContainer.appendChild(this.renderer.view);
		this.loadSpriteSheet();
	}

	loadSpriteSheet(){
		var assetsToLoad = ["../src/img/sprite.json"];
		var loader = new PIXI.loaders.Loader();
		loader.add(assetsToLoad);
		loader.once("complete",this.spriteSheetLoaded.bind(this));
		loader.load();
		// var _this = this;

		// require.ensure(["../img/sprite.json"],function(require){
		// 	var baseTexture = require("../img/sprite.json");
		// 	console.log(baseTexture)
		// 	new PIXI.BaseTexture(baseTexture)
		// 	console.log("loading")
		// 	_this.spriteSheetLoaded();
		// });
	  
	}

	spriteSheetLoaded(){
		console.log("loed")
		var scoreBg = new PIXI.Sprite.fromFrame("cloud")
		this.stage.addChild(scoreBg)
		webkitRequestAnimationFrame(this.update.bind(this));
	}

	update(){
		this.renderer.render(this.stage);
	}

}