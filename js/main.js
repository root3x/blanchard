document.addEventListener('DOMContentLoaded', function () {

  //* burger
  const burger = document.querySelector('.topnav__burger')
  const burgerMenu = document.querySelector('.topnav__list')
  const burgerMenuLink = document.querySelectorAll('.topnav__link')
  const myBody = document.querySelector('body')

  burger.addEventListener('click', function() {
    burgerMenu.classList.toggle('topnav__list--active')
    burger.classList.toggle('topnav__burger--active')
    if (burgerMenu.classList.contains('topnav__list--active')){
      myBody.style.setProperty('overflow', 'hidden')
    }else {
      myBody.style.removeProperty('overflow')
    }

  })
  burgerMenuLink.forEach(el => el.addEventListener('click', function() {
    burgerMenu.classList.remove('topnav__list--active')
    burger.classList.remove('topnav__burger--active')
    myBody.style.removeProperty('overflow')
  }))


  //* dropdown
  const button = document.querySelectorAll('.bottomnav__link')
  const nav = document.querySelectorAll('.subnav')

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {

      button.forEach(el => {
        if (el != button) {
          el.classList.remove('bottomnav__link--active')
        }
      })

      nav.forEach(el => {
        if (el != nav) {
          el.classList.remove('subnav__active')
        }
      })

      button[i].classList.toggle('bottomnav__link--active')
      nav[i].classList.toggle('subnav__active')
    })
    window.addEventListener('click', e => {

      const target = e.target
      if (!target.closest('.subnav') && !target.closest('.bottomnav__link')) {
        nav[i].classList.remove('subnav__active')
        button[i].classList.remove('bottomnav__link--active')
      }
    })
  }

  //search
  const searchBtnOpen = document.querySelector(".topsearch__btn-open")
  const searchBtnClose = document.querySelector('.topsearch__btn-close')
  const searchForm = document.querySelector(".topsearch__form")

  searchBtnOpen.addEventListener("click", function() {
    searchForm.classList.add("topsearch__form--active")
    this.classList.add("topsearch__btn-open--active")
  })
  searchBtnClose.addEventListener('click', function() {
    searchForm.classList.remove("topsearch__form--active")
    searchBtnOpen.classList.remove("topsearch__btn-open--active")
  })

  document.addEventListener("click", function(e) {
    let target = e.target
    if (!target.closest(".topsearch")) {
    searchForm.classList.remove("topsearch__form--active")
      searchForm.querySelector("input").value = ""
      searchBtnOpen.classList.remove("topsearch__btn-open--active")
    }
  })



  //*  Swiper - hero
  const swiper = new Swiper('.heroslider', {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    slideActiveClass: 'heroslider__swiper-slide-active',
  })

  //*  selector-gallery
  const element = document.querySelector('.gfilter__select')
  const choices = new Choices(element, {
    searchEnabled: false,
    choices: [
      {
        value: 'painting',
        label: 'Живопись'
      },
      {
        value: 'picture',
        label: 'Рисунок'
      },
      {
        value: 'sculpture',
        label: 'Скульптура'
      }
    ],
    itemSelectText: '',
    shouldSort: false,
    silent: true
  });


  //*  Swiper - gallery
  const swiperGallery = new Swiper('.gslider__slider', {
    loop: false,
    spaceBetween: 50,
    autoHeight: true,
    slidesPerView: 6,
    slidesPerGroup: 6,
    grid: {
      rows: 2,
      fill: 'row'
    },
    navigation: {
      nextEl: '.gslider__btn-next',
      prevEl: '.gslider__btn-prev',
      disabledClass: 'slider-btn--disable'
      // lockClass: 'gslider__btn-lock'
    },
    pagination: {
      el: '.gslider__pagination',
      type: 'fraction',
    },
    wrapperClass: 'gslider__swiper-wrapper',
    slideClass: 'gslider__slide',
    // slideActiveClass: 'gallery__swiper-slide-active',
    breakpoints:{
      0:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        grid: {
          rows: 1
        }
      },

      576:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },

      768:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1024:{
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        },

      1330:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      }
    }
  })



  //* catalog tabs  head*/  new
  const tabNavs = document.querySelectorAll('.catalog-tabs__btn')
  const tabPanes = document.querySelectorAll('.catalog__content')

  tabNavs.forEach(btn => {
    btn.addEventListener("click", function (e) {
      let path = this.getAttribute("data-target")

      tabPanes.forEach(el => el.classList.remove("catalog__content--active"))
      tabNavs.forEach(btn => btn.classList.remove("catalog-tabs__btn--active"))

      this.classList.add("catalog-tabs__btn--active");
      document.querySelector(`[data-content='${path}']`).classList.add("catalog__content--active")
    })
  })
  tabPanes.forEach(tabContent => {
    let btns = tabContent.querySelectorAll(".accordion-content__link");
    btns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        let path = this.getAttribute("data-name");
        tabContent.querySelectorAll(".painter").forEach(el => el.classList.remove("painter--active"));
        btns.forEach(btn => btn.classList.remove("accordion-content__link--active"))
        btn.classList.add("accordion-content__link--active");
        tabContent.querySelector(`.painter[data-painter='${path}']`).classList.add("painter--active");
      })
    })
  })


  //* catalog accordion
  const acc = document.querySelectorAll('.accordion')
  const accCont = document.querySelectorAll('.accordion-content')

  for (let g = 0; g < acc.length; g++) {
    acc[g].addEventListener('click', function() {
      acc[g].classList.toggle('accordion--active')
      accCont[g].classList.toggle('accordion-content--active')
    })
  }


  //*  events  show all btn
  const eventShow = document.querySelector('.events__all-show')
  const eventHide = document.querySelector('.events__all-hide')
  const eventCard = document.querySelectorAll('.event-card--invisible')
  const overCard = document.querySelector('.events__over')

  for (let l = 0; l < eventCard.length; l++) {
    eventShow.addEventListener('click', function(){
      eventCard[l].classList.remove('event-card--invisible')
      eCard.classList.remove('event-card--invisible')
      eventShow.classList.add('events__all-show--remove')
      eventHide.classList.add('events__all-hide--visible')
      overCard.classList.add('events__over--visible')
    })
    eventHide.addEventListener('click', function() {
      eventCard[l].classList.add('event-card--invisible')
      // eCard.classList.add('event-card--invisible')
      eventShow.classList.remove('events__all-show--remove')
      eventHide.classList.remove('events__all-hide--visible')
      overCard.classList.remove('events__over--visible')
      if (window.innerWidth <= 902) {
        eCard.classList.add('event-card--invisible')
      } else {
        eCard.classList.remove('event-card--invisible')
      }
    })
  }

  //*  events add class invis
  const eCard = document.querySelector('.event-card:nth-child(3)')

  if (window.innerWidth <= 902 && overCard.classList.contains('events__over--visible')) {
    eCard.classList.add('event-card--invisible')
  } else {
    eCard.classList.remove('event-card--invisible')
  }

  if (window.innerWidth <= 902) {
    eCard.classList.add('event-card--invisible')
  } else {
    eCard.classList.remove('event-card--invisible')
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth <= 902) {
      eCard.classList.add('event-card--invisible')
    } else {
      eCard.classList.remove('event-card--invisible')
    }
  })



  // events slider
  const eventsSlider = document.querySelector('.events__slider')

  let swiperEvent

  const mobileEventsSlider = () => {
    if (window.innerWidth <= 576 && eventsSlider.dataset.mobile == 'false') {
      swiperEvent = new Swiper(eventsSlider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        // autoHeight: true,
        // loop: true,
        slideClass: ('event-card'),

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      })

      eventsSlider.dataset.mobile = 'true'
    }

    if (window.innerWidth > 576) {
      eventsSlider.dataset.mobile = 'false'

        if (eventsSlider.classList.contains('swiper-initialized')) {
          swiperEvent.destroy()
        }
    }
  }

  mobileEventsSlider()

  window.addEventListener('resize', () => {
    mobileEventsSlider()
  })


  //* editions swiper
  const editionsSlider = document.querySelector('.eslider')

  let swiperPublication
  const desctopSlider = () => {

    if (window.innerWidth >= 576 && editionsSlider.dataset.desktop == 'true') {
      swiperPublication = new Swiper(editionsSlider, {

        // runCallbacksOnInit: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: '.eslider__pagination',
          type: 'fraction',
        },

        navigation: {
          nextEl: '.eslider__btn--next',
          prevEl: '.eslider__btn--prev',
          disabledClass: 'slider-btn--disable'
        },
        wrapperClass: 'eslider__wrapper',
        slideClass: 'eslider__slide',
        breakpoints:{
          // 0:{
          //   slidesPerView: 1,
          //   slidesPerGroup: 1,
          //   spaceBetween: 30,
          // },

          // 575:{
          //   slidesPerView: 2,
          //   slidesPerGroup: 2,
          //   spaceBetween: 34,
          // },

          1024:{
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          1330:{
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        }
      })

      editionsSlider.dataset.desktop == 'false'
    }

    if (window.innerWidth <= 576) {
      editionsSlider.dataset.mobile = 'false'

        if (editionsSlider.classList.contains('swiper-initialized')) {
          swiperPublication.destroy()
        }
    }
  }

  desctopSlider()

  window.addEventListener('resize', () => {
    desctopSlider()
  })


  //* editions dropdown
  const publicationBtn = document.querySelector('.checkboxes__mobile');
  const publicationFormLabel = document.querySelectorAll('.checkboxes__label');
  const publicationFormInput = document.querySelectorAll('.checkboxes__input');



  const showActiveCheckbox = () => {
    publicationFormInput.forEach(el => {
      if (el.checked === true) {
        el.parentNode.classList.add('checkboxes__item--active')
      }
    })
  }


  publicationBtn.addEventListener('click', () => {
    publicationBtn.classList.toggle('checkboxes__mobile--active');
    publicationFormLabel.forEach(el => {
      el.parentNode.classList.toggle('checkboxes__item--active')
      showActiveCheckbox();
    })
  })



  for (let i = 0; i < publicationFormInput.length; i++) {
    const el = publicationFormInput[i];
    el.addEventListener('change', () => {
      if (!el.checked && !publicationBtn.classList.contains('checkboxes__mobile--active')) {
        el.parentNode.classList.remove('checkboxes__item--active');
      }

      showActiveCheckbox();
    })
  }

  showActiveCheckbox();


  //*  partners swiper
  const swiperPartners = new Swiper('.partners__slider', {
    loop: false,
    spaceBetween: 50,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.partners__btn--next',
      prevEl: '.partners__btn--prev',
      disabledClass: 'partners__btn--disable'
    },
    wrapperClass: 'partners__wrapper',
    slideClass: 'partners__swiper-slide',
    slideActiveClass: 'partners__swiper-slide-active',
    breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },

      667:{
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1024:{
        spaceBetween: 30,
        slidesPerView: 2,
        },

      1330:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      }
    }
  })



  //*  form mask
  const contactTel = document.querySelector("input[type='tel")
  const ct = new Inputmask("+7(999) 999-99-99")
  ct.mask(contactTel)


  //*  map
  ymaps.ready(init)
    function init(){

        var myMap = new ymaps.Map("map", {
            center: [55.760089, 37.603684],
            zoom: 14
        })

        var myPlacemark = new ymaps.Placemark( [55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/icons/map-mark.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-15, -1]
        })

        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map-btns'>" +
            "<button id='zoom-in' class='map-btn map-btn-plus'></button>" +
            "<button id='zoom-out' class='map-btn map-btn-minus'></button>" +
            "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function () {
                // Снимаем обработчики кликов.
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
            },

            zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}})

        myMap.controls.add(zoomControl)
        myMap.geoObjects.add(myPlacemark)
        myMap.controls.remove('zoomControl')
        myMap.controls.remove('geolocationControl')
        myMap.controls.remove('routeButtonControl')
        myMap.controls.remove('trafficControl')
        myMap.controls.remove('typeSelector')
        myMap.controls.remove('fullscreenControl')
        myMap.controls.remove('rulerControl')
        myMap.controls.remove('searchControl')
        myMap.controls.remove('copyrights')
    }

  //*  validate
  new JustValidate('.contacts-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLenght: 20
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = contactTel.inputmask.unmaskedvalue()
          return Number(phone) && phone.lenght === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minLength: 'Минимум 2 символа'
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Недопустимый формат'
      }
    },
    colorWrong: '#D11616'
  })

  //*  scroll accordion
  const smoothLinks = document.querySelectorAll('.accordion-content__link')

  const accordinScroll = () => {
    // const smoothLinks = document.querySelectorAll('.accordion__link')
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault()
        const act = document.querySelector('.catalog__info')

        act.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

  }

  if (window.innerWidth <= 768)  {
    accordinScroll()
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      accordinScroll()
    } else {
      smoothLinks.destroy()
      accordinScroll().destroy()
    }
  })




 //*  smooth scroll
  const linkNav = document.querySelectorAll('.topnav__link[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (let i = 0; i < linkNav.length; i++) {
      linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
          e.preventDefault(); //отменяем стандартное поведение
          let w = window.pageYOffset,  // производим прокрутка прокрутка
              hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
          t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
              start = null;
          requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
          function step(time) {
              if (start === null) start = time;
              var progress = time - start,
                  r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
              window.scrollTo(0,r);
              if (r != w + t) {
                  requestAnimationFrame(step)
              } else {
                  location.hash = hash  // URL с хэшем
              }
          }
      }, false);
  }


})

