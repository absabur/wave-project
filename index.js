const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const menu = document.querySelector("#menu");
bars.addEventListener("click",function(){
     menu.style.display = "flex";
     bars.style.display = "none";
     cross.style.display = "block";
})
cross.addEventListener("click",function(){
    menu.style.display = "none";
    bars.style.display = "block";
    cross.style.display = "none";
})
