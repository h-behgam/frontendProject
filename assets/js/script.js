(function() {
    var navToggleBtn = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.header-nav .nav-list');

    // toggle list on click
    navToggleBtn.onclick = function(e) {
        e.stopPropagation();
        navList.classList.toggle('opened');
    }

    // close list on outside click
    window.addEventListener("click", closeNavList);
    function closeNavList() {
        navList.classList.remove('opened');
    }
})()


// window.addEventListener('scroll', function(){ 
//     //Here you forgot to update the value
//     scrollpos = window.scrollY;

//     if(scrollpos > 10){
//         this.alert(11111);
//     }
//     else {
//         remove_class_on_scroll();
//     }
//     console.log(scrollpos);
// });