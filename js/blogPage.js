window.addEventListener("scroll", ()=>{
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach(rev =>{
        var windowHeight = window.innerHeight;
        var revTop = rev.getBoundingClientRect().top;

        if (revTop < windowHeight - 200) {
            rev.classList.add("animate");
        } else {
            rev.classList.remove("animate");
        }
    })
})

var likeButton = document.querySelector(".likeBtn");
var likeCount = document.querySelector(".likeCount");

likeButton.addEventListener("click", ()=>{
    likeCount.value = parseInt(likeCount.value) + 1;
    likeCount.style.color = "green";
    if(likeCount.value > 1)
    {
        likeCount.value = 0;
    }
})

window.addEventListener("scroll", ()=>{
    var sticky = document.querySelector(".firstBar");
    // var ps = document.querySelector(".descPhoto");
    var value = window.scrollY;

   if (value > 3900) {
    sticky.style.display = "none";
   }else
   {
    sticky.style.display = "";
   }
})