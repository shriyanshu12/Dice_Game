var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var d1="dice"+randomnumber1+'.png';
var d2="dice"+randomnumber2+'.png';
let x=document.querySelectorAll('img');
x[0].setAttribute('src',d1);
x[1].setAttribute('src',d2);
if(randomnumber1<randomnumber2){
    document.querySelector('h1').innerHTML="Player 2 Wins!🚩";
}
else if(randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector('h1').innerHTML="Game Tied!";
}
