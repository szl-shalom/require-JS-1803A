/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 10:29:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 11:35:59
 */

// 配置
require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        sel: "sel",
        V: "../lib/velocity.min"
    }
})

// 引入模块
require(["data", "sel"], function (data, Sel) {
    new Sel({
        data: data,//大数据
        selUl: document.querySelector(".sel-ul"),//渲染的节点
        search: document.querySelector(".search"),//input框
        btn: document.querySelector("button"),//提交
    })
})
