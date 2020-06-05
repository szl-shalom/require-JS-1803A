define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create(); //动态创建弹框
            this.bindEvent(); //绑定事件
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask)

            // 创建DIV
            this.content = document.createElement("div");
            // 修改类名
            this.content.className = "content";
            // 修改内容
            this.content.innerHTML = `
                <h1>${this.title}  <b>X</b></h1>
                <button>${this.okValue}</button><button>${this.noValue}</button>
            `
            // 加入页面
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            // 从content盒子获取对应的内容  
            var btns = this.content.querySelectorAll("button"),
                b = this.content.querySelector("b"),
                that = this;

            // 确定
            btns[0].addEventListener("click", function () {
                that.okClick && that.okClick() //执行确认按钮回调函数
                that.mask.remove();
                that.content.remove();
            })
            // 取消
            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
            // 关闭
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }
    }

    return Dialog
})