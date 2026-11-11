let loader = document.querySelector("#preloader");
let cursor = document.querySelector(".cursor");
let homeScroll = document.querySelector("#homeScroll")
let contactScroll = document.querySelector("#contactScroll");
let projectScroll = document.querySelector("#projectScroll");
let profileScroll = document.querySelector("#profileScroll");

let NameInput = document.querySelector("#NameInput");
let EmailInput = document.querySelector("#EmailInput");
let MessageInput = document.querySelector("#MessageInput");

let NameError = document.querySelector("#IncorrectName");
let EmailError = document.querySelector("#IncorrectEmail");

let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let SubmitBtn = document.querySelector("#SubmitBtn");




window.addEventListener("load", function(){

    setTimeout(function(){
        loader.classList.add("hide-loader");
    }, 1000);
});


// customize cursor 

window.addEventListener("mousemove", function(event){
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

document.addEventListener("mouseleave", function(eve){
    if (!eve.relatedTarget) {
        cursor.style.opacity = "0";
    }
});

document.addEventListener("mouseenter", function(eve){
    if (!eve.relatedTarget) {
        cursor.style.opacity = "1";
    }
});

homeScroll.addEventListener("click", function(){

    let Myintro = document.querySelector(".My-intro");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// contact-us scroll kiya click pr 


contactScroll.addEventListener("click", function(){

    let contactSection = document.querySelector("#scrollthis")
    window.scrollTo({
        behavior: "smooth",
        top: 2600
    });
});


// projects scroll kiya click pr 



projectScroll.addEventListener("click", function(){

    window.scrollTo({
        behavior: "smooth",
        top: 1350
    });
});


// profile scroll kiya click pr 


profileScroll.addEventListener("click", function(){

    window.scrollTo({
        behavior: "smooth",
        top: 650
    });
});


// full body reload hone pr refresh ho jayegi 

window.addEventListener("load", function(){
    
    setTimeout(function(){
        window.scrollTo({
        top: 0,
        behavior: "instant"
        });
    },100);
});



// hire me button pr click hone pr scroll niche 

let clickableBtn = document.querySelector("#clickableBtn");

clickableBtn.addEventListener("click", function(){
    let hireBtnscroll = document.querySelector("#scrollthis")
    hireBtnscroll.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});



let confirmation = document.querySelector(".confirmation");

// form submission error showing 

SubmitBtn.addEventListener("click", function(event){

    event.preventDefault();
    let IsValid = true;

    if(NameInput.value.trim() === "" || NameInput.value.trim().length < 3){
        NameError.style.display = "initial";
        IsValid = false;
    }
    else{
        NameError.style.display = "none";
    }

    if(EmailInput.value.trim() === "" || !EmailRegex.test(EmailInput.value.trim())){
        EmailError.style.display = "initial";
        IsValid = false;
    }
    else{
        EmailError.style.display = "none";
    }

    if(IsValid){

        let name = NameInput.value.trim();
        let email = EmailInput.value.trim();
        let message = MessageInput.value.trim();

        let AlreadySavedMsg = `Hiring Request
        Name: ${name}
        Email: ${email}
        Message: ${message}`;

        let WatsaapURL = `https://wa.me/${919250782488}?text=${encodeURIComponent(AlreadySavedMsg)}`;

        window.open(WatsaapURL, "_blank")

        confirmation.classList.add("active");
        NameInput.value = "";
        EmailInput.value = "";
    }
});


// alert mein jo button h usko select kiya 

let closeAlertbtn = document.querySelector("#closeAlertbtn");

closeAlertbtn.addEventListener("click", function(){
    confirmation.classList.remove("active");
});




let navlinks = document.querySelectorAll(".navlinks a");

navlinks.forEach(function(a){

    a.addEventListener("click", function(){

        navlinks.forEach(function(nav){
            nav.classList.remove("active")
        });

        a.classList.add("active");
    });
});