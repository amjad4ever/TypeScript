let car: string = 'subaru';
let age: number = 5;
let colors: string[] = ['red', 'blue', 'green'];

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'Honda'? I predict False.");
console.log(car.toLowerCase() == 'Honda');

console.log("Is age === 5? I predict True.");
console.log(age === 5);

console.log("Is age !== 3? I predict True.");
console.log(age !== 3);

console.log("Is age > 10? I predict False.");
console.log(age > 10);

console.log("Is age < 10? I predict True.");
console.log(age < 10);

console.log("Is age >= 5? I predict True.");
console.log(age >= 5);

console.log("Is age <= 3? I predict False.");
console.log(age <= 3);

console.log("Is car == 'subaru' and age === 5? I predict True.");
console.log(car == 'subaru' && age === 5);

console.log("Is car == 'subaru' or age === 10? I predict True.");
console.log(car == 'subaru' || age === 10);

console.log("Is 'blue' in colors? I predict True.");
console.log('blue' in colors);

console.log("Is 'yellow' in colors? I predict False.");
console.log('yellow' in colors);

console.log("Is 'gren' not in colors? I predict False.");
console.log('gren'  in colors);

console.log("Is 'purpe' not in colors? I predict True.");
console.log('purpe'  in colors);
