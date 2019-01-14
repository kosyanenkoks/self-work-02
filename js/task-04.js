var numbers = [3, 2, 5, 8, 4];

sortArray(numbers);

function sortArray(arr) {
    var tempEl = '';
    var i = 0;
    var j = 0;

    while (j < arr.length) {

        while (i < arr.length) {
            if (arr[i] > arr[i + 1]) {

                tempEl = arr[i];

                arr[i] = arr[i + 1];

                arr[i + 1] = tempEl;
            }

            i++;
        }

        j++;

    }

    console.log(arr);
    return arr;
}


