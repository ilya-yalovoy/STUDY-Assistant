//обработчик кнопки море на УСЛУГАХ
var servicesBtn = document.querySelector('#services-more'),
    servicesArw = document.querySelector('#services-more-arrow'),
    servicesItem= document.getElementsByClassName('services__item'),
    servicesItemStat= document.getElementsByClassName('services__item-stat'),
    servicesBool = true;

servicesBtn.addEventListener('click', function() {
    if (servicesBool) {
        for (var key of servicesItem) {
            key.style.display = 'block';
        }
        servicesArw.style.transform = 'rotate(180deg)';
        servicesBool = false;
    } else {
        for (var key of servicesItem) {
            key.style.display = 'none';
        }
        for (var key of servicesItemStat) {
            key.style.display = 'block';
        }
        servicesArw.style.transform = 'rotate(0deg)';
        servicesBool = true;
    }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        '@0.10': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });

  var answerBtn = document.getElementsByClassName('answer__btn'),
      arrBtn    = Array.from(answerBtn),
      answerTxt = document.getElementsByClassName('answer__text')
      arrTxt    = Array.from(answerTxt);
  arrBtn.forEach(function(item, i, arr) {
    item.addEventListener('click', function() {
            item.classList.toggle('active-btn');
            arrTxt[i].classList.toggle('active');
        });
    });
    

var menu = document.getElementById('menuBtn'),
    link = document.getElementsByClassName('menu__link'),
    menubtn = document.getElementById('headerBtn');

menubtn.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    menubtn.classList.toggle('active-bar');
})
for(var key of link) {
    key.addEventListener('click', function() {
        menu.classList.toggle('menu-active');
        menubtn.classList.toggle('active-bar');
    })
}