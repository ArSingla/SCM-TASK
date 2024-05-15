function init() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + 20 + "px"
  crsr.style.top = dets.y + 20 + "px"
})




var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 27%",
    end:"top 0",
    scrub:3,
  }
})
tl.to(".page1 h1",{
  x:-100,
  duration:1,
},"anim")
tl.to(".page1 h2",{
  x:100,
  duration:1,
},"anim")
tl.to(".page1 video",{
  width:"90%",
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -115%",
    end:"top -130%",
    scrub:3,
  }
})
tl2.to(".main",{
  backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -390%",
    end:"top -420%",
    scrub:3,
  }
})

tl3.to(".main",{
  backgroundColor:"#000000"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mousemove",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "400px"
    crsr.style.height = "350px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
  })
})

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     purple.style.display="block"
//     purple.style.opacity="1"
//   })
//   elem.addEventListener("mouseleave",function(){
//     purple.style.display="none"
//     purple.style.opacity="0"
//   })
// })

Shery.hoverWithMediaCircle(".hvr", {videos: ["https://player.vimeo.com/progressive_redirect/playback/849754069/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=ccc2cae362c9dfeaa80d0d551f689ffd33978a6ae71884bf6d0ade0a5d2bdedc", "https://player.vimeo.com/progressive_redirect/playback/864678797/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=da05839941d3076281409239340e9eeb3d5dc41050a2c4b6f29737dbd39d5993"]});
Shery.makeMagnet(".magnet");

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to(".page6 video",{
      opacity: 1,
      duration: 1,
      ease: Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
  gsap.to(".page6 video",{
    opacity: 0,
    duration: 1,
    ease: Power4
  })
})



let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
