require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})


require(["t"], function (Tab) {
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        underLine: document.querySelector(".underLine"),
    })
})