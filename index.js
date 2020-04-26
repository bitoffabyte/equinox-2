var aboutnav = document.querySelector("#cloud1")
var faqnav = document.querySelector("#cloud2")
var sponnav = document.querySelector("#cloud3")
var images = document.querySelectorAll(".cloud-img")

var cont = document.querySelector(".content")
var can = document.querySelector("canvas")
var body = document.querySelector("body")

var about = document.querySelector("#about")
var faq = document.querySelector("#faq")
var spon = document.querySelector("#spon")

can.addEventListener("click",function(){
    cont.style.opacity = 0
    cont.style.zIndex = 0
    about.style.display = "none"
    faq.style.display = "none"
    spon.style.display = "none"
    body.style.backgroundColor = "#6696ba" 

    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 1
        images[i].style.zIndex = 100
    }

})

aboutnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    about.style.display = "block"
    faq.style.display = "none"
    spon.style.display = "none"

    body.style.backgroundColor = "#E5DE44"
    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0
    }

})
sponnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    about.style.display = "none"
    faq.style.display = "none"
    spon.style.display = "block"
    body.style.backgroundColor = "#E5DE44"

    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0

    }


})

faqnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    about.style.display = "none"
    faq.style.display = "block"
    spon.style.display = "none"
    body.style.backgroundColor = "#E5DE44"


    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0

    }

})