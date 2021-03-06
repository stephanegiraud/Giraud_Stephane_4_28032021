!(function (e) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], e)
    : e(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
})(function (e) {
  "use strict";
  var t = "left",
    i = "right",
    r = "up",
    l = "down",
    o = "in",
    a = "out",
    u = "none",
    s = "auto",
    c = "swipe",
    p = "pinch",
    h = "tap",
    d = "doubletap",
    f = "longtap",
    g = "horizontal",
    w = "vertical",
    v = "all",
    T = 10,
    b = "start",
    y = "move",
    E = "end",
    m = "cancel",
    x = "ontouchstart" in window,
    S =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !x,
    O =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !x,
    M = "TouchSwipe";
  (e.fn.swipe = function (t) {}),
    (e.fn.swipe.version = "1.6.18"),
    (e.fn.swipe.defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0,
    }),
    (e.fn.swipe.phases = {
      PHASE_START: b,
      PHASE_MOVE: y,
      PHASE_END: E,
      PHASE_CANCEL: m,
    }),
    (e.fn.swipe.directions = {
      LEFT: t,
      RIGHT: i,
      UP: r,
      DOWN: l,
      IN: o,
      OUT: a,
    }),
    (e.fn.swipe.pageScroll = { NONE: u, HORIZONTAL: g, VERTICAL: w, AUTO: s }),
    (e.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: v,
    });
});
