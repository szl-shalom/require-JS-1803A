define(["V"], function (V) {
    function Banner(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.render();//渲染
            this.set();//设置
            this.bindEvent();//绑定事件
            this.autoPlay();//自动轮播

        },
        render: function () {
            this.container.innerHTML = this.data.map(function (item) {
                return `
                    <img src="${item}" /> 
                `
            }).join("");

            this.page.innerHTML = this.data.map(function (item) {
                return `
                   <li></li>
                `
            }).join("")
        },
        set: function () {
            // // 设置初始位置
            this.container.style.marginLeft = -this.index * 1000 + "px";
            // 设置初始高亮
            this.page.children[this.index].classList.add("active");
            // 克隆加入container
            this.container.appendChild(this.container.children[0].cloneNode(true))
            // 计算最大下标
            this.maxIndex = this.container.children.length - 1;
        },
        bindEvent: function () {
            var that = this;
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                // 注意边界问题
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }
                that.change(that.index + 1)
            })

            // 左
            this.prev.addEventListener("click", function () {
                // 注意边界问题
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.marginLeft = -that.index * 1000 + "px";
                }
                that.change(that.index - 1)
            });
            // 高亮
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })

            // 鼠标进入划出
            this.banner.addEventListener("mouseenter", function () {
                // that.prev.style.display = "block";
                // that.next.style.display = "block";
                clearInterval(that.timer)
            })


            this.banner.addEventListener("mouseleave", function () {
                // that.prev.style.display = "none";
                // that.next.style.display = "none";
                that.autoPlay()
            })
        },
        change: function (i) {
            var that = this;
            // 修改下标
            that.index = i;
            // 移动长盒子
            V(that.container, {
                marginLeft: -that.index * 1000,
            })
            // 切换高亮
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active");
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click() //右按钮点击事件
            }, 2000)
        }
    }
    return Banner;
})