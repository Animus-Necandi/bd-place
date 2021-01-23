
let regDate = new RegExp("^202[0-5]\-(0[0-9]|1[0-2])\-(0[0-9]|[1-2][0-9]|3[0-1])$");
let timeChoice = ""


//--------------------------------------
let zeroOn = true;
let oneOn = true;
let twoOn = true;
let threeOn = true;
let fourOn = true;
let fiveOn = true;
let sixOn = true;
let sevenOn = true;
let eightOn = true;



function timeSwitch(c) {


    switch (c) {
        case '0':
            let zero = document.getElementsByClassName('am-time')[0].getElementsByClassName('time')[0];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                zero.style.color = 'grey';
                zeroOn = false;
            } else {
                zero.style.color = 'white';
                zeroOn = true;
            }
            break;
        case '1':
            let one = document.getElementsByClassName('am-time')[0].getElementsByClassName('time')[1];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                one.style.color = 'grey';
                oneOn = false;
            } else {
                one.style.color = 'white';
                oneOn = true;
            }
            break;
        case '2':
            let two = document.getElementsByClassName('am-time')[0].getElementsByClassName('time')[2];
            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                two.style.color = 'grey';
                twoOn = false;
            } else {
                two.style.color = 'white';
                twoOn = true;
            }
            break;
        case '3':
            let three = document.getElementsByClassName('am-time')[0].getElementsByClassName('time')[3];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                three.style.color = 'grey';
                threeOn = false;
            } else {
                three.style.color = 'white';
                threeOn = true;
            }
            break;
        case '4':
            let four = document.getElementsByClassName('pm-time')[0].getElementsByClassName('time')[0];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                four.style.color = 'grey';
                fourOn = false;
            } else {
                four.style.color = 'white';
                fourOn = true;
            }
            break;
        case '5':
            let five = document.getElementsByClassName('pm-time')[0].getElementsByClassName('time')[1];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                five.style.color = 'grey';
                fiveOn = false;
            } else {
                five.style.color = 'white';
                fiveOn = true;
            }
            break;
        case '6':
            let six = document.getElementsByClassName('pm-time')[0].getElementsByClassName('time')[2];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                six.style.color = 'grey';
                sixOn = false;
            } else {
                six.style.color = 'white';
                sixOn = true;
            }
            break;
        case '7':
            let seven = document.getElementsByClassName('pm-time')[0].getElementsByClassName('time')[3];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                seven.style.color = 'grey';
                sevenOn = false;
            } else {
                seven.style.color = 'white';
                sevenOn = true;
            }
            break;
        case '8':
            let eight = document.getElementsByClassName('pm-time')[0].getElementsByClassName('time')[4];

            if (zeroOn && oneOn && twoOn && threeOn && fourOn && fiveOn && sixOn && sevenOn && eightOn) {
                eight.style.color = 'grey';
                eightOn = false;
            } else {
                eight.style.color = 'white';
                eightOn = true;
            }
            break;
    }
}


function Appointement() {

    let deliveryDate = document.getElementsByClassName('delivery-date')[0].value;

    let deliveryDateControl = regDate.test(deliveryDate);


    // let timeChoiceAm = document.getElementsByClassName('am-time');
    // console.log(timeChoiceAm);
    if (deliveryDateControl) {

        if (!zeroOn) {
            timeChoice = '08 et 9h';
        }
        else if (!oneOn) {
            timeChoice = '9h et 10h'
        }
        else if (!twoOn) {
            timeChoice = '10h et 11h'
        }
        else if (!threeOn) {
            timeChoice = '11h et 12h'
        }
        else if (!fourOn) {
            timeChoice = '14h et 15h'
        }
        else if (!fiveOn) {
            timeChoice = '15h et 16h'
        }
        else if (!sixOn) {
            timeChoice = '16h et 17h'
        }
        else if (!sevenOn) {
            timeChoice = '17h et 18h'
        }
        else if (!eightOn) {
            timeChoice = '18h et 19h'
        }

        sessionStorage.setItem('delivery_hour', timeChoice)
        sessionStorage.setItem('delivery_day', deliveryDate)
        window.event.returnValue = false;
        window.location = './cmd-valide.html';
    } else {
        alert('Vous n\'avez pas rempli tous les champs')
    }

}

