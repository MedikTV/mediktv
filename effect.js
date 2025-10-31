// Preloader
let percent = 0;
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');
const percentText = document.getElementById('percent');
const progressBar = document.getElementById('loader-progress');

const interval = setInterval(() => {
    percent++;
    percentText.textContent = percent + '%';
    progressBar.style.width = percent + '%';
    if(percent >= 100) {
        clearInterval(interval);
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }
}, 30);
