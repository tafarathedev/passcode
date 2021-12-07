/* time javascript simple script  with interval initialised*/
 setInterval(()=>{
     // intergrating the moment() js library
let time = moment() // 10:06:10 AM
 // moments Real time
 document.querySelector('.chronos').innerHTML = time.format('HH:mm:ss ') ;
/// moments date 
document.querySelector('.date').innerHTML =  time.format('YYYY/MM/DD ')
     
 } , 1000)
/* background random colro change */
window.onload = function() { // effect works on we page reloads
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // using inline variable
    document.querySelector('.image-time').style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    // using local variable
    // uncomment to see how it works
    // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //   document.body.style.background = bgColor;

}




