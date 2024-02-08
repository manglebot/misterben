import Photography from "../../Pages/Photography";
import Music from "../../Pages/Music";
import Video from "../../Pages/Video";
import Art from "../../Pages/Art";
// import AiArt from "../../pages/AiArt";
// import AiLogos from "../../pages/AiLogos";

const playData = [
  {
    title: "Music",
    imgSrc: "assets/images/p_music.jpg",
    imgAlt: "Music",
    to: "/pages/music",
    element: Music,
  },
  {
    title: "Video",
    imgSrc: "assets/images/p_video.jpg",
    imgAlt: "Video",
    to: "/pages/video",
    element: Video,
  },
  {
    title: "Photography",
    imgSrc: "assets/images/p_photography.jpg",
    imgAlt: "Photography",
    to: "/pages/photography",
    element: Photography,
  },
  {
    title: "Art",
    imgSrc: "assets/images/p_art.jpg",
    imgAlt: "Art",
    to: "/pages/art",
    element: Art,
  },
  // {
  //   title: "AI Art",
  //   imgSrc: "assets/images/p_ai_art.jpg",
  //   imgAlt: "AI Art",
  //   to: "//pages/aiArt",
  //   element: AiArt,
  // },
  // {
  //   title: "AI logos",
  //   imgSrc: "assets/images/p_ai_logos.jpg",
  //   imgAlt: "AI Logos",
  //   to: "//pages/aiLogos",
  //   element: AiLogos,
  // },
];

export default playData;
