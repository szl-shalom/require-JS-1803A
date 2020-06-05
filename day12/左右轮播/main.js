/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 16:35:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 16:58:06
 */


require.config({
    baseUrl: "js",
    paths: {
        b: "banner",
    }
})


require(["b"], function (Banner) {
    new Banner({
        container: document.querySelector(".container"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
    })
})