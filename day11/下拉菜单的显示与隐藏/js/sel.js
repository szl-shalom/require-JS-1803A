/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-31 16:40:49
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-31 16:46:14
 */


define(function () {
    function Sel(opt) {
        if (!opt.ul) {
            throw new Error("ul没有传！！！")
        }


        if (!opt.input) {
            throw new Error("input没有传！！！")
        }

        Object.assign(this, opt);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            var that = this;
            this.input.addEventListener("click", function () {
                that.ul.classList.toggle("active");//切换类名
            })
        }
    }
    return Sel;
})