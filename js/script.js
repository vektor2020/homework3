var age = prompt('Введите свой возраст');
if ((age >= 11 && age <= 14)||(age >= 111 && age <= 114)) {
    alert(age + ' лет');
} else {
var ageWord = age % 10;
switch (ageWord) {
    case 1:
        alert(age + ' год');
        break;
    
    case 2:
    case 3:
    case 4:
        alert(age + ' года');
        break;
    
    default:
        alert(age + ' лет');
        break;
} }
