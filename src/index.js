$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Advertising", "Discounting", "Selling", "Buying", "Exchanging"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Advertising", "Discounting", "Selling", "Buying", "Exchanging"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// DOM manipulation
const data={ }
// initialization
document.addEventListener("DOMContentLoaded", () => {
  fetchItems();
  
});

// Render items
function renderItems(data) {
    const div = document.getElementById("cart");
    const container = document.createElement("div");
    container.className = "create";
    container.innerHTML = `
    <img src="${data.image_Url}"/> 
    
    <div class="details">
    <h2>${data.item}</h2>
    <h4 class="description">${data.Description}</h4>
    <h3 class="price"> Ksh${data.price}</h3>
    <div class="like-section">
    <span id="like-count" class="likes">0</span>likes
    <button id="like-button" class="like-button">♥</button>
    </div>
  </div>
    
    <div class="buttons">
    <button>Add to cart</button>
    <button id = "add-button">Purchase item</button>
    </div>
    `;
    div.appendChild(container);
    container.querySelector('#add-button').addEventListener('click', ()=>{
       
      container.remove()
      deleteItem(data.id)
  })
  
  // like count
  const likeCount = document.getElementById('like-count');  
       const increament = document.getElementById('like-button');
       increament.addEventListener('click', ()=>{
            likeCount.innerHTML++;
       });
  }
  // fetch items
function fetchItems() {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((items) => items.forEach((item) => renderItems(item)));
      
  }