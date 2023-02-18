// random hexadecimal number generator
function getRandomColor(){
    return Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
};

// random color background
document.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('clrchng')){
        e.target.style.backgroundColor = '#' + getRandomColor();
    }
});