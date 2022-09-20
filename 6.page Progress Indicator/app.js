const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollprogress()

function scrollprogress(){
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight//*ความสูงของเพจscroll - ความสูงของPageแบบไม่มีscrollจะได้ความสูงของpage
    const scrollTop = document.documentElement.scrollTop
    const scrollpercentage =  (scrollTop/pageHeight)*100   //*แปลงหน่วยเป็นpercent *100
    console.log(scrollpercentage+("%"))
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollpercentage+"%"
}