function initializeHeader(){
    
        const username = localStorage.getItem('username');
    
        if (username) {
            document.getElementById('greeting').textContent += ', ' + username;
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