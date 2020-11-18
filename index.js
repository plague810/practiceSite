//var sheet1 = document.styleSheets[0];
//console.log(sheet1);
var navbarOpened = false;
var imgHeight1 = document.querySelector(".background-image").height;

if(navbarOpened){
    imgHeight1 = imgHeight1 + 160;
    setImageHeight(imgHeight1);
} else {
    setImageHeight(imgHeight1);
}

function setImageHeight(imgHeight){
    if(window.innerWidth < 1400){
        imgHeight = imgHeight + 20;
    }
    imgHeight = imgHeight + 'px';
    //console.log("image height is " + imgHeight);
    //sheet1.insertRule("@keyframes fall { to { transform: translateY("+ imgHeight +");}}", 1);
    document.querySelector(':root').style.setProperty('--image-height', imgHeight)
}

document.querySelector(".navbar-toggler-icon").addEventListener("click", function(){
    if(navbarOpened){
        navbarOpened = false;
    } else {
        navbarOpened = true;
    }
})

setInterval(createSnowflake, 65);

function createSnowflake(){
    var imgHeight2 = document.querySelector(".background-image").height;
    if (navbarOpened){
        imgHeight2 = imgHeight2 + 160;
    }
    //console.log(imgHeight2);
    const snowflake = document.createElement("i");
    snowflake.classList.add("fas");
    snowflake.classList.add("fa-snowflake");
    snowflake.style.left = Math.random() * window.innerWidth - 40 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 +'px';
    if(imgHeight2 !== imgHeight1){
        setImageHeight(imgHeight2);
        imgHeight1 = imgHeight2;
    }

    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000)
}