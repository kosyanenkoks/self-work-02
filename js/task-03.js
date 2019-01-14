removeSymbols('Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик');

function removeSymbols(str) {
    var newStr = '';
    var lowerCharCode = 1040;
    var upperCharCode = 1103;

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > lowerCharCode && str.charCodeAt(i) < upperCharCode) {
            newStr += str.charAt(i);
        }
    }
    console.log(newStr);
}