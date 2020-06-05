/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 16:35:53
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 16:57:32
 */

define(function () {
    function Banner(opt) {
        if (!opt.container) {
            throw new Error("container没有传！！！！！")
        }
        Object.assign(this, {
            index: 0,
        }, opt);
        this.init();
    }

    Banner.prototype = {
        constrtctor: Banner,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.prev.addEventListener("click", function () {
                if (that.index <= 0) {
                    alert("别点了，到第一张了！！！")
                    return;
                }
                that.index--;
                that.container.style.marginLeft = -that.index * 800 + "px";
            })


            this.next.addEventListener("click", function () {
                if (that.index >= that.container.children.length - 1) {
                    alert("别点了，到最后张了！！！")
                    return;
                }
                that.index++;
                that.container.style.marginLeft = -that.index * 800 + "px";
            })
        }
    }

    return Banner;
})