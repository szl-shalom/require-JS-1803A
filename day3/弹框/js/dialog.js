/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-03-21 10:44:32
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-03-21 11:58:34
 */


// 定义模块
define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();//动态创建DOM结构
            this.bindEvent();//绑定事件
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,.3);
            `;
            document.body.appendChild(this.mask);

            this.content = document.createElement("div");
            this.content.style = `
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                background:#fff;
                width:300px;
                height:150px;
                text-align:center;
                border-radius:25px;
            `;
            this.content.innerHTML = `
                <h2>${this.title}</h2>
                <button style="width:60px;height:36px;color:#fff;background:tomato;">${this.okValue}</button>
                <button style="width:60px;height:36px;color:#fff;background:tomato;">${this.noValue}</button>
            `
            document.body.appendChild(this.content);
            // 让内容盒子从上至下划入
            V(this.content, {
                top: ["50%", "-50%"],
            })
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this;
            // 确定事件
            btns[0].addEventListener("click", function () {
                // 逻辑与 短路运算   
                // 保证传了回调函数  存在就执行  不存在就不执行
                that.okClick && that.okClick()
                // 调用移除动画
                that.remove();
            })
            // 取消
            btns[1].addEventListener("click", function () {
                that.noClick && that.noClick()
                that.remove();
            })
        },
        remove: function () {

            var that = this;
            // 添加动画  等待动画结束之后 在删除遮罩层和内容盒子
            V(that.content, {
                top: ["150%", "50%"]
            }, {
                complete: function () { //动画完成函数
                    that.mask.remove();
                    that.content.remove()
                }
            })
        }
    }
    return Dialog;
})
