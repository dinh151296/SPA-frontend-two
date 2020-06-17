var menuResponsive = {
  init: function(){
    this.menuScroll();
    this.showMenu();
    // this.menuDropdown();
  },
  menuScroll: function(){
    var lastScrollTop = 0;
    var wrapper = document.querySelector('.wrapper');
    var header = document.querySelector('.header');
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if (st > 120 ){
      if (st > lastScrollTop){
        header.classList.remove('header-scroll');

      } else{
        header.classList.add('header-scroll');
      }
    }else
    header.classList.remove('header-scroll');

     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   }, false);
},

showMenu: function(){
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.nav-list');
  var headerNav = document.querySelector('.header nav');
  var wrapperOverlay = document.querySelector('.wrapper-overlay');
  burger.addEventListener('click', function(){
    burger.classList.toggle('burger-last');
    headerNav.style.display ="block";
    menu.classList.add('menu-responsive-left');
    wrapperOverlay.style.display ="block";
    menu.classList.remove('menu-responsive-none');
    // wrapperOverlay.onclick = () => {
    //   burger.classList.remove('burger-last');
    //   headerNav.style.display ="none";
    //   menu.classList.remove('menu-responsive-left');
    //   wrapperOverlay.style.display ="none";
    //   console.log('arowfunction');
    // }


    wrapperOverlay.addEventListener('click', function(e){
      burger.classList.remove('burger-last');
      headerNav.style.display ="none";
      menu.classList.remove('menu-responsive-left');
      wrapperOverlay.style.display ="none";
      menu.classList.add('menu-close');
    });
  });
},
// menuDropdown: function(){
//   var navLink = document.querySelectorAll('.nav-list li a');
//   var menuDropdown = document.querySelector('.nav-dropdown');
//   console.log(navLink);
   // var w = screen.width;
   // console.log(w);
  // if (w =1022){
  //  navLink.addEventListener('click', function(event){
  //   console.log(event.target);
  //  });
  // }else console.log('no click');
  // navLink.addEventListener('click', function(event){
  //   menuDropdown.classList.toggle('show-nav-link');
  // });
//   for(var i, i < navLink.length(), i++){
//     console.log(navLink[i]);
//   }
// },
}

menuResponsive.init();








