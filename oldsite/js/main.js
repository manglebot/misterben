gsap.registerPlugin(ScrollTrigger);

// preload images
const images = gsap.utils.toArray("img");
const loader = document.querySelector(".loader--text");
const updateProgress = (instance) => 
  loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

// rainbor colours text
// function rainbowRandom() {
//   gsap.to(".rainbow", { 
//     duration: gsap.utils.random(0.1, 0.5), 
//     color: "rgb(random(0,155,100), random(1,255,0), random(155,0,1))", 
//     onComplete: rainbowRandom 
//   });
// }
// rainbowRandom();

ScrollTrigger.refresh();

// preload then sideways text scroller
const scrollPics = () => {
  document.body.style.overflow = "auto";
  // document.scrollingElement.scrollTo(0,0);

  //get rid of loader
  gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });
  
  //animate text
  gsap.utils.toArray('aside').forEach((aside, index) => {
    const w = aside.querySelector(".wrapper");
    const [x, xEnd] = (index % 2) ? ["100%", (w.scrollWidth - aside.offsetWidth) * -0.7] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: aside,
        end: "+=" + (window.innerHeight * 1),
        scrub: true 
      }
    });
  });
}

ScrollTrigger.refresh();

// sideways scroll start


// const containers = gsap.utils.toArray('.container');

// containers.forEach(container => {
//   gsap.to(container, {
//     x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//     ease: "none",
//     scrollTrigger: {
//       trigger: container,
//       pin: true,
//       start: "-=100px",
//       end: () => "+=" + (container.scrollWidth - window.innerWidth),
//       scrub: true
//     }
//   });
// });
// sideways scroll end

const containers = gsap.utils.toArray('.container');

containers.forEach(container => {
  const scrollDistance = container.scrollWidth - container.clientWidth;

  gsap.to(container, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      start: "-=100px",
      end: () => `+=${scrollDistance}`,
      scrub: true
    }
  });
});






// Get the width of the content
// const contentWidth = document.querySelector('.logos').offsetWidth;

// Set the width of the background color to match the content width
// gsap.set('.logos .image-container', {   overflow: 'visible', width: '100%', backgroundColor: '#fff' });

// skew
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#title", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 30 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -30);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly,
    //it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.4, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set("#title", {transformOrigin: "right center", force3D: true});

//preloader then run image scroller
imagesLoaded(images).on('progress', updateProgress).on('always', scrollPics);

//old movie style animated text
/* modified from a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

let tl = gsap.timeline({repeat:-1});

for(var i=50; i--;){
  tl.to(".wobble",R(0.03,0.17),{opacity:R(0.6,1),y:R(-1.5,1.5)});
}

function R(max,min){
	return Math.random()*(max-min)+min;
}


// textbox on hover v2

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(imageContainer => {
  const textContainer = imageContainer.querySelector('.text-container');

  imageContainer.addEventListener('mouseenter', () => {
    textContainer.style.opacity = 1;
    // console.log("mouse entered");
  });

  imageContainer.addEventListener('mouseleave', () => {
    textContainer.style.opacity = 0;
    // console.log("mouse left");
  });

  imageContainer.addEventListener('mousemove', (event) => {
    const bounds = imageContainer.getBoundingClientRect();
    textContainer.style.transform = `translate(${event.clientX - bounds.left}px, ${event.clientY - bounds.top}px)`;
    // console.log("bounds set");
  });
});

// hover v2 end