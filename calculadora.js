clear = document.querySelector(".clear");
borrar = document.querySelector(".borrar");
dividir = document.querySelector(".dividir");
siete = document.querySelector(".siete");
ocho = document.querySelector(".ocho");
nueve = document.querySelector(".nueve");
multiplicar = document.querySelector(".x");
cuatro = document.querySelector(".cuatro");
cinco = document.querySelector(".cinco");
seis = document.querySelector(".seis");
restar = document.querySelector(".menos");
uno= document.querySelector(".uno");
dos = document.querySelector(".dos");
tres = document.querySelector(".tres");
sumar = document.querySelector(".mas");
cero = document.querySelector(".cero");
coma = document.querySelector(".coma");
igual = document.querySelector(".igual");
pantalla = document.querySelector(".pantalla");
s = 0;
p = 0;


cero.addEventListener("click",() =>{
    if ( p == 0){
    pantalla.innerHTML += 0;}});

uno.addEventListener("click",() =>{
    if ( p == 0){
    pantalla.innerHTML += 1;}});

dos.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 2;}});
    
tres.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 3;}});    

cuatro.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 4;}});    

cinco.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 5;}});

seis.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 6;}});

siete.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 7;}});

ocho.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 8;}});

nueve.addEventListener("click",() =>{
    if ( p == 0){
        pantalla.innerHTML += 9;}});

sumar.addEventListener("click",() =>{
    if(s == 0){
    pantalla.innerHTML += ` + `;
s++;}
});

restar.addEventListener("click",() =>{
    if(s == 0){
    pantalla.innerHTML += ` - `;
s++}
});

multiplicar.addEventListener("click",() =>{
    if(s == 0){
    pantalla.innerHTML +=` x `;
s++}
});

dividir.addEventListener("click",() =>{
    if(s == 0){
    pantalla.innerHTML += ` / `;
s++}
});

clear.addEventListener("click",()=>{
    pantalla.innerHTML = ` `
    s=0;;
    p=0;
});

coma.addEventListener("click",()=>{
    if(p == 0){
    pantalla.innerHTML += `.`}
})

igual.addEventListener("click",()=>{
    valor = pantalla.innerHTML;   
    mas = valor.indexOf("+")
    array = [];
   
 if (valor.includes("+")){   
    array = valor.split(` + `) ;
    a = parseFloat(array[0]);
    b = parseFloat(array[1]);
    if(isNaN(a)){
        a = 0;
    }

    resultado = a + b;
    pantalla.innerHTML=resultado.toFixed(2);
    p++;
    
}



if (valor.includes(` - `)){
    array = valor.split(` - `) ;
    a = parseFloat(array[0]) ;
    b = parseFloat(array[1]);
    if(isNaN(a)){
        a = 0;
    }
    resultado = a - b;
    pantalla.innerHTML=resultado.toFixed(2);
    p++;
}
if (valor.includes("x")){
    array = valor.split(` x `) ;
    a = parseFloat(array[0]) ;
    b = parseFloat(array[1]);
    if(isNaN(a)){
        a = 0;
    }
    resultado = a * b;
    pantalla.innerHTML=resultado.toFixed(2);
    p++;
}
if (valor.includes(` / `)){
    array = valor.split(` / `) ;
    a = parseFloat(array[0]) ;
    b = parseFloat(array[1]);
    if(isNaN(a)){
        a = 0;
    }
    resultado = a / b;
    pantalla.innerHTML=resultado.toFixed(2);
    p++;
 
}}) 