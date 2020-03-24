const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('nav--active');
  navigation.classList.toggle('navigation');
}

hamburger.addEventListener('click',handleClick);