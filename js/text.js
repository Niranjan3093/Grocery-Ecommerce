window.addEventListener("scroll", ()=>{
    var text = document.querySelector(".martflix");
    var value = window.scrollY;

    if (value > 0 && value < 600) {
        text.style.scale = 100 + value * .01 + "%";
    } else {
        ps.style.scale = "100%";
    }
})