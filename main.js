const mainvisual = document.querySelector('#mainvisual');
/*
const news = document.querySelector('#news');
const about = document.querySelector('#about');
const business = document.querySelector('#business');
const company = document.querySelector('#company');
*/


mainvisual.animate(
  {
    opacity: [0,1]
  },
  {
    duration: 2400,
    easing:'ease',
    fill:'forwards',
  }
);