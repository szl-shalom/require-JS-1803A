/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 16:40:43
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 16:44:08
 */
require.config({
    paths: {
        s: "sel"
    },
    baseUrl: "js",
})


require(["s"], function (Sel) {
    new Sel({
        ul: document.querySelector("ul"),
        input: document.querySelector("input"),
    })
})  