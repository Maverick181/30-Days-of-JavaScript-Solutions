//convert object to array

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]


const convertArrayToObject = (arr) => {
    let { name, skills, scores } = arr;
    
}

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {
    width: w,
    heigh: h,
    area: a,
    perimeter: p
} = rectangle

onst newStudent = Object.assign({}, student, {
    skills: {
      frontEnd: [
        ...student.skills.frontEnd,
        { skill: 'BootStrap', level: 8 }
      ],
      backEnd: [
        ...student.skills.backEnd,
        { skill: 'Express', level: 9 }
      ],
      dataBase: [
        ...student.skills.dataBase,
        { skill: 'SQL', level: 8 }
      ],
      dataScience: [
        ...student.skills.dataScience,
        'SQL'
      ]
    }
  });
  console.log(newStudent);
