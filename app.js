
// const base= 3;
// let salida= '';
// console.log('================')
// console.log(`  Tabla del ${base}`)
// console.log('================')



// for(let i=1;i<=10;i++){
//     salida +=`${base} X ${i} = ${base * i} \n`;
// }

// console.log(salida)

// //Aqui es donde se crea el archivo
// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if(err) throw err;

//     console.log(`tabla-${base}.txt creado`)
// })

//Pintar el titulo
/**
 * Leer todo el contenido de un archivo
 * con Node.JS y fs
 */

console.clear();
const colors = require('colors');
var fs = require('fs');
var array = fs.readFileSync('johan.txt').toString().split("\n");

for (let i = 0; i < array.length; i++) {
    if (i == 1) {
        console.log(array[1].red);
    } else {
        console.log(array[i].blue)
    }
}







