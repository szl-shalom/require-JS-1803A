/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2020-04-01 16:35:53
 * @LastEditors: 史志龙
 * @LastEditTime: 2020-04-01 16:56:33
 */

define(function () {
    function Banner(opt) {
        if (!opt.title) {
            throw new Error("title没有传！！！！")
            return 
        }


        Object.assign(this, {
            index: 0,
        }, opt);
        this.init();
    }

    Banner.prototype = {
        constrtctor: Banner,
        init: function () {
            this.create();
            this.bindEvent();
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
            `;
            document.body.appendChild(this.mask);

            this.content = document.createElement("div");
            this.content.innerHTML = `
                <h2>${this.title}</h2>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `;
            this.content.style = `
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                padding:20px;
                background:#fff;
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this;
            btns[0].onclick = function () {
                that.mask.remove();
                that.content.remove();
            }


            btns[1].onclick = function () {
                that.mask.remove();
                that.content.remove();
            }
        }

    }

    return Banner;
})