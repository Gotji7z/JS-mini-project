const timeEl= document.querySelector(".time");
const btntoggle=document.querySelector(".toggle")
//10 : 30 : inner HTML `${hours}: `
function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes =  time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML=`${hours<10 ? `0${hours}`:hours}
    :${minutes<10 ? `0${minutes}`:minutes } 
    :${seconds<10 ? `0${seconds}`:seconds}` //ความหายsecondน้อยกว่า10หรือไม่ถ้าน้อยกว่าให้ใส่0 :=โคล่อน ใส่คั่นแปลว่าถ้าไม่น้อยกว่่า0ให้แสดงปกติ
}         
btntoggle.addEventListener("click",(e)=>{   
    const html=document.querySelector("html")   
    if(html.classList.contains("dark")){ 
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})
setTime()
setInterval(setTime,1000)