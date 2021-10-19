let person = {
    firstName: 'Akira',
    lastName: 'Kurosawa', 
    age : 30, 
};

//Dot Notation 
person.lastName ='Ishiguro';

//Brack Notation 
let selection ='name';
person[selection]= 'Kazuo';

console.log (person);

let selectedColors= [ 'red','blue'];

selectedColors[2]= 1;
console.log[selectedColors];
console.log(selectedColors.length);

//Perform a task

function greet (firstName, lastName) {
    console.log ('Hello ' + firstName + ' ' + lastName);

}

greet ('Akira', 'Kurosawa');

//Caculate a value 

function square(number){
    return number * number;
}

console.log(square(121));

