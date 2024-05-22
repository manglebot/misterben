// import Developer from "../../Pages/Developer";
// import Marketing from "../../Pages/Marketing";
// import Website from "../../Pages/Website";
// import Print from "../../Pages/Print";
// import Interactive from "../../Pages/Interactive";
// import Benandi from "../../Pages/Benandi";
// import React from "react";
import { WorkDataItem } from "./types";

const workData: WorkDataItem[] = [
  {
    title: "Web Development",
    imgSrc: "assets/images/me_coder.jpg",
    imgAlt: "Web Developer",
    to: "/pages/developer",
    content:
      "## I started building websites in 1997.\n\nI was lucky to start my career at Arcadia Group, creating fashion pages for TopMan, TopShop, Racing Green, Burton, and several other sites. At this time, websites were very simple. No CSS, just basic HTML and a sprinkling of JavaScript. This started a 15-year streak of building and designing websites. In the very early days, I was always expected to do both, but after going freelance I found there were many jobs in website development. Highlights include Ministry of Sound - my first freelance job, where I was brought in to code pages and fix JavaScript errors, and Syzygy Agency who I worked for over a period of 2 years on many projects including front end page building on sites like Mazda, Mercedes, Jewsons, Boots (TV site), up to senior front end developer (overseeing a team of junior developers) on Curry's and The Link websites.\n\n![Logo's of companies I worked for](/assets/images/early_companies.jpg)\n\nNot long after Syzygy, I got a full-time position at the Tate Gallery, with primary responsibility for Tate Modern branch of the site. I would design and build bespoke websites for every major exhibition, and quite often for the smaller gallery at Tate Modern, where I would have more creative freedom, sometimes meeting the artist in question to see what they wanted for their online presence - often using this for my more experimental bits of coding.![Tate Britain Francis Bacon interactive](/assets/images/tate_bacon_interactives.jpg)\n\nThe biggest two projects I did for Tate were an interactive exhibition guide for Francis Bacon website, and an even more dynamic website that explored the work and life of Naum Gabo. There is a page here about the Francis Bacon exhibition. I had to learn enough ActionScript (which I barely knew at the time), in order to create a site that would be visited by many thousands of people and therefore had to work perfectly, which thankfully it did, and I had amazing feedback on.\n\nMore recently, I learnt WordPress in my own time, and have created a number of sites with this, including 3 sites for B'spoke Coffee House, which included a WooCommerce site. I knew nothing of how to implement this, but after doing research managed to create a site for the client on a very limited budget, which was both aesthetically pleasing, but financially viable. You can read more about it [here on my web design page](/pages/website). I'm not a PHP programmer, but have tweaked pages and pushed code around to do things I wanted.![B'spoke Coffee House websites](/assets/images/bspoke_websites.jpg)\n\nMost recently (Oct 23 - Jan 24), I completed a full stack Web Developer course from Tech Returners. This was a refresher course, which after my career break looking after my children, allowed me to get back in touch with the coding world, and re-learn both front end and back end website coding with JavaScript. It covered the most common requirements of today's code stack, including HTML, CSS (BEM, Tailwind), TypeScript, ES6, React, Node.js, TDD, MVC, Git, JSON, and more. I got to work both solo and in teams, and even learnt pair programming. It massively increased my confidence in coding and has reignited my desire to work again in the web development world.\n\n![Tech Returners Certificate](/assets/images/tech-returners-certificate.jpg)\n\nOh and I also built this site (the one you're looking at right now), originally in vanilla HTML, CSS and bits of JavaScript, but now completely rebuilt as a React site, with React Router and BEM CSS.",
  },

  {
    title: "Benandi",
    imgSrc: "assets/images/w_benandi.jpg",
    imgAlt: "Benandi",
    to: "/pages/benandi",
    content: `You know that design where the client says "anything goes". I don't get it often, and even then, I know it's still almost always got a brand identity to guide it. But just occasionally I get complete freedom to do anything I like, and that's when I have lot of fun, and usually end up learning new things along the way...\n\nBelow is one such example, because it's design for my own music, but the record label releasing it were really happy for me to just play and have fun and in the end were delighted with the results.\n\n## Misterben - Benandi\n\n### I've released a few albums\n\nNaturally I do all my own artwork and publicity material.\nThe latest one with my album Benandi, released on Ping Discs label in 2023.\n[Available Here](https://ping-discs.bandcamp.com/album/benandi)\n\nThe concepts and choice of images is inspired by the music created and the journey I went on to create this album.\n\nHere is the final design.\n\n![Misterben benandi album design](/assets/images/misterben_benandi_front.jpg)\n\n![Misterben benandi album design](/assets/images/misterben_benandi_inner.jpg)\n\nFront cover close up.\n\n![Misterben benandi album design](/assets/images/misterben_benandi_closeup.jpg)\n\nInner close up.\n\n![Misterben benandi album design](/assets/images/misterben_benandi_closeup-inner.jpg)\n\nHere are a couple of earlier concepts.\n\n![Misterben benandi album design](/assets/images/misterben_benandi2.jpg)\n\n![Misterben benandi album design](/assets/images/misterben_album_idea.jpg)\n\nIn After Effects and Premiere Pro, I also created promo shorts for this release such as the examples below.\n\n<div style="text-align: center;"><iframe width="381" height="677" src="https://www.youtube.com/embed/UfKtbYjthv8" title="misterben instagram promo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>\n\n<div style="text-align: center;"><iframe width="381" height="677" src="https://youtube.com/embed/bewsBcwJ7CI" title="misterben youtube promo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>\n\n<div style="text-align: center;"><iframe src="https://www.instagram.com/reel/CxoCjUVpXir/embed" width="581" height="680" frameborder="0" scrolling="no" allowtransparency="true"></iframe></div>`,
  },
  {
    title: "Marketing Design",
    imgSrc: "assets/images/w_quba.jpg",
    imgAlt: "Marketing Design",
    to: "/pages/marketing",
    content: "marketing",
  },
  {
    title: "Website Design",
    imgSrc: "assets/images/w_bspoke.jpg",
    imgAlt: "Website Design",
    to: "/pages/website",
    content: "test",
  },
  {
    title: "Print Design",
    imgSrc: "assets/images/w_metwork.jpg",
    imgAlt: "Print Design",
    to: "/pages/print",
    content: "test",
  },
  {
    title: "Interactive Design",
    imgSrc: "assets/images/w_tate.jpg",
    imgAlt: "Interactive Design",
    to: "/pages/interactive",
    content: "this is the content for the Interactive page",
  },
];

export default workData;
