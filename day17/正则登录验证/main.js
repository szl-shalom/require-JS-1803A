require.config({
    baseUrl: "js",
    paths: {
        r: "reg",
    }
})



require(["r"], function (Reg) {
    new Reg({
        data: [{
            input: document.querySelector(".username"),
            reg: /^[\u4e00-\u9fa5]{2,8}$/,
            errorInfo: "错误",
        }, {
            input: document.querySelector(".password"),
            reg: /^\w{6,12}$/,
            errorInfo: "错误",


        }, {
            input: document.querySelector(".email"),
            reg: /^\w+@\w+\.(com|cn|net)$/,
            errorInfo: "错误",


        }, {
            input: document.querySelector(".tel"),
            reg: /^1[3-8]\d{9}$/,
            errorInfo: "错误",

        }],
        login: document.querySelector(".login"),
        password: document.querySelector(".password"),
        rePassword: document.querySelector(".rePassword"),
    })
})