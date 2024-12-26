let logo = document.querySelector('.logo');
let isLogoShowed = true;

/*function main() {
    setInterval(function () {
        logo.style.filter = isLogoShowed ? 'sepia(25%)' : 'invert(1)';
        isLogoShowed = !isLogoShowed;
    }, 1000)
}*/

function goHome() {
    window.open('/', '_self')
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
           const playButton = document.createElement('button');
            playButton.innerHTML = '▶️ Play Music';
            playButton.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                padding: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `;

            
            playButton.onclick = () => {
                audio.play();
                playButton.remove();
            };
            
            document.body.appendChild(playButton);
        });
    }

    //main();

    const homeDescription = document.getElementById('homeDesc')
    const projectsDescription = document.getElementById('projectsDesc')
    const skillsDescription = document.getElementById('skillsDesc')
    const homiesDescription = document.getElementById('homiesDesc')

    const homeButton = document.getElementById('homeButton');
    const projectsButton = document.getElementById('projectsButton');
    const skillsButton = document.getElementById('skillsButton');
    const homiesButton = document.getElementById('homiesButton');

    const logoButton = document.getElementById('homiesButton');

    const breadcrumb = document.getElementById('breadcrumb')
    const title = document.getElementById('titlePage');


    function showPage(page, updateHistory = true) {
        homeDescription.classList.remove('active');
        projectsDescription.classList.remove('active');
        skillsDescription.classList.remove('active');
        homiesDescription.classList.remove('active');

        if (updateHistory) {
            history.pushState({ page }, '', `/${page}`);
        }

        if (page === 'home') {
            title.innerHTML = 'About Me';
            breadcrumb.innerHTML = String.raw`
                <li><button onclick="goHome()">home</button></li>
                <li><button>about me</button></li>
            `;
            homeDescription.classList.add('active');
        } else if (page === 'projects') {
            breadcrumb.innerHTML = String.raw`
                <li><button onclick="goHome()">home</button></li>
                <li><button>projects</button></li>
            `;
            projectsDescription.classList.add('active');
            title.innerHTML = 'Projects';
        } else if (page === 'skills') {
            breadcrumb.innerHTML = String.raw`
                <li><button onclick="goHome()">home</button></li>
                <li><button>skills</button></li>
            `;
            skillsDescription.classList.add('active');
            title.innerHTML = 'Skills';
        } else if (page === 'homies') {
            breadcrumb.innerHTML = String.raw`
                <li><button onclick="goHome()">home</button></li>
                <li><button>homies</button></li>
            `;
            homiesDescription.classList.add('active');
            title.innerHTML = 'Homies';
        } else {
            homeDescription.classList.add('active');
        }
    }

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            showPage(event.state.page, false);
        }
    });

    homeButton.addEventListener('click', () => showPage('home'))
    projectsButton.addEventListener('click', () => showPage('projects'))
    skillsButton.addEventListener('click', () => showPage('skills'))
    homiesButton.addEventListener('click', () => showPage('homies'))

    //logoButton.addEventListener('click', () => showPage('home'))

    const muteButton = document.getElementById('muteButton');   
    muteButton.onclick = () => {
        audio.muted = !audio.muted;
        muteButton.innerHTML = audio.muted ? 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19 6a8 8 0 0 1 0 12"/>
            </svg>` :
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M18.36 19.36L6 7l-4 4v2h4l5 4v-3.36l7.36 7.36M11 3v4.36l2 2V3z"/>
            </svg>`;
    };
})