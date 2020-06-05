/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-21 10:44:23
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-21 11:40:39
 */
// 配置
require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        V: "../lib/velocity.min",
        $: "dom"
    }
})

// 引入模块
require(["dialog", "$"], function (Dialog, $) {
    console.log($)
    var ul = $.get("ul"), ipt = $.get("input");
    ul.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.nodeName === "B") {
            new Dialog({
                title: "确认要删除吗？",
                okValue: "确定",
                noValue: "取消",
                okClick: function () { //确定回调函数
                    tar.parentNode.remove();
                }
            })
        }
    })

    ipt.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            new Dialog({
                title: "确定要添加数据吗？",
                okValue: "添加",
                noValue: "不添加",
                okClick: function () {
                    ul.innerHTML += `
                    <li>
                        ${ipt.value}
                        <b>删除</b>
                    </li>
                    `
                    ipt.value = ""
                }
            })
        }
    })

})  