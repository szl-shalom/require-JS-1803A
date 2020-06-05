define(function () {
    function Drag(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            var flag = false,
                pos = {},

                that = this;
            console.log(this)
            this.box.addEventListener("mousedown", function (e) {
                flag = true;
                pos = {
                    x: e.offsetX
                }
                e.preventDefault();
            })

            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    that.box.style.left = e.pageX - pos.x - that.progress.offsetLeft + "px";
                    that.mask.style.width = that.box.offsetLeft + "px";
                }
            })

            document.addEventListener("mouseup", function () {
                flag = false;
            })


            this.select.addEventListener("change", function () {
                that.box.className = "box " + this.value;
            })
        }
    }

    return Drag;
})