// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// var tl = gsap.timeline()

// tl.to("#page1",{
//     y:"100vh",
//     scale:0.6,
//     duration:0
// })
// tl.to("#page1",{
//     y:"30vh",
//     duration:1,
//     delay:1
// })
// tl.to("#page1",{
//     y:"0vh",
//     rotate:360,
//     scale:1,
//     duration:0.7
// })

var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 2,
}, 'a')

.to(".text h1", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
}, 'a') 

.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
}, 'a') 






var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem){
   
var h1s = elem.querySelectorAll("h1");
var index = 0;
var animating = false;
document.querySelector("#main")
.addEventListener("click", function(){
     if(!animating){
        animating = true;
        gsap.to(h1s[index],{
            top:"-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function(){
                gsap.set(this._targets[0], { top: "100%" });
                animating = false;
            }
         });
         index === h1s.length-1 ? (index = 0) : index++;
         gsap.to(h1s[index],{
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
         })
     }
})
})
