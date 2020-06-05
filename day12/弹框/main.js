/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 16:35:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 16:56:54
 */


require.config({
    baseUrl: "js",
    paths: {
        b: "banner",
    }
})


require(["b"], function (Banner) {
    var btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        new Banner({
            title: "我是弹框的标题",
            okValue: "确定",
            noValue: "取消",
        })
    })
  
})