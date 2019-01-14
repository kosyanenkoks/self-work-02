var numbers = [3, 2, 5, 8, 4];

sortArray(numbers);

function sortArray(arr) {
    var tempEl = '';
    var j = 0;

    while (j < arr.length - 1) {
        var i = 0;
        while (i < arr.length - 1 - j) {
            if (arr[i + 1] < arr[i]) {
                tempEl = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tempEl;
            }
            i++;
        }
        j++;
    }
    console.log(arr);
}


