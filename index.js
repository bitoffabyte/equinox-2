var aboutnav = document.querySelector("#cloud1")
var faqnav = document.querySelector("#cloud2")
var sponnav = document.querySelector("#cloud3")
var cont = document.querySelector(".content")
var can = document.querySelector("canvas")
var about = document.querySelector("#about")
var faq = document.querySelector("#faq")
var spon = document.querySelector("#spon")

can.addEventListener("click",function(){
    cont.style.opacity = "0"
    about.style.display = "none"
    spon.style.display = "none"
    faq.style.display = "none"
})

aboutnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = "1"
    about.style.display = "block"
    spon.style.display = "none"
    faq.style.display = "none"


})
sponnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = "1"
    spon.style.display = "block"
    faq.style.display = "none"
    about.style.display = "none"


})

faqnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = "1"
    faq.style.display = "block"
    about.style.display = "none"
    spon.style.display = "none"

})