/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 10:42:03
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 11:39:58
 */
// 配置require
require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        $: "dom",
        s: "sel",
        t: "tab"
    }
})

// 引入模块
require(["data", "$", "s", "t"], function (data, $, Sel, Tab) {
    // 调用Tab模块
    new Tab({
        title: $.get(".title"),
        content: $.get(".content"),
    })

    // 调用下拉模块
    new Sel({
        ipt: $.get(".ipt"),
        sel: $.get(".sel"),
        data: data,
        header: $.get(".header"),
        bottom: $.get(".bottom"),
    })
})