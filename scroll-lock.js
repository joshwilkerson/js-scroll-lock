let windowScroll = true;

const preventDefault = (e) => {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

// lock window scrolling
const scrollLock = () => {
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  }
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  windowScroll = false;
}

// unlock window scrolling
const scrollUnlock = () => {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  }
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  windowScroll = true;
}

// toggle window scrolling
const toggleScrollLock = () => {
  if(windowScroll) {
    scrollLock();
  } else {
    scrollUnlock();
  }
}
