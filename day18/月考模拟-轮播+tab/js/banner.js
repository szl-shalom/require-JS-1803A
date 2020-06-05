define(["V"], function (V) {
    function Banner(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            // 渲染
            this.render();
            // 绑定事件
            this.bindEvent();
            // 自动伦比哦
            this.autoplay();

        },
        render: function () {
            // 切换路径
            this.img.src = this.data[this.index];
            // 淡入动画
            V(this.img, "fadeIn");
            // 切换高亮
            // 去除原来高亮
            this.page.querySelector(".active") && this.page.querySelector(".active").classList.remove("active")
            // 给当前的添加
            this.page.children[this.index].classList.add("active")
        },
        bindEvent: function () {
            var that = this;
            // 添加右按钮事件
            this.next.addEventListener("click", function () {
                // 下标++
                that.index++;
                // 判断边界
                if (that.index > that.data.length - 1) {
                    that.index = 0;
                }
                // 重新渲染
                that.render()
            });
            // 左按钮点击
            this.prev.addEventListener("click", function () {
                // 下标--
                that.index--;
                // 判断边界
                if (that.index < 0) {
                    that.index = that.data.length - 1;
                }
                // 重新渲染
                that.render()
            });
            // 分页器点击事件
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.index = index;
                    that.render();
                })
            });
            // 鼠标划入划出
            this.banner.addEventListener("mouseenter", function () {
                clearInterval(that.timer);
            });
            this.banner.addEventListener("mouseleave", function () {
                that.autoplay();
            });
        },
        autoplay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click(); //调用右按钮点击事件
            }, 2000)
        }
    }
    return Banner
})