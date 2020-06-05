require.config({
    baseUrl: "js",
    paths: {
        r: "reg"
    }
})


require(["r"], function (Reg) {
    new Reg({
        username: document.querySelector(".username"),
        password: document.querySelector(".password"),
        email: document.querySelector(".email"),
        nickname: document.querySelector(".nickname"),
        rePassword: document.querySelector(".rePassword"),
    })
})