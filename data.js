"use strict";
exports.__esModule = true;
var MovieData = /** @class */ (function () {
    function MovieData(title, image, body, cast) {
        this.title = title;
        this.image = image;
        this.body = body;
        this.cast = cast;
    }
    return MovieData;
}());
// "<p>" +
//     "<span>Starring:</span>" +
// "</p>";
var title = "Waking life";
var image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsxMTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
var body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
var cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];
var wakingLife = {
    title: title,
    image: image,
    body: body,
    cast: cast
};
var predestination = {
    title: "Predestination",
    image: "http://is3.mzstatic.com/image/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-d93f-bbf97e2c1c89/source/1200x630bb.jpg",
    body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"]
};
exports.movieData = {
    posts: [wakingLife, predestination]
};
//# sourceMappingURL=data.js.map