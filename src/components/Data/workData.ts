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
    href: "developer",
    element: Developer,
  },
  {
    title: "Creative Design",
    imgSrc: "assets/images/w_benandi.jpg",
    imgAlt: "Creative Design",
    href: "/creative",
    element: Creative,
  },
  {
    title: "Marketing Design",
    imgSrc: "assets/images/w_quba.jpg",
    imgAlt: "Marketing Design",
    href: "pages/marketing",
    element: Marketing,
  },
  {
    title: "Website Design",
    imgSrc: "assets/images/w_bspoke.jpg",
    imgAlt: "Website Design",
    href: "pages/website",
    element: Website,
  },
  {
    title: "Print Design",
    imgSrc: "assets/images/w_metwork.jpg",
    imgAlt: "Print Design",
    href: "pages/print",
    element: Print,
  },
  {
    title: "Interactive Design",
    imgSrc: "assets/images/w_tate.jpg",
    imgAlt: "Interactive Design",
    href: "pages/interactive",
    element: Interactive,
  },
];

export default workData;
