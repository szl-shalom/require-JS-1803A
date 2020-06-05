require.config({
    baseUrl: "js",
    paths: {
        d: "drag"
    }
})

require(["d"], function (Drag) {
    new Drag({
        progress: document.querySelector(".progress"),
        box: document.querySelector(".box"),
        mask: document.querySelector(".mask"),
        select: document.querySelector("select"),
    })
})