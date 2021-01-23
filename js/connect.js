



function Connect() {
    if (localStorage.getItem('user_mail')) {
        window.event.returnValue = false;
        window.location = './panier.html';
    } else {
        alert('Vous devez vous connecter pour commander');
        window.event.returnValue = false;
        window.location = './login.html';
    }


}