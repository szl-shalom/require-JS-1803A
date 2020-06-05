define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // 动态创建遮罩层和内容盒子
            this.create();
            // 绑定事件
            this.bindEvent();
        },
        create: function () {
            // 动态创建遮罩层
            this.mask = document.createElement("div");//创建DIV
            this.mask.className = "mask";//修改类名
            document.body.appendChild(this.mask);//加入页面
            // 动态创建内容盒子
            this.content = document.createElement("div");
            this.content.className = "content";
            // 修改内容盒子的文本
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            var close = this.content.querySelector(".close"),
                ok = this.content.querySelector(".ok"),
                no = this.content.querySelector(".no"),
                that = this,
                ipts = [...this.content.querySelectorAll("input")];
            // 关闭
            close && close.addEventListener("click", function () {
                that.remove();//删除遮罩层和内容盒子
            })
            // 确定
            ok && ok.addEventListener("click", function () {
                // 执行回调函数
                that.okClick && that.okClick(ipts[0].value, ipts[1].value, ipts[2].value);
                that.remove();//删除遮罩层和内容盒子
            })
            // 取消
            no && no.addEventListener("click", function () {
                that.remove();//删除遮罩层和内容盒子

            })
        },
        remove: function () {
            this.mask.remove();
            this.content.remove();
        }
    }

    return Dialog;
})