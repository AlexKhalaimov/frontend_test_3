;(self.webpackChunkcgp_test_task = self.webpackChunkcgp_test_task || []).push([
  [179],
  {
    70: (e, t, n) => {
      'use strict'
      n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p
      n(927)
    },
    927: () => {
      !(function () {
        const e = document.querySelector('.js-login-btn'),
          t = document.querySelector('.js-popup-container'),
          n = document.querySelector('.js-close-popup'),
          s = document.body,
          c = document.querySelectorAll('.js-scroll-btn'),
          o = document.querySelector('#setup-form input[type=email]'),
          i = document.getElementById('setup-form'),
          u = document.querySelector('.js-submenu'),
          d = document.querySelector('.js-open-submenu'),
          r = document.querySelector('.js-mobile-menu-btn'),
          a = document.querySelector('.header__nav'),
          l = new IntersectionObserver((e) => {
            let [t] = e
            t.isIntersecting &&
              setTimeout(() => {
                o.focus()
              }, 300)
          })
        function p() {
          t.classList.remove('popup-open'), s.classList.remove('body-fixed')
        }
        function m(e) {
          e.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
        function b() {
          u.classList.remove('submenu-open'),
            d.classList.remove('submenu-opened')
        }
        function h() {
          d.matches('.submenu-opened')
            ? b()
            : (u.classList.add('submenu-open'),
              d.classList.add('submenu-opened'))
        }
        n && n.addEventListener('click', p),
          e &&
            e.addEventListener('click', function () {
              t &&
                (t.classList.add('popup-open'), s.classList.add('body-fixed'))
            }),
          window.addEventListener('click', (e) => {
            e.target.matches('.js-popup-container') && p()
          }),
          c.length &&
            c.forEach((e) => {
              const t = document.getElementById(e.getAttribute('href'))
              e.addEventListener('click', (n) => {
                n.preventDefault(),
                  e.matches('.js-focus')
                    ? (m(t), l.observe(i))
                    : (l.unobserve(i), m(t))
              })
            }),
          r &&
            r.addEventListener('click', () => {
              r.classList.toggle('is-active'), a.classList.toggle('is-open')
            }),
          window.matchMedia('screen and (min-width:768px)').matches &&
            (d &&
              d.addEventListener('click', (e) => {
                e.stopPropagation(), h()
              }),
            window.addEventListener('click', () => {
              d.matches('.submenu-opened') && b()
            })),
          window.matchMedia('screen and (max-width:767px)').matches &&
            d &&
            d.addEventListener('click', () => {
              var e
              ;(e = u).style.maxHeight
                ? (e.style.maxHeight = null)
                : (e.style.maxHeight = e.scrollHeight + 'px')
            })
      })()
    },
  },
  0,
  [[70, 666]],
])
