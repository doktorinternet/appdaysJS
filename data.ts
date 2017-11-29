class MovieData {
    constructor(
        public title: string,
        public image: string,
        public body: string,
        public cast: string[]) { }
}

const titel = "Waking life";
const bild = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsx" +
    "MTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
const text = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
const actors = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];

const wakingLife: MovieData = {
    body: text,
    cast: actors,
    image: bild,
    title: titel,
};

const predestination: MovieData = {
    body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"],
    image: "http://is3.mzstatic.com/mage/thumb/Video1/v4/55/90/be/5590beab-6bde-f520-" +
    "d93f -bbf97e2c1c89/source/1200x630bb.jpg",
    title: "Predestination",
};

export const movieData = {
    posts: [wakingLife, predestination],
};
