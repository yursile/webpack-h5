import "../css/index.less"
/**
 * $jquery是通过CDN载入的，在webpack中配置了externals后，依然可以在这里引入
 */
import $ from "jquery"

import template from "../view/testTemplate.html"

import vcode from "../img/vcode.jpg"



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


$("#main").append(`<img src=${vcode} style=position:${style.position};top:${style.top};right:${style.right} />`)

// $("#main").append(json.)
