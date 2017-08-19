let windowScroll = true;

// toggle window scrolling
function toggleScrollLock() {
  if(windowScroll){
    document.body.classList.add('locked');
    document.body.style.overflow='hidden';
    windowScroll = false;
  } else {
    document.body.classList.remove('locked');
    document.body.style.removeProperty('overflow');
    windowScroll = true;
  }
}


// implicitly lock window scroll
function scrollLock(){
  document.body.classList.add('locked');
  document.body.style.overflow='hidden';
  windowScroll = false;
}


// implicitly unlock window scroll
function scrollUnlock(){
  document.body.classList.remove('locked');
  document.body.style.removeProperty('overflow');
  windowScroll = true;
}
