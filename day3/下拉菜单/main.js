/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-21 09:35:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-21 10:34:22
 */
// 主入口文件
// 配置require
require.config({
    // 配置基础路径 根目录
    baseUrl: "js",
    // 配置路径
    paths: {
        s: "sel", //配置下拉模块
        $: "dom",  //配置dom模块
        V: "../lib/velocity.min",//配置动画库
    },
    // 配置非AMD规范
    // shim: {
    //     sel: {
    //         deps: ["依赖的模块"],
    //         exports: "抛出的名称"
    //     }
    // }
})

// 引入模块
require(["s", "$"], function (Sel, $) {
    new Sel({
        ul: $.get("ul")
    })
})

