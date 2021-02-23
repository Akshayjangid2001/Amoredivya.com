burger = documant.quearySelector('.burger')
navbar = documant.quearySelector('.navbar')
navList = documant.quearySelector('.navList')
rightNav = documant.quearySelector('.rightNav')

burger.addEventlitstener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-class-resp');

})