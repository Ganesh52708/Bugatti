document.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    var secondVideo = document.querySelector('.second-video');
    

    // Calculate the percentage of the scroll
    var percentage = Math.min(scrollY / windowHeight, 1);
    
    // Move the second video from right to left based on scroll percentage
    if (window.innerWidth <= 768){
        secondVideo.style.transform = `translateX(${-percentage * 460}vw)`;
       
     } 
     else{
        secondVideo.style.transform = `translateX(${-percentage * 100}vw)`;
}


});


