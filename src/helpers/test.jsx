import poet from "../assets/Poet.mp3";
import durak from "../assets/durak.mp3";
import samaya from "../assets/samaya.mp3";
import photo from "../assets/moya.jpg";

export const musics = [
  {
    id: 1,
    title: "Бедный поэт",
    description: "Песня написанная для тебя.",
    img: "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/7a/b9/bb/7ab9bbd7-0ad5-816c-d660-2e7304ac12ab/cover.jpg/1200x1200bb.jpg",
    artist: "Bakr",
    audio: poet,
    color1: "#5d5411",
    color2: "#181818",
  },
  {
    id: 2,
    title: "Дурак",
    description: "Песня написанная для меня.",
    img: "https://s.mxmcdn.net/images-storage/albums5/6/0/3/0/0/9/66900306_500_500.jpg",
    artist: "Jax 02.14",
    audio: durak,
    color1: "rgb(88, 86, 86)",
    color2: "#181818",
  },
  {
    id: 3,
    title: "Самая-самая",
    description: "Песня написанная для моей солнышки.",
    img: photo,
    artist: "Jax 02.14",
    audio: samaya,
    color1: "",
    color2: "#181818",
  },
];
