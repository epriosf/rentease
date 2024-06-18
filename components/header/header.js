function initializeHeader(){
    
        const userLogged = JSON.parse(localStorage.getItem('userLogged'));
    
        if (userLogged) {
            document.getElementById('greeting').textContent += ', ' + userLogged.name;
        }
    
        const logoutButton = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                localStorage.removeItem('username');
                window.location.href = "./../login/login.html";
            });
        } else {
            console.error('Logout button not found');
        } 
}