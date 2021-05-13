console.log("helloworld");
console.log("testing cookies");
//localStorage.setItem('firstCookie', 'You set your first cookie');
const cookie = localStorage.getItem('firstCookie');
console.log("this is your cookie" + cookie);

for (var i = 0; i < localStorage.length; i++){
    console.log("looping through cookies");
    console.log(localStorage.getItem(localStorage.key(i)));
}