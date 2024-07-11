//mainEl
const player = document.querySelector('.player');
const food = document.querySelector('.food');

//btnEl
const leftBtn = document.querySelector('.leftBtn')
const upBtn = document.querySelector('.upBtn')
const rightBtn = document.querySelector('.rightBtn')
const downBtn = document.querySelector('.downBtn')

//pos var
let x = 1;
let y = 1;
let Fx = 2;
let Fy = 2;

//movement
 function moveToLeft(){
   if(x !== 1){
    x--
   }
   else{
    console.log('ups')
   }
   player.style.gridColumn = `${x}`;
   console.log('x:'+ x)
   return(x)
}

 function moveToUp(){
    if(y !== 1){
        y--
       }
       else{
        console.log('ups')
       }
       player.style.gridRow = `${y}`;
       console.log('y:'+ y)
       return(y)
 }

 function moveToRight(){
    if(x !== 25){
        x++
       }
       else{
        console.log('ups')
       }
       player.style.gridColumn = `${x}`;
       console.log('x:'+ x)
       return(x)
 }

 function moveToDown(){
    if(y !== 25){
        y++
       }
       else{
        console.log('ups')
       }
       player.style.gridRow = `${y}`;
       console.log('y:'+ y)
       return(y)
 }
 
//food pos 
food.style.gridRow = `${Fy}`;
food.style.gridColumn = `${Fx}`;

eat()
 function eat(){
    //if(x === Fx && y === Fy){
     Fx = Math.floor(Math.random()*25);
     Fy = Math.floor(Math.random()*25);

     if(Fx > 1 && Fx < 26){
         food.style.gridColumn = `${Fx}`;
     }
     if(Fy > 1 && Fy < 26){
        food.style.gridRow = `${Fy}`;
     }

     console.log(Fx)
     console.log(Fy)
  //  }
    }