import Developer from "../../Pages/Developer";
import Creative from "../../Pages/Creative";
import Marketing from "../../Pages/Marketing";
import Website from "../../Pages/Website";
import Print from "../../Pages/Print";
import Interactive from "../../Pages/Interactive";

const workData = [
  {
    title: "Web Development",
    imgSrc: "assets/images/me_coder.jpg",
    imgAlt: "Web Developer",
    to: "/pages/developer",
    element: Developer,
  },
  {
    title: "Creative Design",
    imgSrc: "assets/images/w_benandi.jpg",
    imgAlt: "Creative Design",
    to: "/pages/creative",
    element: Creative,
  },
  {
    title: "Marketing Design",
    imgSrc: "assets/images/w_quba.jpg",
    imgAlt: "Marketing Design",
    to: "/pages/marketing",
    element: Marketing,
  },
  {
    title: "Website Design",
    imgSrc: "assets/images/w_bspoke.jpg",
    imgAlt: "Website Design",
    to: "/pages/website",
    element: Website,
  },
  {
    title: "Print Design",
    imgSrc: "assets/images/w_metwork.jpg",
    imgAlt: "Print Design",
    to: "/pages/print",
    element: Print,
  },
  {
    title: "Interactive Design",
    imgSrc: "assets/images/w_tate.jpg",
    imgAlt: "Interactive Design",
    to: "/pages/interactive",
    element: Interactive,
  },
];

export default workData;
