/* time javascript simple script */








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

// intergrating the moment() js library
let time = moment() // 10:06:10 AM
let Tformat = time.format('hh:mm:ss ')
let Dformat = time.format('YYYY/MM/DD ')

console.log(Tformat)
console.log(Dformat)
 document.querySelector('.chronos').innerHTML = Tformat;
/// THIS IS THE  DARTE JS EVENT



document.querySelector('.date').innerHTML = Dformat
