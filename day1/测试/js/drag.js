// 定义模块
define(function () {
    // 面向对象
    function Drag(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            var that = this, flag = false, pos = {};
            this.el.addEventListener("mousedown", function (e) {
                pos = {
                    x: e.offsetX,
                    y: e.offsetY
                }
                flag = true;
                this.style.position = "absolute";
                e.preventDefault();
            })
            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    that.el.style.left = e.pageX - pos.x + "px";
                    that.el.style.top = e.pageY - pos.y + "px";
                }
            })

            document.addEventListener("mouseup", function () {
                flag = false;
            })
        }
    }


    // 抛出模块
    return Drag;
})