;(() => {
  'use strict'
  var r = {},
    t = {}
  function e(n) {
    if (t[n]) return t[n].exports
    var s = (t[n] = { exports: {} })
    return r[n](s, s.exports, e), s.exports
  }
  ;(e.m = r),
    (e.x = (r) => {}),
    (e.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
    (e.p = ''),
    (() => {
      var r = { 666: 0 },
        t = [],
        n = (r) => {},
        s = (s, p) => {
          for (var o, a, [l, u, h, f] = p, c = 0, x = []; c < l.length; c++)
            (a = l[c]), e.o(r, a) && r[a] && x.push(r[a][0]), (r[a] = 0)
          for (o in u) e.o(u, o) && (e.m[o] = u[o])
          for (h && h(e), s && s(p); x.length; ) x.shift()()
          return f && t.push.apply(t, f), n()
        },
        p = (self.webpackChunkcgp_test_task =
          self.webpackChunkcgp_test_task || [])
      function o() {
        for (var n, s = 0; s < t.length; s++) {
          for (var p = t[s], o = !0, a = 1; a < p.length; a++) {
            var l = p[a]
            0 !== r[l] && (o = !1)
          }
          o && (t.splice(s--, 1), (n = e((e.s = p[0]))))
        }
        return 0 === t.length && (e.x(), (e.x = (r) => {})), n
      }
      p.forEach(s.bind(null, 0)), (p.push = s.bind(null, p.push.bind(p)))
      var a = e.x
      e.x = () => ((e.x = a || ((r) => {})), (n = o)())
    })()
  e.x()
})()
