var aboutnav = document.querySelector("#cloud1")
var faqnav = document.querySelector("#cloud2")
var sponnav = document.querySelector("#cloud3")

var aboutnavm = document.querySelector("#cloudm1")
var faqnavm = document.querySelector("#cloudm2")
var sponnavm = document.querySelector("#cloudm3")

var cont = document.querySelector(".content")
var can = document.querySelector("canvas")
var body = document.querySelector("body")

var about = document.querySelector("#about")
var faq = document.querySelector("#faq")
var spon = document.querySelector("#spon")

can.addEventListener("click",function(){
    cont.style.opacity = 0
    cont.style.zIndex = -1
    about.style.display = "none"
    faq.style.display = "none"
    spon.style.display = "none"
    can.style.zIndex = -1
    

})

aboutnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19

    about.style.display = "block"
    faq.style.display = "none"
    spon.style.display = "none"


    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0
    }

})
sponnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19

    about.style.display = "none"
    faq.style.display = "none"
    spon.style.display = "block"


    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0

    }


})

faqnav.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19

    about.style.display = "none"
    faq.style.display = "block"
    spon.style.display = "none"



    for(var i= 0;i<images.length;i++){
        images[i].style.opacity = 0.2
        images[i].style.zIndex = 0

    }

})






aboutnavm.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19
    about.style.display = "block"
    faq.style.display = "none"
    spon.style.display = "none"



})
sponnavm.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19

    about.style.display = "none"
    faq.style.display = "none"
    spon.style.display = "block"



})

faqnavm.addEventListener("click",function(){
    console.log("oi")
    cont.style.opacity = 1
    cont.style.zIndex = 20
    can.style.zIndex = 19

    about.style.display = "none"
    faq.style.display = "block"
    spon.style.display = "none"



})



// faq
var fq1 = document.querySelector("#faqq1")
var fq2 = document.querySelector("#faqq2")
var fq3 = document.querySelector("#faqq3")
var fq4 = document.querySelector("#faqq4")
var fq5 = document.querySelector("#faqq5")
var fq6 = document.querySelector("#faqq6")
var fq7 = document.querySelector("#faqq7")  


var fa1 = document.querySelector("#faqa1")
var fa2 = document.querySelector("#faqa2")
var fa3 = document.querySelector("#faqa3")
var fa4 = document.querySelector("#faqa4")
var fa5 = document.querySelector("#faqa5")
var fa6 = document.querySelector("#faqa6")
var fa7 = document.querySelector("#faqa7")


fq1.addEventListener('click' , ()=>{
    if(fa1.style.display != "block"){
        fa1.style.display = "block"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }

})
fq2.addEventListener('click' , ()=>{
    if(fa2.style.display != "block"){
        fa2.style.display = "block"
        fa1.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }
})

fq3.addEventListener('click' , ()=>{
    if(fa3.style.display != "block"){
        fa3.style.display = "block"
        fa2.style.display = "none"
        fa1.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }
})



fq4.addEventListener('click' , ()=>{
    if(fa4.style.display != "block"){
        fa4.style.display = "block"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa1.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }
})

fq5.addEventListener('click' , ()=>{
    if(fa5.style.display != "block"){
        fa5.style.display = "block"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa1.style.display = "none"
        fa6.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }
})
fq6.addEventListener('click' , ()=>{
    if(fa6.style.display != "block"){
        fa6.style.display = "block"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa1.style.display = "none"
    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
    }
})

fq7.addEventListener('click' , ()=>{
    if(fa7.style.display != "block"){
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none"
        fa7.style.display = "block"

    }
    else{
        fa1.style.display = "none"
        fa2.style.display = "none"
        fa3.style.display = "none"
        fa4.style.display = "none"
        fa5.style.display = "none"
        fa6.style.display = "none" 
        fa7.style.display = "none" 
    }

})