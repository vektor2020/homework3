var age = prompt('Введите свой возраст');

if (isNaN(age)){
    alert('Введите год цыфрами');
    
}else if (age < 0){ 
    alert('Слишком мало')
}else{
    var age100 = age % 100;
    if (age100 >= 5 && age100 <= 20) {
        alert(age + ' лет');
    } else {
            var age10 = age100 % 10;
            switch (age10) {
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
            } 
    }
};