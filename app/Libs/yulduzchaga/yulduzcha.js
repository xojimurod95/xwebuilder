
$(function () {

    var rating = ('5');

    // $(".counter").text(rating);

    // $("#rateYo1").on("rateyo.init", function () { console.log("rateyo.init"); });

    // $("#rateYo1").rateYo({
    //     rating: rating,
    //     numStars: 5,
    //     precision: 3,
    //     starWidth: "64px",
    //     spacing: "5px",
    //     rtl: true,
    //     multiColor: {

    //         startColor: "#000000",
    //         endColor: "#ffffff"
    //     },
    //     onInit: function () {

    //         console.log("On Init");
    //     },
    //     onSet: function () {

    //         console.log("On Set");
    //     }
    // }).on("rateyo.set", function () { console.log("rateyo.set"); })
    //     .on("rateyo.change", function () { console.log("rateyo.change"); });

    // $(".rateyo").rateYo();

    $(".rateyo-readonly-widg").rateYo({

        rating: rating,
        starWidth: "30px",
        numStars: 5,
        precision: 2,
        minValue: 1,
        maxValue: 5,
        halfStar: true,
        spacing: "5px",
    }).on("rateyo.change", function (e, data) {

        console.log(data.rating);
    });
});
