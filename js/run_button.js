var yesbtn = document.getElementById("yes_bt");
var nobtn = document.getElementById("no_bt");
let jump = 50;

yesbtn.addEventListener("mouseover", button_run);
yesbtn.addEventListener("click", () => alert('Успіх!'));


function button_run(event){
    //координати миші
    // координати кнопки
    let coords = yesbtn.getBoundingClientRect();

    let height = coords.bottom - coords.top;
    let weight = coords.right - coords.left;

    let btnCenterX = coords.left + weight/2;
    let btnCenterY = coords.top + height/2;

    let vector1X = btnCenterX - event.pageX;
    let vector1Y = btnCenterY - event.pageY;

    console.log(`btn x ${coords.left} : ${btnCenterX}`);
    console.log(` btn y ${coords.top} : ${btnCenterY}`);
    console.log(`curs ${event.pageX} : ${event.pageY}`);
    console.log(`vector x:${vector1X} | y:${vector1Y}`);

    let vector1Length = Math.sqrt(vector1X**2 + vector1Y**2);
    console.log(vector1Length);

    let vector2X = vector1X * ((vector1Length+jump)/vector1Length);
    let vector2Y = vector1Y * ((vector1Length+jump)/vector1Length);

    console.log(`dist2 ${(vector1Length+jump)/vector1Length}`);
    console.log(`vector2 x:${vector2X} | y:${vector2Y}`);

    console.log(`cord2 x:${vector2X + event.pageX} | y:${vector2Y + event.pageY}`);

    yesbtn.style.left = vector2X + event.pageX - weight/2;
    yesbtn.style.top = vector2Y + event.pageY - height/2;
} 

