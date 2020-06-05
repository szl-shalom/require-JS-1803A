define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Reg.prototype = {
        constructor: Reg,

        init: function () {
            this.bindEvent();//绑定事件
        },
        bindEvent: function () {
            var that = this;
            // 遍历数据
            this.data.forEach(function (item) {
                // 给每一个对象上的input绑定失去焦点事件
                item.input.onblur = function () {  //dom0级失去焦点事件可以调用
                    // 正则验证   
                    var flag = item.reg.test(item.input.value);
                    //  根据正则验证的结果  显示对应你的内容
                    item.input.nextElementSibling.innerHTML = flag ? "√" : item.errorInfo;
                    
                    !flag && alert(item.errorInfo)
                    // 返回正则验证结果
                    return flag
                }
            })
            // 提交按钮点击事件
            this.login.addEventListener("click", function () {
                // 遍历每一个input  获取每一个input的失去焦点的返回值
                // 如果每一次返回值都为真 那么最终的返回子为真
                // 所以使用every
                var res = that.data.every(function (item) {
                    return item.input.onblur();
                })
                // 是否为真
                res && that.rePassword.onblur() ? location.href = "http://www.baidu.com" : alert("验证失败")
            })
            console.log(this)
            // 重复密码失去焦点
            this.rePassword.onblur = function () {
                // 是否重复密码和密码一致
                that.rePassword.nextElementSibling.innerHTML = that.rePassword.value === that.password.value ? "√" : "X";
                // 返回
                return that.rePassword.value === that.password.value;
            }
        }
    }

    return Reg
})