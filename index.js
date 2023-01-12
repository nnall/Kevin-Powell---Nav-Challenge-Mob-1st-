const navBtn = document.querySelector('.nav__btn');
const navList = document.querySelectorAll('.nav__list');


const CRL = document.querySelector('.CRL__logo__link');
const signIn = document.querySelector('.sign-in');



navBtn.addEventListener('click', function(){

    navList.forEach(function(navListChunk){
        navListChunk.classList.contains('displayNavList') ? 
        navListChunk.classList.remove('displayNavList') : navListChunk.classList.add('displayNavList');
    })
    
})


// Addevent listeer for window size at certain point,  1000px wide shoudl trigger a funciton to test wether CRL.classList.contains('.move__left'), and if it does remove it, or if it doesn't add it

// also est whether  signIn.classList.contains('.move__right') and if it does remove it, and if it doesn't, add it. 

