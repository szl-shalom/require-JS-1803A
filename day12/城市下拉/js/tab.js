/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 10:42:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 11:00:17
 */

define(function () {
    function Tab(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            // 开始Tab
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            // 遍历标题下所有子元素
            [...this.title.children].forEach(function (item, index) {
                // 分别添加事件
                item.addEventListener("click", function () {
                    // 去除标题原来高亮
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active");
                    // 给当前项添加高亮
                    item.classList.add("active");
                    // 去除内容盒子原来高亮
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active");
                    // 给对应内容盒子添加高亮
                    that.content.children[index].classList.add("active")
                })
            })
        }
    }
    return Tab;
})
