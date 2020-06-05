define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 克隆第一组图片 并放入尾部
            this.container.appendChild(this.container.children[0].cloneNode(true));
            // 获取最大下标
            this.maxIndex = this.container.children.length - 1;
            // 自动轮播
            this.autoPlay();
            // 绑定事件
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this;
            that.timer = setInterval(function () {
                that.next.click()//调用右按钮点击事件
            }, 2000)
        },
        change: function (i) {
            var that = this;
            //根据传过来的i修改下标
            that.index = i;
            // 执行动画
            V(that.container, {
                marginLeft: -that.index * 800
            })
            //分页器高亮切换
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active")
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active")
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入事件
            this.box.addEventListener("mouseenter", function () {
                // 清除定制器  停止轮播
                clearInterval(that.timer);
                // 左按钮从左侧划过来
                V(that.prev, {
                    left: [0, -80]
                })
                // 右按钮从右侧划进来
                V(that.next, {
                    right: [0, -80]
                })
                // 分页器同底部划入
                V(that.page, {
                    bottom: [20, -80]
                })
            })

            // 鼠标离开事件
            this.box.addEventListener("mouseleave", function () {
                // 再次调用自动轮播
                that.autoPlay();
                // 左按钮从左侧划过来
                V(that.prev, {
                    left: [-80, 0]
                })
                // 右按钮从右侧划进来
                V(that.next, {
                    right: [-80, 0]
                })
                // 分页器同底部划入
                V(that.page, {
                    bottom: [-80, 20]
                })
            })

            // 右按钮点击事件 
            this.next.addEventListener("click", function () {
                // 判断最大下标 到最后一张图片的时候 回归第一张
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }
                that.change(that.index + 1)
            })


            // 左按钮点击事件 
            this.prev.addEventListener("click", function () {
                // 判断最大下标 到最后一张图片的时候 回归第一张
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.marginLeft = -that.index * 800 + "px";
                }
                that.change(that.index - 1)
            });

            // 分页器点击事件
            [...that.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        }

    }

    return Swiper
})