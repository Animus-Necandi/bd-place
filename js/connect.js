
let connect = sessionStorage.getItem('user_connect');



console.log(connect);

function Connect() {
    if (connect) {
        window.event.returnValue = false;
        window.location = './panier.html';
    } else {
        alert('Vous devez vous connecter pour commander');
        window.event.returnValue = false;
        window.location = './login.html';
    }


}