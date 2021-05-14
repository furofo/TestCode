
//localStorage.setItem('firstCookie', 'You set your first cookie');
//localStorage.setItem('secondCookie', 'your second cookie');
const cookie = localStorage.getItem('firstCookie');
let switcher = 'off';
function changeText() {
    var change = document.getElementById("test");
    if(switcher == 'off') {
        localStorage.setItem('firstCookie', 'You changed your first cookie');
        console.log(localStorage.getItem('firstCookie'));
        switcher = 'on';
    }
    else {
        localStorage.setItem('firstCookie', 'You changed your first cookie back to basics');
        console.log(localStorage.getItem('firstCookie'));
        switcher = 'off';
        
    }
}