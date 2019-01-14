var group = [
    {
        name: "Ann",
        age: 22,
        notebook: false
    },
    {
        name: "Vova",
        age: 30,
        notebook: true
    },
    {
        name: "Alex",
        age: 19,
        notebook: true
    },
    {
        name: "Vadim",
        age: 25,
        notebook: true
    },
    {
        name: "Kate",
        age: 21,
        notebook: true
    },
    {
        name: "Karina",
        age: 28,
        notebook: false
    }
];

getStudentsList(group);


function getStudentsList ( arrayOfStudents ) {
    for (var i = 0; i < arrayOfStudents.length; i++ ) {
        var str = '';
        for (var key in arrayOfStudents[i]) {
            str += key + ': ' + arrayOfStudents[i][key] + ', ';
        }
        console.log(str);
    }
}