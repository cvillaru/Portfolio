const navbarContainer = document.querySelector('.navbar-container');
const navbarShader = document.querySelector('.navbar-shader');

// Add event listeners
function triggerBlurEffect() {
    navbarShader.style.setProperty('--blur-value', '10px');
}

function triggerRemoveBlurEffect() {
    navbarShader.style.setProperty('--blur-value', '0px');
}