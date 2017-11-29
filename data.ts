class MovieData {
    constructor(
        public title: string,
        public image: string,
        public body: string,
        public cast: string[]) { }
}

const title = "Waking life";
const image = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsx" +
    "MTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
const body = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
const cast = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];

const wakingLife: MovieData = {
    title,
    image,
    body,
    cast,
};

const predestination: MovieData = {
    title: "Predestination",
    image: "http://is3.mzstatic.com/image/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-" +
        "d93f -bbf97e2c1c89/source/1200x630bb.jpg",
    body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"],
};

export const movieData = {
    posts: [wakingLife, predestination],
};
