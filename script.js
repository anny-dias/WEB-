function calcular(){
    return `Perimetro: ${Math.PI * 2}`;
}
console.log(calcular());


function calcularArea(raio){
    return `Perimetro: ${Math.PI * raio} Area: ${Math.PI * raio * raio}`;
}
console.log(calcular(10));


function exemplo(num){
    return num * num;
}
console.log(exemplo(20));

//arrow function
const exemplo1 = (num)=>{
    return num * num;
}
console.log(exemplo(20))

//arrow function simplificada 
const exemplo3 = (num)=>{return num * num;}
console.log(exemplo(20))



function inserir(){
    let numero = document.getElementById("posicao").value -1
    let novo = document.getElementById("novo").value
    document.getElementsByClassName("colocado")[numero].innerHTML = novo

}

