const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galeryList = document.querySelector('#gallery');

images.forEach(image => {
    const galeryElements = document.createElement('li');
    const imageEl = document.createElement('img');

    const valueSrc = Object.values(image)[0];
    const valueAlt = Object.values(image)[1];
    
    imageEl.setAttribute('src', valueSrc);
    imageEl.setAttribute('alt', valueAlt);
    imageEl.width = 320;
    imageEl.height = 200;


    galeryElements.insertAdjacentElement('afterbegin', imageEl);

    galeryList.appendChild(galeryElements);
});


