let movieData = require("./data");
let $ = require("jquery");

var postId = 0;
function renderMovie(movie) {
    postId++;
    var castList = "";
    
    movie.cast.forEach(actor => {
        castList += "<li>" + actor + "</li>";
    });
    
    var stars = "";
    for (let i = 0; i < 5; i++) {
        stars += "<span class=\"ratingStar\" id=\"starNr" +
            i + "" + postId + "\">" + "&#9733;" + "</span>";
    }
    var newPost =
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
    // document.getElementById("content").innerHTML = newPost;
}

movieData.posts.forEach(post => {
    console.log("Hej hej");
    renderMovie(post);
});

var changeStarRating = function (id) {
    // console.log(id)
    var postId = id.substring(7, id.length);
    // console.log("postid " + postId);
    var stars = $("#" + postId + " .ratingStar");
    id = id.charAt(6);
    for (let i = 0; i < stars.length; i++) {
        if (i <= id) {
            stars[i].classList.add("filled");
        } else {
            stars[i].classList.remove("filled");
        }
    }
}

$(".stars").on("click", "span", function (e) {
    let i = $(e.target).attr("id");
    changeStarRating(i);
});