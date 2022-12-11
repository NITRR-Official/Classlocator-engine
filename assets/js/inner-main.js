/**
* Template Name: Avilon - v4.8.1
* Template URL: https://bootstrapmade.com/avilon-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
let svgMap = document.querySelectorAll("#removal div svg");
let ground;
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    // const onscroll = (el, listener) => {
    //   el.addEventListener('scroll', listener)
    // }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    // onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 20
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      // onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      // onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()
  
  // New Page 
  // Hide all elements with class="containerTab", except for the one that matches the clickable grid column
  function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById('b1').style.display = "block";
  }
  
  window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      document.getElementById("pleasewait").style.display="block";
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        window.location.reload();
        alert("Submitted Successfully!");
      })
    });
  });
  
  function alerty(){
    alert("This Feature Will Be Available After 1-2 Week ! Have Patience...");
  };

  function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

let grounds1 = document.getElementById("grounds1");
let firstt1 = document.getElementById("firstt1");
let secondd1 = document.getElementById("secondd1")
const removeSess = ()=>{
  sessionStorage.removeItem("start");
  sessionStorage.removeItem("end");
}
grounds1.onclick = ()=>{removeSess();sessionStorage.setItem("map_no","0");}
firstt1.onclick = ()=>{removeSess();sessionStorage.setItem("map_no","1");}
secondd1.onclick = ()=>{removeSess();sessionStorage.setItem("map_no","2");}

let key = sessionStorage.getItem("map_no");
switch (key) {
  case "1":
    svgMap = svgMap[1];
    ground = document.getElementById("firstt");
    break;
  case "2":
    svgMap = svgMap[2];
    ground = document.getElementById("secondd");
    break;
  default:
    svgMap = svgMap[0];
    ground = document.getElementById("groundd");
    break;
}

//Enabling two finger touch gestures 
const evCache = [];
let prevDiff = -1;

function pointerdownHandler(ev) {
  document.getElementsByTagName("html")[0].style.touchAction="none";
  evCache.push(ev);
}

let originx = 0,originy = 0,scale=1,zoom=1;

function pointerupHandler(ev) {
  document.getElementsByTagName("html")[0].style.touchAction="auto";
  function removeEvent(ev) {
      const index = evCache.findIndex((cachedEv) => cachedEv.pointerId === ev.pointerId);
      evCache.splice(index,1);   
  }
  removeEvent(ev);
  if(evCache.length < 2){
    prevDiff = -1;
  }    
}

function pointermoveHandler(ev) {
  const index = evCache.findIndex((cachedEv) => cachedEv.pointerId === ev.pointerId);
  evCache[index] = ev;    
  if(evCache.length === 2){
    const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);
    if(prevDiff>0){
      if(curDiff > prevDiff){
        svgg = svgMap.getBoundingClientRect();
        let num1 = (evCache[0].clientX + evCache[1].clientX)/2
        let num2 = (evCache[0].clientY + evCache[1].clientY)/2
        const mousex =  num1- (svgg.x);
        const mousey =  num2- (svgg.y);
        ground.scrollBy(originx,originy);
        originx += mousex/(scale*zoom) - mousex/scale;
        originy += mousey/(scale*zoom) - mousey/scale;
        svgMap.style.transform = `scale(${zoom += 0.01 })`
        ground.scrollBy(-originx,-originy);
        scale *= zoom;
      }
      if(curDiff < prevDiff && zoom>1){
        svgg = svgMap.getBoundingClientRect();
        let num1 = (evCache[0].clientX + evCache[1].clientX)/2
        let num2 = (evCache[0].clientY + evCache[1].clientY)/2
        const mousex =  num1- (svgg.x);
        const mousey =  num2- (svgg.y);
        ground.scrollBy(originx,originy);
        originx += mousex/(scale*zoom) - mousex/scale;
        originy += mousey/(scale*zoom) - mousey/scale;
        svgMap.style.transform = `scale(${zoom -= 0.01})`
        ground.scrollBy(-originx,-originy);
        scale *= zoom;
      }
      // console.log(svgg.x,svgg.y)
    }
    prevDiff = curDiff;
  }  
}

function init(){
  svgMap.onpointerdown = pointerdownHandler;
  svgMap.onpointermove = pointermoveHandler;
  svgMap.onpointerup = pointerupHandler;
  svgMap.onpointercancel = pointerupHandler;
  svgMap.onpointerout = pointerupHandler;
  svgMap.onpointerleave = pointerupHandler;
}


// svgMap.style.transform = "scale(2)"