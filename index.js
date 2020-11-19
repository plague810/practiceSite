//grab a stylesheet in the html document in javascript
//var sheet1 = document.styleSheets[0];

var navbarOpened = false;
var imgHeight1 = $(".background-image").height();
var imgYPosition1 = Math.floor(window.scrollY + document.querySelector('.background-image').getBoundingClientRect().top);

if(navbarOpened){
    imgHeight1 = imgHeight1 + 120;
    setImageHeight(imgHeight1);
} else {
    setImageHeight(imgHeight1);
}

function setImageHeight(imgHeight){
    if(window.innerWidth < 1000){
        imgHeight = imgHeight + 20;
    }
    imgHeight = imgHeight + 'px';

    //insert a rule to css document in javascript
    //sheet1.insertRule("@keyframes fall { to { transform: translateY("+ imgHeight +");}}", 1);

    $(':root').css('--image-height', imgHeight);
}

//having problems with first two conditions
$(".navbar-toggler-icon").click(function(){
    
    setTimeout(function(){
        //get location of images y position from top of page in javascript
        var imgYPosition2 = Math.floor(window.scrollY + document.querySelector('.background-image').getBoundingClientRect().top);
        console.log(imgYPosition1);
        console.log(imgYPosition2);
        if(navbarOpened && imgYPosition1 != imgYPosition2){
            navbarOpened = !navbarOpened;
            
            console.log("first condition true");
            console.log(navbarOpened);
        } else if (!navbarOpened && imgYPosition1 != imgYPosition2){
            navbarOpened = !navbarOpened;
            
            console.log("second condition true");
            console.log(navbarOpened);
        } else if (navbarOpened && imgYPosition1 == imgYPosition2){
            navbarOpened = !navbarOpened;
            
            console.log("third condition true");
            console.log(navbarOpened);
        } else if (!navbarOpened && imgYPosition1 == imgYPosition2){
            navbarOpened = navbarOpened;
            
            console.log("fourth condition true");
            console.log(navbarOpened);
        }
    }, 200);
})

setInterval(createSnowflake, 65);

function createSnowflake(){
    var imgHeight2 = $(".background-image").height();
    
    if (navbarOpened && window.innerWidth < 993){
        imgHeight2 = imgHeight2 + 120;
    }

    const snowflake = document.createElement("i");
    $(snowflake).addClass("fas");
    $(snowflake).addClass("fa-snowflake");
    $(snowflake).css('left', Math.random() * window.innerWidth - 40 + 'px');
    $(snowflake).css('animationDuration', Math.random() * 3 + 2 + 's');
    $(snowflake).css('opacity', Math.random());
    $(snowflake).css('fontSize', Math.random() * 10 + 10 +'px');

    if(imgHeight2 !== imgHeight1){
        setImageHeight(imgHeight2);
        imgHeight1 = imgHeight2;
    }

    $('body').append(snowflake);
    
    setTimeout(() => {
        $(snowflake).remove();
    }, 5000)
}