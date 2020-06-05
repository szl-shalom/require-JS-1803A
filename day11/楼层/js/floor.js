/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 15:30:13
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 16:35:28
 */
define(["V"], function (V) {
    function Floor(opt) {
        // 检测必填项  如果没传传入必填项 直接抛出一个错误信息
        // 检测floor
        if (!opt.floor) {
            // 抛出一个错误信息
            throw new Error("floor是必传项");
            return;
        }
        // 检测list
        if (!opt.list) {
            // 抛出一个错误信息
            throw new Error("list是必传项");
            return;
        }

        Object.assign(this, opt);
        this.init();
    }

    Floor.prototype = {
        constructor: Floor,
        init: function () {
            this.bindEvent();//绑定事件
        },
        bindEvent: function () {
            var that = this;
            // 获取每一个楼层距离顶部的位置
            var arr = [...this.floor.children].map(function (item) {
                return item.offsetTop;
            })
            // 滚动事件
            document.addEventListener("scroll", function () {
                // 获取滚动条滚动的距离
                var scroll = document.documentElement.scrollTop || document.body.scrollTop;
                // 遍历arr
                arr.forEach(function (item, index) {
                    if (scroll >= item) {
                        that.list.querySelector(".active") && that.list.querySelector(".active").classList.remove("active")
                        that.list.children[index].classList.add("active");
                    }
                })
            });

            //导航条点击事件
            [...this.list.children].forEach(function (item, index) {
                // 给每一个元素添加点击事件
                item.addEventListener("click", function () {
                    // 根据节点关系  找到对应的元素
                    var el = that.floor.children[index]
                    // 滚动条滚动到指定节点
                    V(el, "scroll")
                })
            })
        }
    }

    return Floor;
})