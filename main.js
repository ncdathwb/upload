var step = 50;
var gas = 10;
const keyLeft = 37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;
const keyOne = 49; // tăng tốc
const keyTwo = 50; // giảm
function moveRight() {
	// obj
    var man = document.getElementById('man');

    var widthBrowser = window.innerWidth;
    var heightBrowser = window.innerHeight;
    man.style.transition = '0.4s';
	var yPosition  =  man.style.left; //  trái phải

    // transform
    man.style.transform = `rotate(${90}deg)`;

    // vị trí hiện tại = vị trí hiện tại + size của man
    var moved = parseInt(man.style.left)+parseInt(man.style.width);
   

    // xét điều kiện để man không chạy ra khỏi view
    if((moved+step) < widthBrowser){
       man.style.left = `${(parseInt(yPosition) + step)}px`;	
    }else{
       man.style.left = `${(widthBrowser - parseInt(man.style.width))}px`;	
    }
}

function moveLeft() {
    // obj
    var man = document.getElementById('man');

    var widthBrowser = window.innerWidth;
    var heightBrowser = window.innerHeight;
    man.style.transition = '0.4s';
    var yPosition  =  man.style.left; //  lên xuống
    
    // transform
    man.style.transform = `rotate(${270}deg)`;

    // đi lui nên vị trí hiện tại không cần tính width của man
    //(do nó tính từ đít của man)
    var moved = parseInt(man.style.left);
    

    // xét điều kiện để man không chạy ra khỏi view
    if(moved > 0){
       man.style.left = `${(parseInt(yPosition) - step)}px`;
    }else{
       man.style.left = 0;
    }
}

function moveDown() {
    // obj
    var man = document.getElementById('man');

    var widthBrowser = window.innerWidth;
    var heightBrowser = window.innerHeight;
    man.style.transition = '0.4s';
    var xPosition =  man.style.top;

 // transform
    man.style.transform = `rotate(${180}deg)`;


    var moved = parseInt(man.style.top)+parseInt(man.style.height);;

    if((moved+step) < heightBrowser){
      man.style.top = `${( parseInt(man.style.top) +step)}px`;
    }else{
      man.style.top = `${(heightBrowser - parseInt(man.style.height))}px`;
    }
}





function moveUp() {
    // obj
    var man = document.getElementById('man');

    var widthBrowser = window.innerWidth;
    var heightBrowser = window.innerHeight;
    man.style.transition = '0.4s';
    var xPosition  =  man.style.top; //  lên xuống
    
    // transform
    man.style.transform = `rotate(${360}deg)`;

    // đi lui nên vị trí hiện tại không cần tính width của man
    //(do nó tính từ đít của man)
    var moved = parseInt(man.style.top);
    

    // xét điều kiện để man không chạy ra khỏi view
    if(moved > 0){
       man.style.top = `${(parseInt(xPosition) - step)}px`;
    }else{
       man.style.top = 0;
    }
}

function moveFast() {
        step += gas;
    }

function moveSlow() {
        if((step - gas) > 0){
          step -= gas;      
        }else{
          step = 1 ;
        }
    }

function controllMan(event){
    switch(event.keyCode){
        case keyRight:{
            moveRight();
            break;
        }
        case keyDown:{
            moveDown();
            break;
        }
        case keyLeft:{
            moveLeft();
            break;
        }
        case keyUp:{
            moveUp();
            break;
        }
        case keyOne:{
            moveFast();
            break;
        }
        case keyTwo:{
            moveSlow();
            break;
        }
/*        default:{
            alert('Nhấn phím mũi tên để di chuyển nhân vật !');
        }*/
    }
}



function initGame(){
    var man = document.getElementById('man');
    var widthBrowser = window.innerWidth;
    var heightBrowser = window.innerHeight;
    var widthBrowser_div = widthBrowser / 2;
    var heightBrowser_div = heightBrowser / 1.2;
    man.src = "man.png";
    man.style.width = "70px";
    man.style.height = "70px";
    man.style.position = "relative";
    man.style.top = `${heightBrowser_div}px`;
    man.style.left = `${widthBrowser_div}px`;
    window.addEventListener('keydown', controllMan);
}
initGame();




