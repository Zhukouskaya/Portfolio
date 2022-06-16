// Бургер меню

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('active_burg');
    menuBody.classList.toggle('active_burg');
  })
}

 // Прокрутка меню

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  
function onMenuLinkClick(e) {
const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

  if (iconMenu.classList.contains('active_burg')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('active_burg');
    menuBody.classList.remove('active_burg');
  }

  window.scrollTo({
    top:gotoBlockValue,
    behavior: "smooth"
  });
  e.preventDefault();
}}} 

  //Переключатель кнопок в портфолио // Активные кнопки 

const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioBtn = document.querySelectorAll('.btn-portfolio');
const portfolioImages = document.querySelectorAll('.portfolio__foto_img');

portfolioBtns.addEventListener ('click', (e) => {
  if (e.target.dataset.season) {
    portfolioImages.forEach((img, index) => img.src = `./img/portfolio/${e.target.dataset.season}/${index +1}.jpg`);
    portfolioBtn.forEach((el) => el.classList.remove('btn-active'));
    e.target.classList.add('btn-active');
}})

// Перевод страницы

const i18Obj = {
  en: {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'standard': 'Standard',
    'premium': 'Premium',
    'gold': 'Gold',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  ru: {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'standard': 'Стандарт',
    'premium': 'Премиум',
    'gold': 'Золотой',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const langBtns = document.querySelector('.header__language');
const langBtnsAll = document.querySelectorAll('.lang');
const allDataElement = document.querySelectorAll('[data-i18]');
const inputPhone = document.querySelector('[data-ph]');
const inputTextarea = document.querySelector('[data-text]');

langBtns.addEventListener ('click', (e) => {
  let datasetLanguage = e.target.dataset.language;
  if (datasetLanguage) {
  allDataElement.forEach((el) => {
    el.textContent = i18Obj[e.target.dataset.language][el.dataset.i18];
    langBtnsAll.forEach((el) => el.classList.remove('lang-active'));
    e.target.classList.add('lang-active');
  })}

    if (datasetLanguage == 'ru') {
      inputPhone.setAttribute('placeholder', 'Телефон');
      inputTextarea.setAttribute('placeholder', 'Сообщение')
    }  else if (datasetLanguage == 'en') {
      inputPhone.setAttribute('placeholder', 'Phone');
      inputTextarea.setAttribute('placeholder', 'Message')
  }
})

// Светлая тема

const lightTheme = document.querySelector('.header__theme');
const oneElementLight = document.querySelector('.light__theme');
const allElementLight = document.querySelectorAll('.light__theme');

lightTheme.addEventListener ('click', (el) => {
  if (document.body.classList.contains('_active')) {
    allElementLight.forEach((el) => el.classList.remove('_active'));
  } else allElementLight.forEach((el) => el.classList.add('_active'));
})


