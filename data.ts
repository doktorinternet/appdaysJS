import {MovieData} from "./interfaces";

const titel = "Waking life";
const bild = "https://resizing.flixster.com/riYUyvhcJIpEcryjp_6XX_Z-Tr0=/206x305/v1.bTsx" +
    "MTIwODQ5MDtqOzE3NTg5OzEyMDA7MTE3OTsxNTcy";
const text = "Cool little film about interesting corners of life, both awake and asleep." +
    " Makes me think about nice things. Recommend to anyone who likes pretentions philosophy ;)";
const actors = ["Ethan Hawke", "Trevor Jack Brooks", "Lorelei Linklater"];

export const wakingLife: MovieData = {
    body: text,
    cast: actors,
    image: bild,
    title: titel,
};

export const predestination: MovieData = {
    body: "A little mindfucky, but not too much. Somewhat predictable, ut overall enjoyable as well",
    cast: ["Ethan Hawke (again..?)", "Sarah Snook", "Noah Taylor"],
    image: "https://a.ltrbxd.com/resized/sm/upload/3m/1w/jy/xa/kDdUtDsGMQ3OYwoBtEQyJIGPz4V-0-230-0-" +
            "345-crop.jpg?k=0ded074d9d",
    title: "Predestination",
};

export const movieData = {
    posts: [wakingLife, predestination],
};
