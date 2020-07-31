// HOME AND NAVBAR EFFECT
$(document).ready(function () {
    /*Change navbar when scroll page*/
    $(document).scroll(function () {
        let positionNav = $(".navbar");
        if(positionNav.offset().top >= 100){
            positionNav.addClass("navChange");
        }else{
            positionNav.removeClass("navChange");
        }
    });

    /* Change li navbar when scroll at current position page */
    var posHome = 0;
    var posProducts = 0;
    var posLocations = 0;
    var posAboutUs = 0;
    var posContact = 0;
    var posFeedbacks = 0;
    function addAndRemoveClassChange(Id){
        $(Id).addClass("navLiChange");
        // remove class first, add class second - border line in the botton li.navbar
        $(Id).children().removeClass("nav-after");
        $(Id).children().addClass("nav-afterChange");
    }
    $(document).scroll(function(){ /* đặt trong event scroll do phần product có height thay đổi được => biến vị trí thay đổi liên tục*/
        posHome = 0;
        posProducts = $("#Products").offset().top -250;
        posLocations = $("#Locations").offset().top -250;
        posAboutUs = $("#About_Us").offset().top -250;
        posFeedbacks = $("#Feedbacks").offset().top -250;
        posContact = $("#Contact").offset().top -250;
        $(".nav-item").removeClass("navLiChange");
        // add again class first, remove class second
        $(".nav-link:not(.title)").addClass("nav-after"); 
        $(".nav-link").removeClass("nav-afterChange"); 
        if( $(document).scrollTop() < posProducts) {
            addAndRemoveClassChange("#liHome");
        } else if(  $(document).scrollTop() < posLocations){
            addAndRemoveClassChange("#liProducts");
        } else if(  $(document).scrollTop() < posAboutUs){
            addAndRemoveClassChange("#liLocations");
        } else if( $(document).scrollTop() < posFeedbacks ) {
            addAndRemoveClassChange("#liAboutUs");
        } else if(  $(document).scrollTop() < posContact){
            addAndRemoveClassChange("#liFeedbacks");
        } else {
            addAndRemoveClassChange("#liContact");
        }
        // When window scroll to Top, add Class to the last liNavBar
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            //Remove class from all liNavBar
            $(".nav-item").removeClass("navLiChange");
            $(".nav-link").removeClass("nav-afterChange");
            // add Class to the last liNavBar
            addAndRemoveClassChange("#liContact");
        }
    })
    
    /* Scroll page when click li-navbar */
    $("#liHome").click(function () {
        $("html,body").animate({
            scrollTop: 0
        },"slow");
    });
    $("#liProducts").click(function () { 
        $("html,body").animate({
            scrollTop: $("#Products").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liLocations").click(function () { 
        $("html,body").animate({
            scrollTop: $("#Locations").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liAboutUs").click(function () {
        $("html,body").animate({
            scrollTop: $("#About_Us").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liContact").click(function(){
        $("html,body").animate({
            scrollTop:  $("#Contact").offset().top - $(".navbar").outerHeight()
        },"slow")
    });
    $("#liFeedbacks").click(function(){
        $("html,body").animate({
            scrollTop:  $("#Feedbacks").offset().top - $(".navbar").outerHeight()
        },"slow")
    });

    /* When @media screen width < 810 px, the dropdown button is appear, script make when u click this button -> show the navbarLi menu*/
    $(".navbar-nav .btn-dropdown").click(function(){
        $(".navbar-nav ul.contain-list").fadeToggle();
        $(".navbar-nav ul.contain-list").css("display","flex");
    });
});

// ABOUT US SCRIPT
$(document).ready(function(){
    $("#About_Us div.flex-child").hover(
        function(){
            $(this).find("div.doFade").slideDown("fast");
            $(this).find("div.doFade").css("display", "flex");
        }
        ,function(){
            $(this).find("div.doFade").slideUp("fast");
            $(this).find("div.doFade").children("p").slideUp("fast");
        });
    $("div.doFade a").hover(
        function(){
            $(this).siblings("p").slideDown("fast");
        }
    );
});
// FEEDBACKS EFFECT/SCRIPT
const rexBlank = new RegExp(/.+/);
const rexEmail = new RegExp(/^(([\w\d]+?([-._+])[\w\d]+)|([\w\d]+))@\w+[-\.][A-Za-z]{2,}(\.[A-Za-z]{2,})?$/);
const rexPhone = new RegExp(/^\d{8,10}$/);
let input ;
let feedbacksInvalid;
let validateReturn = false;
//---------------------------------
function toggle(element, bolean, index){
    if( bolean === 1){ // nếu input hợp lệ
        element.classList.remove("invalid");
        element.classList.add("valid");
        feedbacksInvalid[index].style.display = "none";
    } else {    // nếu input không hợp lệ
        element.classList.remove("valid");
        element.classList.add("invalid");
        feedbacksInvalid[index].style.display = "block";
    }
}
function checkValidate(elem,index){
    if(rexBlank.test(elem.value) === false ){
        feedbacksInvalid[index].textContent = "Please fill out this field";
        toggle(elem, 0, index);
    } else {
        toggle(elem, 1, index);
        if(elem.name === "email" && rexEmail.test(elem.value) === false){
            feedbacksInvalid[index].textContent = "Email format is incorrect";
            toggle(elem, 0, index);
        }
        if(elem.name === "phone" && rexPhone.test(elem.value) === false){
            feedbacksInvalid[index].textContent = "Phone number only digit and must be more than 7, less than 10 digit";
            toggle(elem, 0, index);
        }
    }
}
//-------------------------------------
$(document).ready(function(){
    //after load page, get Array list assign to input(global variable)
    //after load page, get Feedback invalid list assign to feedbacksInvalid(global variable)
    input = document.querySelectorAll(`input[data-add="validate"]`);
    input = Array.from(input); // cover it from nodelist to array
    feedbacksInvalid = document.querySelectorAll(`.invalid-feedback`);

    input.forEach(function(elem, index){
        function checkSubmit(){
            return input.every( (elem) => {
                return elem.classList.contains("valid");
            });
        }
        elem.addEventListener("keyup",function(){
            checkValidate(this,index);
            // When only value change, set validateReturn for shound do onsubmit or not
            validateReturn = checkSubmit();
        });
    });
});
let sendFeedback = () => { // Khai báo bên ngoài ready event để tạo global function, vì onsubmit trong form nó tìm global function, not local
    event.preventDefault();
    if( validateReturn === true){ // Nếu hợp lệ thì thực hiện
        $(".modalChe").fadeIn();
        $('button[data-dismiss="modal"]').click(function(){
            $(".modalChe").fadeOut();
        });
    } else {
        const input = document.querySelectorAll(`input[data-add="validate"]`);
        input.forEach(function(elem, index){
            checkValidate(elem,index);
        });
    }
}