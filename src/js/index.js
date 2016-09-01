import "../css/index.less"
/**
 * $jquery是通过CDN载入的，在webpack中配置了externals后，依然可以在这里引入
 */
import $ from "jquery"

/**
 * 可以加载html
 */
import template from "../view/testTemplate.html"

/**
 * 加载图片
 * 这个图片小于8k，
 * 会转成base64码
 */
import vcode from "../img/vcode.jpg"

/**
 * 引入pixi测试类
 */
import PIXITest from "./PIXITest.js"

// 反引号里可以用${}取js变量
// 
var style = {
	position:"absolute",
	top:"50px",
	right:"0"
}

var test = new PIXITest();

$("#main").append(template);

$("#main").append(`<img id='click' src=${vcode} style=position:${style.position};top:${style.top};right:${style.right} />`)

function showCanvas(){
	$("#cvsContainer").show();
}

$("#click").on("click",showCanvas)

