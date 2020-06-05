define(function () {
    function BigImg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            // 动态创建
            this.create();
            // 绑定事件
            this.bindEvent();
        },
        create: function () {
            // 创建遮罩层
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = `
            <b>X</b>
                <img src="${this.src}" alt="">
             
            `
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            // 获取关闭按钮
            var b = this.content.querySelector("b"), that = this;
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })

            this.mask.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }
    }

    return;
})