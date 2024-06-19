function initializeHeader(){
    
        const userLogged = JSON.parse(localStorage.getItem('userLogged'));
        const currentTime = new Date();
        const expiryTime = new Date(userLogged.expiryTime)
    
        if (userLogged && currentTime<expiryTime) {
            document.getElementById('greeting').textContent += ', ' + userLogged.name;
            console.log("currentTime:"+currentTime.toString());
        }
        else {
            // Toast.fire({
            //     icon: "error",
            //     title: "Session expired",
            //     text: "Loging again"
            // });
            setTimeout(() => {
                window.location.href = "./../login/login.html";
              }, "3000");
           
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

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});