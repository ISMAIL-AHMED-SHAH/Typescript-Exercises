var personName = 'ismail ahmed shah';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' '));
// personName = prompt('What is your Name?') || '';
// let lowercase :string = personName.toLowerCase();
// let uppercase :string = personName.toUpperCase();
// let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// if(personName !== null &&  personName !== ''){
//     alert(`Hello ${personName}, Here are your name in:
//     LowerCase: ${lowercase}
//     UpperCase: ${uppercase}
//     TitleCase: ${titlecase}`)
// }
// else{
//     alert('Please mention your Name!')
// }