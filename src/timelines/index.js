import { gsap, Power1, Power4, Back } from 'gsap';


// Animation for Home Page
const getHomeTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const homeLogo = node.querySelector('.home-logo');
  const homeTextHeading = node.querySelector('.home>h1');
  const homeText = node.querySelectorAll('.home p');

  tl
    .from(node, { duration: 0, display: 'none', autoAlpha: 0, delay })
    .from(homeLogo, { duration: 0.375, autoAlpha: 0, y: 500, ease: Power1.easeOut })
    .from(homeTextHeading, { duration: 0.5, autoAlpha: 0, x: -125, ease: Back.easeIn }, 0.350)
    .from(homeText, { duration: 0.5, autoAlpha: 0, y: -25, ease: Back.easeIn });

  return tl;
}

// Animation for About Page
const getAboutTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const aboutPicture = node.querySelector('.profile-picture-container');
  const aboutTextHeading = node.querySelector('.about-me-text-container>h3');
  const aboutText = node.querySelector('.about-me-text-container p');

  tl
    .from(aboutPicture, { duration: 0.375,  autoAlpha: 0, y: 125, ease: Power1.easeIn }, 0.125)
    .from(aboutTextHeading, { duration: 0.5, autoAlpha: 0, x: -125, ease: Back.easeIn }, 0.350)
    .from(aboutText, { duration: 0.5, autoAlpha: 0, y: -25, ease: Back.easeIn });

  return tl;
}

// Animation for Projects Page
const getPortfolioTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const projectCover = node.querySelectorAll('.project-cover');
  const portfolioLink = node.querySelectorAll('.portfolio-link');

  tl
    .from(projectCover, { duration: 0.375,  autoAlpha: 0, x: -125, ease: Power1.easeIn }, 0.125)
    .from(portfolioLink, { duration: 0.5, autoAlpha: 0, y: -25, ease: Back.easeIn }, 0.350)

  return tl;
}

// Animation for Contact Page
const getContactTimeline = (node, delay) => {
  const tl = gsap.timeline({ paused: true });
  const contactContainer = node.querySelector('.contact-container');
  const formContainer = node.querySelectorAll('.contact-form-container');

  tl
    .from(contactContainer, { duration: 0.375,  autoAlpha: 0, y: 125, ease: Power1.easeIn }, 0.125)
    .from(formContainer, { duration: 0.5, autoAlpha: 0, x: -125, ease: Back.easeIn }, 0.350)

  return tl;
}


export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  
  if (pathname === '/about')
    timeline = getAboutTimeline(node, delay);

  if (pathname === '/projects')
  timeline = getPortfolioTimeline(node, delay);

  if (pathname === '/contact')
  timeline = getContactTimeline(node, delay);

  timeline.play();
}

export const exit = (node) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(node, { duration: 0.15, autoAlpha: 0, ease: Power1.easeOut });
  tl.play();
}
