define(["V"], function (V) {
    function Banner(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.render();//渲染
            this.set();//设置轮播
            this.bindEvent();//绑定事件
            this.autoPlay();//自动轮播
        },
        render: function () {
            // 图片
            this.container.innerHTML = this.data.map(function (item) {
                return `
                    <img src="${item}">
                `
            }).join("");

            // 渲染分页器
            this.page.innerHTML = this.data.map(function (item) {
                return `
                    <li></li>
                `
            }).join("");
        },
        set: function () {
            // 设置轮播图初始位置
            this.container.style.marginLeft = -this.index * 1000 + "px";
            // 设置分页器初始高亮
            this.page.children[this.index].classList.add("active");
            // 克隆第一组图片放到末尾
            this.container.appendChild(this.container.children[0].cloneNode(true));
            // 计算下标最大值
            this.maxIndex = this.container.children.length - 1;
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入
            this.banner.addEventListener("mouseenter", function () {
                that.prev.style.display = "block";
                that.next.style.display = "block";
                clearInterval(that.timer);//清除定时器
            })
            // 鼠标离开
            this.banner.addEventListener("mouseleave", function () {
                that.prev.style.display = "none";
                that.next.style.display = "none";
                that.autoPlay();//调用自动轮播函数
            })
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                // 边界判断
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }

                that.change(that.index + 1);

            })
            // 左按钮点击事件
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.marginLeft = -that.index * 1000 + "px";
                }
                that.change(that.index - 1)
            });
            // 给高亮添加事件
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        },
        // 核心
        change: function (i) {
            var that = this;
            // 修改
            that.index = i;
            // 移动长盒子
            V(that.container, {
                marginLeft: -that.index * 1000,
            })
            // 切换高亮 
            // 去除原来的高亮
            that.page.querySelector(".active") && that.page.querySelector(".active").classList.remove("active");
            // 给当前添加高亮
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active");
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click();//每两秒调用右按钮点击事件
            }, 2000)
        }
    }
    return Banner;
})