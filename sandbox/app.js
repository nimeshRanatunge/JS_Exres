const numbers = [1,2,3,4];
numbers.push(77);
console.log(numbers);

const car = {
    name: 'honda',
    model: 'civic'
}
car.year = 1996;
console.log(car.year);

let v;
let j;
v = String(5);
j = (5).toString();
console.log(v+5);
console.log(j+5);

v = Number('gd');
console.log(v.toFixed(3));

//parseInt, parseFloat
//math round, floor, ceil

v = 'University';
console.log(v.charAt(1));
console.log(v.indexOf('n'));

v = 'University of Colombo';
console.log(v.split(' ')[0]);

console.log(v.replace('Colombo', 'Colarado'));

v = 'University of Jaffna';
if(v.includes('Jaffna')){
    console.log('There are students from Jaffna University');
}else{
    console.log('jaffna not participated');
}