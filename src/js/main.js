;(function () {
  const loginBtn = document.querySelector('.js-login-btn')
  const popupContainer = document.querySelector('.js-popup-container')
  const closePopupBtn = document.querySelector('.js-close-popup')
  const body = document.body
  const scrollBtns = document.querySelectorAll('.js-scroll-btn')
  const focusInput = document.querySelector('#setup-form input[type=email]')
  const setupForm = document.getElementById('setup-form')
  const submenu = document.querySelector('.js-submenu')
  const submenuBtn = document.querySelector('.js-open-submenu')
  const mobileMenuBtn = document.querySelector('.js-mobile-menu-btn')
  const menu = document.querySelector('.header__nav')

  const observer = new IntersectionObserver((entries) => {
    let [entry] = entries
    if (entry.isIntersecting) {
      setTimeout(() => focusElement(focusInput), 300)
    }
  })

  function openPopup() {
    if (popupContainer) {
      popupContainer.classList.add('popup-open')
      body.classList.add('body-fixed')
    }
  }

  function closePopup() {
    popupContainer.classList.remove('popup-open')
    body.classList.remove('body-fixed')
  }

  function scrollToEl(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  function focusElement(element) {
    element.focus()
  }
  function openSubmenu() {
    submenu.classList.add('submenu-open')
    submenuBtn.classList.add('submenu-opened')
  }
  function closeSubmenu() {
    submenu.classList.remove('submenu-open')
    submenuBtn.classList.remove('submenu-opened')
  }
  function submenuToggle() {
    if (submenuBtn.matches('.submenu-opened')) {
      closeSubmenu()
    } else {
      openSubmenu()
    }
  }
  function openMobileMenu() {
    mobileMenuBtn.classList.toggle('is-active')
    menu.classList.toggle('is-open')
  }
  function toggleAccordion(elem) {
    if (elem.style.maxHeight) {
      elem.style.maxHeight = null
    } else {
      elem.style.maxHeight = elem.scrollHeight + 'px'
    }
  }

  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', closePopup)
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', openPopup)
  }
  window.addEventListener('click', (e) => {
    if (e.target.matches('.js-popup-container')) {
      closePopup()
    }
  })

  if (scrollBtns.length) {
    scrollBtns.forEach((el) => {
      const target = document.getElementById(el.getAttribute('href'))
      el.addEventListener('click', (e) => {
        e.preventDefault()
        if (el.matches('.js-focus')) {
          scrollToEl(target)

          observer.observe(setupForm)
        } else {
          observer.unobserve(setupForm)
          scrollToEl(target)
        }
      })
    })
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      openMobileMenu()
    })
  }
  if (window.matchMedia('screen and (min-width:768px)').matches) {
    if (submenuBtn) {
      submenuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        submenuToggle()
      })
    }
    window.addEventListener('click', () => {
      if (submenuBtn.matches('.submenu-opened')) {
        closeSubmenu()
      }
    })
  }

  if (window.matchMedia('screen and (max-width:767px)').matches) {
    if (submenuBtn) {
      submenuBtn.addEventListener('click', () => {
        toggleAccordion(submenu)
      })
    }
  }
})()
