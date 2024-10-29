let myName : string = 'Jesper';

let myAge : number = 33;

let isTired : boolean = true;

console.log(myName);

let age : string = convertToUppercase(myName);

function convertToUppercase(myName : string) : string {
    return myName.toUpperCase();
}

const convertToLowercase = (myName : string) : string => {
    return myName.toLowerCase();
}