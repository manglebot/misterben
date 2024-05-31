import gsap, { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export { gsap, ScrollTrigger, ScrollToPlugin, useGSAP };
