// intergrate the javsacript  setinterval 

setInterval(() => {
    let time = moment() // 10:06:10 AM
        //  moments time 
    document.querySelector('.chronos').innerHTML = time.format('HH:mm:ss ');
    /// moments date
    document.querySelector('.date').innerHTML = time.format('YYYY/MM/d ')
}, 1000);

/* background random color change */
window.onload = function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // using inline variable
    document.querySelector('.image-time').style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    

}
