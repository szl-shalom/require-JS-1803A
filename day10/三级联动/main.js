require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        sanji: "sanji"
    }
})


require(["data", "sanji"], function (data, Sanji) {
    new Sanji({
        data: data,
        province: document.querySelector(".province"),
        city: document.querySelector(".city"),
        area: document.querySelector(".area"),
    })

    // console.log(data)
})