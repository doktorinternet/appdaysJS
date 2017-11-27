function renderMovie(movie) {
    var castList = "";
    movie.cast.forEach(function (actor) {
        castList += ("<li>" + actor + "</li>");
    });
    var newPost = "<div class=\"post\">" +
        "<div class=\"image\">" +
        "<img src=\"" + movie.image + "\" alt=\"\"></img>" +
        "</div>" +
        "<div class=\"alltext\">" +
        "<div class=\"textbox\">" +
        "<h2>" + movie.title + "</h2>" +
        "<p>" + movie.body + "</p>" +
        "<p>" + "<span>" + "Starring:" + "</span>" + "</p>" +
        "<ul class=\"castList\">" +
        castList +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>";
    document.getElementById("content").innerHTML = newPost;
}
renderMovie(movie);
