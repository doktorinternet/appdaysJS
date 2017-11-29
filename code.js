"use strict";
exports.__esModule = true;
var $ = require("jquery");
var data_1 = require("./data");
var postId = 0;
function renderMovie(movie) {
    postId++;
    var castList = "";
    movie.cast.forEach(function (actor) {
        castList += "<li>" + actor + "</li>";
    });
    var stars = "";
    for (var i = 0; i < 5; i++) {
        stars += "<span class=\"ratingStar\" id=\"starNr" +
            i + "" + postId + "\">" + "&#9733;" + "</span>";
    }
    var newPost = "<div class=\"post\" id=\"" + postId + "\">" +
        "<div class=\"image\">" +
        "<img src=\"" + movie.image + "\" alt=\"\"></img>" +
        "</div>" +
        "<div class=\"alltext\">" +
        "<div class=\"textbox\">" +
        "<h2>" + movie.title + "</h2>" +
        "<p class=\"stars\">" + stars + "</p>" +
        "<p>" + movie.body + "</p>" +
        "<p>" + "<span>" + "Starring:" + "</span>" + "</p>" +
        "<ul class=\"castList\">" +
        castList +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>";
    $("#content").append(newPost);
}
data_1.movieData.posts.forEach(function (post) {
    renderMovie(post);
});
var changeStarRating = function (id) {
    var postID = id.substring(7, id.length);
    var stars = $("#" + postID + " .ratingStar");
    id = id.charAt(6);
    for (var i = 0; i < stars.length; i++) {
        if (i <= id) {
            stars[i].classList.add("filled");
        }
        else {
            stars[i].classList.remove("filled");
        }
    }
};
$(".stars").on("click", "span", function (e) {
    var i = $(e.target).attr("id");
    changeStarRating(i);
});
//# sourceMappingURL=code.js.map