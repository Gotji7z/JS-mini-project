const openBtn=document.querySelector(".open-btn");
const closeBtn=document.querySelector(".close-btn");
const modalcontainer=document.querySelector(".modal-container");

openBtn.addEventListener("click",()=>{
    modalcontainer.classList.add("show");
})
closeBtn.addEventListener("click",()=>{
    modalcontainer.classList.remove("show");
})