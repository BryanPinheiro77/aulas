let numeros = ["cachorro","gato","onça","leão","arara","urso","vaca","cavalo"];

console.log("--- Array v1 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}

numeros.push("macaco");

console.log("--- Array v2 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}

numeros.pop();
console.log("--- Array v3 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}    

numeros.shift();
console.log("--- Array v4 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
}  

numeros.unshift("coelho");
console.log("--- Array v5 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
} 

numeros.sort();
console.log("--- Array v6 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
} 

numeros.splice(2,3);
console.log("--- Array v7 ---")
for(let i=0; i<numeros.length;i++){
    console.log(numeros[i]);
} 

console.log("--- Teste ---")
console.log(numeros.at(1));
console.log(numeros.at(-1));