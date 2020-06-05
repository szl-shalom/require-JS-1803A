/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 15:30:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 15:47:25
 */
// 配置模块
require.config({
    baseUrl: "js",
    paths: {
        f: "floor",
        V: "../lib/velocity.min"
    }
})

// 引入模块
require(["f"], function (Floor) {
    // 调用楼层模块
    new Floor({
        floor: document.querySelector(".floor"),
        list: document.querySelector(".list"),
    })
})