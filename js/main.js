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
    // autoplay: {
    //   delay: 7000,
    //   disableOnInteraction: false
    // },
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

  //* catalog tabs  head*/
  const tabNavs = document.querySelectorAll('.catalog-tabs__btn')
  const tabPanes = document.querySelectorAll('.catalog__content')

  for (let i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener('click', function(e){
      e.preventDefault()
      const activeTabAttr = e.target.getAttribute('data-target')

      for (let j = 0; j < tabNavs.length; j++) {
        const contentAttr = tabPanes[j].getAttribute('data-content')

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add('catalog-tabs__btn--active')
          tabPanes[j].classList.add('catalog__content--active')
        } else {
          tabNavs[j].classList.remove('catalog-tabs__btn--active')
          tabPanes[j].classList.remove('catalog__content--active')
        }
      }
    })
  }

  //* catalog accordion
  const acc = document.querySelectorAll('.accordion')
  const accCont = document.querySelectorAll('.accordion__content')

  for (let g = 0; g < acc.length; g++) {
    acc[g].addEventListener('click', function() {
      acc[g].classList.toggle('accordion__btn-active')
      accCont[g].classList.toggle('accordion__content--active')
    })
  }


  //* catalog painer switcher
  const tabsPainter = document.querySelectorAll('.catalog__wrapper')
  const painterLink = document.querySelectorAll('.accordion__link')
  const painter = document.querySelectorAll('.painter')

  if (tabsPainter) {
    const tabsHandler = (tabLinks) => {
      tabLinks.forEach(el => {
        const path = el.dataset.name;
        el.addEventListener('click', (e) => {
          e.preventDefault()
          painterLink.forEach(el => {el.classList.remove('accordion__link--active')})
          e.target.classList.add('accordion__link--active')
          painter.forEach(el => {el.classList.remove('painter--active')})
          document.querySelector(`[data-painter="${path}"]`).classList.add('painter--active')
        })
      })
    }

    tabsPainter.forEach(el => {
      const tabsLinks = el.querySelectorAll('.accordion__link')
      tabsHandler(tabsLinks)
    })
  }

  //*  events  show all btn
  const eventShow = document.querySelector('.events__all-show')
  const eventHide = document.querySelector('.events__all-hide')
  const eventCard = document.querySelectorAll('.event-card__invisible')
  const overCard = document.querySelector('.events__over')

  for (let l = 0; l < eventCard.length; l++) {
    eventShow.addEventListener('click', function(){
      eventCard[l].classList.remove('event-card__invisible')
      eventShow.classList.add('events__all-show--remove')
      eventHide.classList.add('events__all-hide--visible')
      overCard.classList.add('events__over--visible')
    })
    eventHide.addEventListener('click', function() {
      eventCard[l].classList.add('event-card__invisible')
      eventShow.classList.remove('events__all-show--remove')
      eventHide.classList.remove('events__all-hide--visible')
      overCard.classList.remove('events__over--visible')
    })
  }

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
  const publicationFormLabel = document.querySelectorAll('.checkboxes__label')
  const publicationFormInput = document.querySelectorAll('.checkboxes__input')
  const checkboxesItem = document.querySelectorAll('.checkboxes__item')
  const checkboxesClose = document.querySelectorAll('.checkboxes__btn-close')

  const showActiveCheckbox = () => {
    publicationFormInput.forEach(el => {
      if (el.checked === true) {
        el.parentNode.classList.add('checkboxes__item--active', 'checkboxes__item--show')
      }
    })
  }


  publicationBtn.addEventListener('click', () => {
    publicationBtn.classList.toggle('checkboxes__mobile--active')
    // publicationBtnArrow.classList.toggle('arrow-active');
    checkboxesItem.forEach(el => {
      el.classList.toggle('checkboxes__item--active')
      showActiveCheckbox()
    })
  })


  const publicationCheck = () => {
    for (let i = 0; i < publicationFormInput.length; i++) {
      const el = publicationFormInput[i]
      el.addEventListener('change', () => {
        if (!el.checked && !publicationBtnArrow.classList.contains('arrow-active')) {
          el.parentNode.classList.remove('checkboxes__item--active', 'checkboxes__item--show')
        }

        showActiveCheckbox()
      })
    }

    showActiveCheckbox()
  }

  //*  partners swiper
  const swiperPartners = new Swiper('.partners__slider', {
    loop: false,
    spaceBetween: 50,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.partners__btn--next',
      prevEl: '.partners__btn--prev',
      lockClass: 'partners__btn--lock'
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


        myMap.geoObjects.add(myPlacemark)
        myMap.controls.remove('zoomControl')
        myMap.controls.remove('geolocationControl')
        myMap.controls.remove('routeButtonControl')
        myMap.controls.remove('trafficControl')
        myMap.controls.remove('typeSelector')
        myMap.controls.remove('fullscreenControl')
        myMap.controls.remove('rulerControl')
        myMap.controls.remove('searchControl')
        myMap.controls.remove('fullscreenControl')
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
  const smoothLinks = document.querySelectorAll('.accordion__link')

  const accordinScroll = () => {
    // const smoothLinks = document.querySelectorAll('.accordion__link')
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault()
        const act = document.querySelector('.painter--active')

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


})

