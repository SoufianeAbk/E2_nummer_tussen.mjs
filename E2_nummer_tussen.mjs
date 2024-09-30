import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 10;
let maximum = 50;

let Getal = parseFloat(await userInput.question('Geef een getal in :'));

if (Getal > minimum && Getal < maximum){
    console.log(Getal + ' ligt tussen ' + minimum + ' en ' + maximum)
}else{
    console.log(Getal + ' ligt niet tussen ' + minimum + ' en ' + maximum)
}



    
process.exit()