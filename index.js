

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");

document.querySelector("#btn_add").addEventListener("click",openModal);
document.querySelector("#btn_create").addEventListener("click",openModal);

document.querySelector(".btn--close-modal").addEventListener("click",closeModal);
document.querySelector("html").addEventListener("keydown",(event)=>{
    if(event.key==="Escape"){
        closeModal();
    }
})

function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
document.querySelector("#scroll").addEventListener("click",()=>{
    document.querySelector("#FEATURES").scrollIntoView({behavior:"smooth"});
})

document.querySelectorAll(".titles a").forEach(element=>{
    const id=element.getAttribute("href");
    element.addEventListener("click",function(e){
        e.preventDefault();
        console.log(document.querySelector(id))
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    })
})

document.querySelectorAll(".btna").forEach(el=>{
    el.addEventListener("click",function(){
        const id=el.getAttribute("id");
        document.querySelectorAll(".operation").forEach(element=>{
            if(element.getAttribute("id")==="operation"+id[3]){
                element.classList.remove("none");
            }else{
                element.classList.add("none");
            }
        })
        document.querySelectorAll(".btna").forEach(btn=>{
            btn.classList.remove("hover");
        })
        el.classList.add("hover");
})})

document.querySelectorAll(".navBar li").forEach(element=>{
    element.addEventListener("mouseover",function(){
        document.querySelector("#logo").classList.add("mouseOn");
        document.querySelectorAll(".titles li").forEach(li=>{
            li.classList.add("mouseOn");
        })
        
        this.classList.remove("mouseOn")
    })
})
document.querySelectorAll(".navBar li").forEach(element=>{
    element.addEventListener("mouseout",function(){
        document.querySelector("#logo").classList.remove("mouseOn");
        document.querySelectorAll(".navBar li").forEach(el=> {
            el.classList.remove("mouseOn");
        });;
    })
})

//first method of sticky navigation
// window.addEventListener("scroll",function(){
//     const initialCoords=document.querySelector("#FEATURES").getBoundingClientRect();
//     if(window.scrollY>initialCoords.top){
//         document.querySelector(".navBar").classList.add("sticky")
//     }else{
//         document.querySelector(".navBar").classList.remove("sticky")
//     }
// })

//second method of sticky navigation
const header=document.querySelector("#hero")
const navBar=document.querySelector(".navBar")
const headerObserver=new IntersectionObserver(function(entries,observer){
    entry=entries[0];

    if(!entry.isIntersecting){
        navBar.classList.add("sticky")
    }else{
        navBar.classList.remove("sticky")
    }
},{
    root:null,
    threshold:0,
    rootMargin:"130px",
})
headerObserver.observe(header);


const sections=document.querySelectorAll(".section");
const sectionObserver=new IntersectionObserver(function(entries,observer){
    entry=entries[0];
    if(!entry.isIntersecting) return
    entry.target.classList.remove("class_hidden")
    observer.unobserve(entry.target);
},{
    root:null,
    threshold:0.15,
})

sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add("class_hidden");
});

const images=document.querySelectorAll(".image");
const imgObserver=new IntersectionObserver(function(entries,observer){
    entry=entries[0];
    // console.log(entry)
    if(!entry.isIntersecting) return;
    console.log(entry.target.getAttribute("data-src"))
    entry.target.setAttribute("src",entry.target.getAttribute("data-src"));
    // entry.target.src=entry.target.dataset.src; same as before
    entry.target.classList.remove("lazy-image");
    observer.unobserve(entry.target)
},{
    root:null,
    threshold:0.5,
})
images.forEach(img=>{
    imgObserver.observe(img);
})

window.addEventListener("beforeunload",function(e){
    e.preventDefault();
    console.log(e);
    e.returnValue="";
})