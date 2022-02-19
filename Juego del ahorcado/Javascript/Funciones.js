//Funcion ReplaceAt
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
//Boton Jugar
var jugar = document.querySelector("#jugar");
var contador = 0;
var erradas = [];
var campoverificar = document.querySelector("#campoletra");


//Funcion para crear los guiones segun la palabra
function guiones(){
    var form = document.querySelector("#formulario");
    var palabra = form.campo1.value;
    let palabrasgion = palabra.replace(/./g, "_ ");
    //Escribe los guiones
    pincel.font = '30px serif';
    pincel.fillText(palabrasgion, 350, 100);
    //Escribe el texto "Letras erradas"
    pincel.fillText("Letras Erradas", 1000, 200);
    

    //Funcion para verificar letra
    campoverificar.addEventListener("input",function(){
        //Borra los guiones creador por la funcion de arriba
        pincel.clearRect(350, 50, 10000, 100);
        console.log(this.value);
        
        letra = document.querySelector("#campoletra").value;

        //Verifica si la letra esta en la palabra
        var fallo = true;
        for (const i in palabra){
            if (palabra[i] === this.value){
                palabrasgion = palabrasgion.replaceAt(i*2, this.value);
                console.log(palabrasgion);
                fallo = false;
            } 
            
          
        }
        //Si no esta la letra agrega la letra a la lista y la escribe
        if(fallo){            
            erradas.push(this.value);
            pincel.font = '30px serif';
            pincel.fillText(erradas, 1000, 250);
            contador = contador + 1;
            if(contador ==  1){
                //Cabeza
                pincel.beginPath();
                pincel.arc(201, 60, 17, 0, 2 * Math.PI);
                pincel.stroke();
            }
            if(contador == 2){
                //Munequito cuerpo
                pincel.fillStyle = "black";
                pincel.fillRect(200,75,2,38);
            }
            if(contador == 3){
                //Brazo Izquierdo
                pincel.moveTo(201, 80);
                pincel.lineTo(180, 100);
                pincel.stroke();
            }
            if(contador == 4){
                //Brazo Derecho
                pincel.moveTo(201, 80);
                pincel.lineTo(220, 100);
                pincel.stroke();
            }
            if(contador == 5){        
                //Pierna Izquierda
                pincel.moveTo(201, 110);
                pincel.lineTo(185, 130);
                pincel.stroke();
            }
            if(contador == 6){
                //Pierna Derecha
                pincel.moveTo(201, 110);
                pincel.lineTo(215, 130);
                pincel.stroke();
                alert("has perdido");
                location.reload();
            }
        }
        

        setTimeout(() => {
            //Pinta la letra si esta en la palabra
            pincel.clearRect(250, 50, 700, 800);
            pincel.font = '35px serif';
            pincel.fillText(palabrasgion, 350, 100);

            //Borra la letra del campo y se direcciona al campo letra
            document.querySelector("#campoletra").value = "";
            document.querySelector("#campoletra").focus();
        }, 500);


    
    });
    document.querySelector("#campo1").value = "";
    
}

//Eventos al hacer click
jugar.addEventListener("click",guiones)

