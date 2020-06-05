require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        c: "car",
        d: "dialog",
    }
})


require(["data", "c"], function (data, Car) {
    new Car({
        data: data,
        tbody: document.querySelector("tbody"),
        wrap: document.querySelector(".wrap"),
        result: document.querySelector(".result")
    })
})