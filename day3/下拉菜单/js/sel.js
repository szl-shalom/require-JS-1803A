/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-21 09:35:55
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-21 11:59:30
 */
define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();//绑定事件
        },
        bindEvent: function () {
            // 遍历所有子元素，添加点击事件
            [...this.ul.children].forEach(function (item) {
                // 添加点击事件
                item.addEventListener("click", function () {
                    // 查找li下的ol
                    var ol = item.querySelector("ol"),
                        b = item.querySelector("b");
                    // 添加动画
                    if (ol.style.display !== "block") {
                        V(ol, "slideDown");//下拉
                        V(b, {
                            rotateZ: "90deg"//旋转90
                        })
                    } else {
                        V(ol, "slideUp");//收起
                        V(b, {
                            rotateZ: "0deg"
                        })
                    }

                })
            })
        }
    }
    return Sel;
})