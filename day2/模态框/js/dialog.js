define(function () {
    function Dialog(opt) {
        Object.assign(this, { //设置默认参数以及合拼参数
            // 默认参数
            title: "我是默认标题",
            okValue: "确定",
            noValue: "取消",
            isHasMask: true,
            background: "#fff",
        }, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();//创建dom结构
            this.bindEvent();//绑定事件
        },
        create: function () {
            // 动态创建遮罩层
            if (this.isHasMask) {
                this.mask = document.createElement("div");//创建一个DIV
                this.mask.className = "mask"; //赋值类名为mask
                document.body.appendChild(this.mask);//添加到页面
            }
            // 动态创建内容盒子
            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.style.background = this.background;
            this.content.innerHTML = `
                <h3>${this.title}<b>X</b></h3>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `;
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                b = this.content.querySelector("b"),
                that = this;
            btns[0].addEventListener("click", function () {
                that.okClick && that.okClick();
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })

            btns[1].addEventListener("click", function () {
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })


            b.addEventListener("click", function () {
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })
        }
    }

    return Dialog;
})