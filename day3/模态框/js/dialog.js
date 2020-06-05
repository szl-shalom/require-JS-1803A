define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();
            this.bindEvent();
        },
        create: function () {
            if (this.isHasMask) {
                this.mask = document.createElement("div");
                this.mask.className = "mask";
                document.body.appendChild(this.mask);
            }



            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = `
            <h2>
                ${this.title}
                <b>X</b>
            </h2>
            <button>${this.okValue}</button>
            <button>${this.noValue}</button>
            `
            document.body.appendChild(this.content);
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                b = this.content.querySelector("b"),
                that = this;
            // 确定
            btns[0].addEventListener("click", function () {
                that.okClick && that.okClick();  //执行确定回到函数
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })
            // 取消
            btns[1].addEventListener("click", function () {
                that.noClick && that.noClick();  //执行取消回到函数
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })
            // X号
            b.addEventListener("click", function () {
                that.isHasMask && that.mask.remove();
                that.content.remove();
            })

            // 拖拽
            if (this.isHasDrag) {
                var flag = false, pos = {};
                this.content.addEventListener("mousedown", function (e) {
                    flag = true;
                    pos = {
                        x: e.offsetX,
                        y: e.offsetY
                    }
                })

                document.addEventListener("mousemove", function (e) {
                    if (flag) {
                        that.content.style.transform = "translate(0,0)";
                        that.content.style.left = e.pageX - pos.x + "px";
                        that.content.style.top = e.pageY - pos.y + "px"
                    }
                })

                document.addEventListener("mouseup", function () {
                    flag = false;
                })
            }

        }
    }


    return Dialog

})