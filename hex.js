const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    randomclr='#';
    for (let index = 0; index <6; index++) {
        randomnum=Math.floor(Math.random()*hex.length)
        randomclr += hex[randomnum];
        
    }
    document.body.style.backgroundColor=randomclr;
    color.textContent=randomclr;
})