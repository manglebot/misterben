import Photography from "../../Pages/Photography";
import Music from "../../Pages/Music";
import Video from "../../Pages/Video";
import Art from "../../Pages/Art";
// import AiArt from "../../pages/AiArt";
// import AiLogos from "../../pages/AiLogos";

const playData = [
  {
    title: "Music",
    imgSrc: "/src/assets/images/p_music.jpg",
    imgAlt: "Music",
    href: "/pages/music",
    element: Music,
  },
  {
    title: "Video",
    imgSrc: "/src/assets/images/p_video.jpg",
    imgAlt: "Video",
    href: "/pages/video",
    element: Video,
  },
  {
    title: "Photography",
    imgSrc: "/src/assets/images/p_photography.jpg",
    imgAlt: "Photography",
    href: "/pages/photography",
    element: Photography,
  },
  {
    title: "Art",
    imgSrc: "/src/assets/images/p_art.jpg",
    imgAlt: "Art",
    href: "/pages/art",
    element: Art,
  },
  // {
  //   title: "AI Art",
  //   imgSrc: "/src/assets/images/p_ai_art.jpg",
  //   imgAlt: "AI Art",
  //   href: "/pages/aiArt",
  //   element: AiArt,
  // },
  // {
  //   title: "AI logos",
  //   imgSrc: "/src/assets/images/p_ai_logos.jpg",
  //   imgAlt: "AI Logos",
  //   href: "/pages/aiLogos",
  //   element: AiLogos,
  // },
];

export default playData;
