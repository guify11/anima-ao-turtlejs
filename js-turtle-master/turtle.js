/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
var localizasaoX = 0
var localizasaoY = 0

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function ir(x, y){
    localizasaoY = y
    localizasaoX = x
    goto(x, y)
}

function limpar(){
    ir(0,0)
    clear()
    angle(0)
    
}
pendown()
