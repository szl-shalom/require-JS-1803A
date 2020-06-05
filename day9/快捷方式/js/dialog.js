define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();//动态创建弹框
            this.bindEvent();//绑定事件
        },
        create: function () {
            // 创建遮罩层
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask)
            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.HTML;
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var close = this.content.querySelector(".close"),
                finish = this.content.querySelector(".finish"),
                del = this.content.querySelector(".del"),
                that = this,
                ipts = [...this.content.querySelectorAll("input")];

            // 是否禁用删除按钮
            del.disabled = this.isDelFlag;

            // 非空验证
            this.empty()

            // 用户输入事件
            // 遍历所有input
            ipts.forEach(function (item) {
                // 给每一个input添加输入事件
                item.addEventListener("input", function () {
                    that.empty();//非空验证
                })
            })

            //关闭
            close.addEventListener("click", function () {
                that.noClick && that.noClick()
                that.remove();
            })
            // 完成
            finish.addEventListener("click", function () {
                that.okClick && that.okClick(ipts[0].value, ipts[1].value);
                that.remove();
            })
            // 删除
            del.addEventListener("click", function () {
                that.delClick && that.delClick();
                that.remove();
            })
        },
        remove: function () {
            this.mask.remove();
            this.content.remove();
        },
        empty: function () {
            var myName = this.content.querySelector(".myName"),
                addRess = this.content.querySelector(".address"),
                finish = this.content.querySelector(".finish");

            if (myName.value === "" || addRess.value === "") {
                finish.disabled = true;
            } else {
                finish.disabled = false;
            }
        }
    }

    return Dialog;
})