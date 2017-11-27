var MovieData = /** @class */ (function () {
    function MovieData(title, image, body, cast) {
        this.title = title;
        this.image = image;
        this.body = body;
        this.cast = cast;
    }
    return MovieData;
}());
"<p>" +
    "<span>Starring:</span>" +
    "</p>";
var title = "Waking life";
var image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsxMTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
var body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
var cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];
var movie = new MovieData(title, image, body, cast);
