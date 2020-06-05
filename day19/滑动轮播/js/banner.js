define(["V"], function (V) {
    function Banner(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            // 赋值第一张图片
            // this.container.appendChild(this.container.children[0].cloneNode(true))
            // 下标
            this.maxIndex = this.container.children.length - 1;
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.next.addEventListener("click", function () {
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }
                that.index++;
                V(that.container, {
                    marginLeft: -that.index * 800
                })
            })
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.marginLeft = -that.index * 800 + "px";
                }

                that.index--;
                V(that.container, {
                    marginLeft: -that.index * 800
                })
            })
        }
    }

    return Banner;
})