import * as angular from "angular";
import * as $ from "jquery";
import { movieData } from "./data";
const app = angular.module("appdays", []);

app.controller("appdays-controller", ($scope) => {
    $scope.message = "Lets review some films yo";
});

let postId = 0;
function renderMovie(movie) {
    postId++;
    let castList = "";
    movie.cast.forEach((actor) => {
        castList += "<li>" + actor + "</li>";
    });
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += "<span class=\"ratingStar\" id=\"starNr" +
            i + "" + postId + "\">" + "&#9733;" + "</span>";
    }
    const newPost =
        "<div class=\"post\" id=\"" + postId + "\">" +
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

movieData.posts.forEach((post) => {
    renderMovie(post);
});

const changeStarRating = (id) => {
    const postID = id.substring(7, id.length);
    const stars = $("#" + postID + " .ratingStar");
    id = id.charAt(6);
    for (let i = 0; i < stars.length; i++) {
        if (i <= id) {
            stars[i].classList.add("filled");
        } else {
            stars[i].classList.remove("filled");
        }
    }
};

$(".stars").on("click", "span", (e) => {
    const i = $(e.target).attr("id");
    changeStarRating(i);
});


