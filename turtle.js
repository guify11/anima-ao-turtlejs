/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />

// config variaveis:
var vezRepeticao = 0
var xRepetiçao = 250
var yRepeticao = -245
var Repetir = true



function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function limpar(){
    ir(0,0)
    clear()
    angle(0)
    
}
pendown()

function casa(){
    goto(-340, -340)
    angle(0)
    forward(200)
    angle(90)
    forward(200)
    angle(180)
    forward(200)
    angle(180 + 90)
    forward(20)
    angle(270 + 90)
    forward(80)
    angle(360 - 90)
    forward(50)
    angle(270 - 90)
    forward(80)
    angle(0 - 90)
    forward(200 - 70)
    goto(-270, -190)
    for (let i = 0; i < 3600; i++){
        goto(-250, -190)
        penup();
        forward(20);
        pendown();
        forward(0.1);
        right(0.1);

    }
    left(180)
    forward(40)
    goto(-250, -170)
    angle(180)
    forward(40)
    angle(0)
    goto(-340, -140)
    right(30)
    forward(200)
    right(120)
    forward(200)
    right(120)
    forward(200)

   
}

function stickman(x, y){
    for (let i = 0; i < 3600; i++){
        goto(x, y)
        penup();
        forward(20);
        pendown();
        forward(0.1);
        right(0.1);

    }
    goto(x, y - 20)
    left(90)
    forward(50)
    left(15)
    forward(30)
    goto(x, y - 70)
    right(30)
    forward(30)
    goto(x, y - 20)
    angle(180)

    forward(10)
    left(15)
    forward(40)

    goto(x, y - 20)

    forward(10)
    right(30)
    forward(40)
}

/*
1 frame:

casa()
stickman(250, -215)
*/

function frame(){
    console.log(String("numero de frames ja desenhados: ") + vezRepeticao++)//nao mexer nesta linha 
    clear()
    casa()
    stickman(xRepetiçao--, yRepeticao) 

    if (xRepetiçao == -200){
        Repetir = false
        console.warn("reptiçao finalizada a iniciar frame final")
        clear()
        casa
        goto(0, 200)
        setFont("50px sans-serif")
        write("O pedro chegou a casa :p")
    }
}

setInterval(() => {if (Repetir){frame()}}, 0.01 /*tempo de cada frame*/);//faz com que a func frame() seja executada a cada X imlesengundos