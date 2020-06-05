require.config({
    baseUrl: "js",
    paths: {
        b: "banner",
        V: "../lib/a"
    }
})


require(["b"], function (Banner) {
    new Banner({
        container: document.querySelector(".container"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        index: 0,
    })
})