var names = ['Сергей', 'Вася', 'Марина'];
var lastNames = ['Коломенцев', 'Пупкин', 'Кот'];
var newArray = [];

for (var i = 0; i < names.length; i++) {
    newArray.push(names[i] + ' ' + lastNames[i]);
}

console.log(newArray);