"use strict";
exports.__esModule = true;
var MovieData = /** @class */ (function () {
    function MovieData(Title, Image, Body, Cast) {
        this.Title = Title;
        this.Image = Image;
        this.Body = Body;
        this.Cast = Cast;
    }
    return MovieData;
}());
var title = "Waking life";
var image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsx" +
    "MTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
var body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
var cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];
var wakingLife = {
    Body: body,
    Cast: cast,
    Image: image,
    Title: title
};
var predestination = {
    Body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    Cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"],
    Image: "http://is3.mzstatic.com/image/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-" +
        "d93f -bbf97e2c1c89/source/1200x630bb.jpg",
    Title: "Predestination"
};
exports.movieData = {
    posts: [wakingLife, predestination]
};
//# sourceMappingURL=data.js.map