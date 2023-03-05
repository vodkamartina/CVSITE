const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.lenght;

function showSection(element) 
{
    for (let i = 0; i < totalSection; i++) 
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
/* hire me */

document.querySelector(".hire-me").addEventListener("click", function () 
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})



const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => 
    {
    asideSectionTogglerBtn();
    })
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
/* hire me */

function kopyala(){
    var metin = document.getElementById("numaraam");
    metin.select();
    document.execCommand("copy");
} 
function kopyala(){
    var metin = document.getElementById("numaraam");
    metin.select();
    document.execCommand("copy");
} 