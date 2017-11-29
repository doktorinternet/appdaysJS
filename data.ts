class MovieData {
    constructor(
        public Title: string,
        public Image: string,
        public Body: string,
        public Cast: string[]) { }
}

const title = "Waking life";
const image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsx" +
    "MTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
const body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
const cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];

const wakingLife: MovieData = {
    Body: body,
    Cast: cast,
    Image: image,
    Title: title,
};

const predestination: MovieData = {
    Body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    Cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"],
    Image: "http://is3.mzstatic.com/image/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-" +
    "d93f -bbf97e2c1c89/source/1200x630bb.jpg",
    Title: "Predestination",
};

export const movieData = {
    posts: [wakingLife, predestination],
};
