document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showList')
})

document.addEventListener("DOMContentLoaded", function() {
    // Wait for 2 seconds and then display the message
    setTimeout(function() {
        document.getElementById("message-container").style.display = "block";
    }, 2000);

   
});
