define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Reg.prototype = {
        constructor: Reg,
        init: function () {
            this.obj = {
                usernameReg: /^[\u4e00-\u9fa5]{2,8}$/,//用户名
                passwordReg: /^\w{6,12}$/,//密码
                emailReg: /^\w+@\w+\.(com|cn|net)$/,//邮箱
                nicknameReg: /^.{2,12}$/,//昵称
            };
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.username.onblur = function () {
                var res = that.obj.usernameReg.test(this.value);

                if (res) {
                    // 验证通过
                    this.nextElementSibling.innerHTML = "√"
                } else {
                    // 验证没有通过
                    this.nextElementSibling.innerHTML = "X"
                }


                // this.nextElementSibling.innerHTML = res ? "√" : "X"
            }

            this.email.onblur = function () {
                var res = that.obj.emailReg.test(this.value)
                this.nextElementSibling.innerHTML = res ? "√" : "X"
            }

            this.password.onblur = function () {
                var res = that.obj.passwordReg.test(this.value)
                this.nextElementSibling.innerHTML = res ? "√" : "X"
            }

            this.nickname.onblur = function () {
                var res = that.obj.nicknameReg.test(this.value)
                this.nextElementSibling.innerHTML = res ? "√" : "X"
            }
            

            // 重复
            this.rePassword.onblur = function () {
                this.nextElementSibling.innerHTML = this.value === that.password.value ? "√" : "X"
            }
        }
    }

    return Reg;
})