document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showList')
    
})

document.addEventListener("DOMContentLoaded", function() {
    // Wait for 2 seconds and then display the message
    setTimeout(function() {
        document.getElementById("message-container").style.display = "block";
    }, 2000);

   
});


document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

window.addEventListener('click' , function(){
   if( document.querySelector('nav ul').classList.toggle('showList') ) {
    document.getElementById("nav ul").style.display = "block";
   }
})