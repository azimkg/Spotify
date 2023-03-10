import poet from "../assets/Poet.mp3";
import durak from "../assets/durak.mp3";
import samaya from "../assets/samaya.mp3";
import photo from "../assets/moya.jpg";

export const musics = [
  {
    id: 1,
    category: "favorite",
    title: "Мои подборки",
    description:
      "Я хочу представить вам мою подборку песен, слушайте и кайфуйте.",
    img: "https://sun9-28.userapi.com/impf/c858036/v858036150/236a1b/0315esbMzQk.jpg?size=270x0&quality=90&sign=508b29b8d8168fc6b15242dc6329de09&c_uniq_tag=ovnHdgtmzzDRSBCsbstIspbim4E8hLeaHfC4jWFYg94",
    data: [
      {
        id: 1,
        title: "Бедный поэт",
        description: "Песня написанная для тебя.",
        img: "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/7a/b9/bb/7ab9bbd7-0ad5-816c-d660-2e7304ac12ab/cover.jpg/1200x1200bb.jpg",
        artist: "Bakr",
        audio: poet,
        likes: [],
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
        likes: [],
        color1: "rgb(88, 86, 86)",
        color2: "#181818",
      },
      {
        id: 3,
        title: "Самая-самая",
        description: "Песня написанная для моей Солнышки.",
        img: photo,
        artist: "Nurmuhammed Jaqyp, Kuat Abylov, Togjan Muratov",
        audio: samaya,
        likes: [],
        color1: "rgb(246, 89, 89)",
        color2: "#181818",
      },
    ],
  },
];
