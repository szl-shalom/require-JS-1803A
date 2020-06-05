require.config({
    baseUrl: "js",
    paths: {
        c: "car"
    }
})


require(["c"], function (Car) {
    new Car({
        wrap: document.querySelector(".wrap"),
        checkAll: document.querySelector(".check-all"),
        result: document.querySelector(".result"),
    })
})