// 定义模块
define(function () {
    function BigImg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            this.create();//动态创建遮罩层和内容盒子
            this.bindEvent();//绑定事件
        },
        create: function () {
            var that = this;
            // 动态创建遮罩层
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            // 动态创建内容盒子
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = `
                <b>X</b>
                <img src="${this.src}" alt="" class="bigImg">
                <div class="left">&lt;</div>
                <div class="right">&gt;</div>
                <ul>
                    ${this.arr.map(function (item) {
                return `
                                <li class="${that.src === item.src ? "active" : ""}"><img src="${item.src}" alt=""></li>
                             `
            }).join("")}
                   
                </ul>
            `;
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            var b = this.content.querySelector("b"),
                left = this.content.querySelector(".left"),
                right = this.content.querySelector(".right"),
                that = this,
                bigImg = this.content.querySelector(".bigImg"),
                ul = this.content.querySelector("ul");
            // 关闭点击事件
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
            // 左按钮点击事件
            left.addEventListener("click", function () {
                // 获取当前高亮的节点
                var activeEl = that.content.querySelector(".active");
                // 获取当前高亮节点的上一个兄弟节点
                var prevEl = activeEl.previousElementSibling;
                console.log(prevEl)
                if (prevEl) {
                    // 获取下一个兄弟节点里面图片的路径
                    bigImg.src = prevEl.children[0].src;
                    // tab切换高亮
                    activeEl.classList.remove("active"); //把当前的高亮效果取消
                    prevEl.classList.add("active"); //给下一个兄弟节点添加高亮
                } else {
                    alert("这是第一张图片了！！！")
                }

            })
            // 右按钮点击事件
            right.addEventListener("click", function () {
                // 获取当前高亮的节点
                var activeEl = that.content.querySelector(".active");
                // 获取当前高亮节点的下一个兄弟节点
                var nextEl = activeEl.nextElementSibling;
                // 是否下一个兄弟节点存在
                if (nextEl) {
                    // 获取下一个兄弟节点里面图片的路径
                    bigImg.src = nextEl.children[0].src;
                    // tab切换高亮
                    activeEl.classList.remove("active"); //把当前的高亮效果取消
                    nextEl.classList.add("active"); //给下一个兄弟节点添加高亮
                } else {
                    alert("这是最后一张图片了！！！")
                }

            })

            // 事件委托 小图片
            ul.addEventListener("click", function (e) {
                // 获取事件源
                var tar = e.target;
                // 判断点击的是不是图片
                if (tar.nodeName === "IMG") {
                    // 切换大图片的路径
                    bigImg.src = tar.src;
                    // tab切换高亮
                    that.content.querySelector(".active").classList.remove("active"); //把原来的高亮效果取消
                    tar.parentNode.classList.add("active");//因为事件时图片  要添加的高亮节点是图片的父元素
                }
            })
        }
    }

    return BigImg;
})

