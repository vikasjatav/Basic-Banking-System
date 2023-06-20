// SearchForm Section code 
let SearchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
      SearchForm.classList.toggle('active');
}
window.onscroll = ()=>{
      SearchForm.classList.remove('active');
}

$(document).ready(function(){

      $(window).scroll(function(){
            //Navbar-bottom scrolling
            if(this.scrollY > 5){
                  $('.navbar-bottom').addClass("sticky");
            }else{
                  $('.navbar-bottom').removeClass("sticky");
            }
      });

      //owl owlCarousel
      $('.owl-carousel').owlCarousel({
            margin: 5,
            mavigation: true,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,

            responsive:{
                  0:{
                        items:1,
                        nav: false
                  },
                  600:{
                        items:2,
                        nav:false
                  },
                  1000:{
                        items:3,
                        nav:false
                  }
            }
      });
});


let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 100000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      Rupees ${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rupees ${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}