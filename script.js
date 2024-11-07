let logo = document.querySelectorAll('.logo')
let isLogoShowed = true;

function main() {
    setInterval(function () {
        logo.style = isLogoShowed ? 'filter: sepia(25%)' : 'finter: invert(1)';
        isLogoShowed = !isLogoShowed;
        //console.log(isLogoShowed)
    }, 1000)
}

function goHome() {
    window.open('/', '_self')
}

document.addEventListener('DOMContentLoaded', () => {

    main();

    const homeDescription = document.getElementById('homeDesc')
    const projectsDescription = document.getElementById('projectsDesc')
    const skillsDescription = document.getElementById('skillsDesc')
    const homiesDescription = document.getElementById('homiesDesc')

    const homeButton = document.getElementById('homeButton');
    const projectsButton = document.getElementById('projectsButton');
    const skillsButton = document.getElementById('skillsButton');
    const homiesButton = document.getElementById('homiesButton');

    const breadcrumb = document.getElementById('breadcrumb')
    const title = document.getElementById('titlePage');


    function showPage(page) {
        homeDescription.classList.remove('active');
        projectsDescription.classList.remove('active');
        skillsDescription.classList.remove('active')
        homiesDescription.classList.remove('active')

        if (page === 'home') {
            title.innerHTML = 'About Me'
            breadcrumb.innerHTML = String.raw`
        <li><button onclick="goHome()">home</button></li>
        <li><button>about me</button></li>
        `
            homeDescription.classList.add('active');
        } else if (page === 'projects') {
            breadcrumb.innerHTML = String.raw`
        <li><button onclick="goHome()">home</button></li>
        <li><button>projects</button></li>
        `
            projectsDescription.classList.add('active');
            title.innerHTML = 'Projects'
        } else if (page === 'skills') {
            breadcrumb.innerHTML = String.raw`
        <li><button onclick="goHome()">home</button></li>
        <li><button>skills</button></li>
        `
            skillsDescription.classList.add('active')
            title.innerHTML = 'Skills'
        } else if (page === 'homies') {
            breadcrumb.innerHTML = String.raw`
        <li><button onclick="goHome()">home</button></li>
        <li><button>homies</button></li>
        `
            homiesDescription.classList.add('active')
            title.innerHTML = 'Homies';
        } else {
            homeDescription.classList.add('active');
        }
    }


    homeButton.addEventListener('click', () => showPage('home'))
    projectsButton.addEventListener('click', () => showPage('projects'))
    skillsButton.addEventListener('click', () => showPage('skills'))
    homiesButton.addEventListener('click', () => showPage('homies'))
})