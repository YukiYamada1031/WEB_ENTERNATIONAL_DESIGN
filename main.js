const mainvisual = document.querySelector('#mainvisual');
const news = document.querySelector('#news');
const aboutImage = document.querySelector('#about img');
const aboutText = document.querySelector('#about .content');
const businessTitle = document.querySelector('#business .section-title');
const bus = document.querySelector('.flex-business');
const companyTitle = document.querySelector('#company .section-title');



mainvisual.animate(
  {
    opacity: [0, 1]
  },
  {
    duration: 2400,
    easing: 'ease',
    fill: 'forwards',
  }
);

const show1 = (entries) => {
  const key1 = {
    opacity: [0, 1],
    translate: ['100px 0', 0],
  };

  const option1 = {
    duration: 2000,
    easing: 'ease',
    fill: 'forwards',
  };

  entries[0].target.animate(key1, option1);
};

firstObserver = new IntersectionObserver(show1);
firstObserver.observe(news);

const show2 = (entries) => {
  key2 = {
    opacity: [0, 1],
  };

  option2 = {
    duration: 2000,
  };

  entries[0].target.animate(key2, option2);
};

secondObserver = new IntersectionObserver(show2);
secondObserver.observe(aboutImage);

const show3 = (entries) => {
  key3 = {
    opacity: [0, 1],
    translate: ['0 100px', 0],
  };

  option3 = {
    duration: 2000,
  };

  entries[0].target.animate(key3, option3);
};

thirdObserver = new IntersectionObserver(show3);
thirdObserver.observe(aboutText);

const show4 = (entries) => {
  key4 = {
    opacity: [0, 1],
  };

  option4 = {
    duration: 2000,
    fill: 'forwards',
    easing: 'ease',
  };

  entries[0].target.animate(key4, option4);
};

forthObserver = new IntersectionObserver(show4);
forthObserver.observe(businessTitle);
forthObserver.observe(companyTitle);

const companyText = document.querySelector('.flex-text');
const companyImage = document.querySelector('.flex-company img');

const show5 = (entries) => {
  const key5 = {
    opacity: [0,1],
    translate: ['0 100px' , 0],
  };

  const option5 = {
    duration: 2000,
    fill: 'forwards',
    easing: 'ease',
  };

  entries[0].target.animate(key5, option5);
};

const fifthObserver = new IntersectionObserver(show5);
fifthObserver.observe(companyText);

const show6 = (entries) => {
  const key6 = {
    opacity: [0,1],
    translate: ['100px 0', 0],
  };

  const option6 = {
    duration: 2800,
    fill: 'forwards',
    easing: 'ease',
  };

  entries[0].target.animate(key6, option6);
};

const sixthObserver = new IntersectionObserver(show6);
sixthObserver.observe(companyImage);

const buses = document.querySelectorAll('.bus');

const shows = (entries) => {
  const keys = {
    opacity: [0,1],
    translate: ['0 100px', 0],
  };

  const options = {
    duration: 2400,
    fill: 'forwards',
    easing: 'ease',
  };

  entries[0].target.animate(keys, options);
};

const observers = new IntersectionObserver(shows);
observers.observe(buses);


