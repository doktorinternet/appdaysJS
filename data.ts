
class MovieData {
    constructor(
        public title: string,
        public image: string,
        public body: string,
        public cast: string[]) { }
}

"<p>" +
    "<span>Starring:</span>" +
"</p>";

var title = "Waking life";
var image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsxMTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
var body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
var cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];



var wakingLife = new MovieData(
    title,
    image,
    body,
    cast
);

var predestination = new MovieData(
    "Predestination",
    "http://is3.mzstatic.com/image/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-d93f-bbf97e2c1c89/source/1200x630bb.jpg",
    "A little mindfucky, but not too much. Somewhat predictable, " +
    "but overall enjoyable as well",
    ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"]
)


