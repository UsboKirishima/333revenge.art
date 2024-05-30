let logo = document.querySelectorAll('.logo')
let isLogoShowed = true;


function main() {
    setInterval(function () {
        logo.style = isLogoShowed ? 'filter: sepia(25%)' : 'finter: invert(1)';
        isLogoShowed = !isLogoShowed;
        console.log(isLogoShowed)
    }, 1000)
}