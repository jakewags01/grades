
// ---------------- Variables ---------------- //

// grade vars
const aGrade = document.querySelector('#aGrade');
const bGrade = document.querySelector('#bGrade');
const cGrade = document.querySelector('#cGrade');
const dGrade = document.querySelector('#dGrade');
const fGrade = document.querySelector('#fGrade');

const gradeInputs = document.querySelectorAll('.gradeInput');

const aPercent = document.querySelector('#aPercent');
const bPercent = document.querySelector('#bPercent');
const cPercent = document.querySelector('#cPercent');
const dPercent = document.querySelector('#dPercent');
const fPercent = document.querySelector('#fPercent');

const gradeBtn = document.querySelector('#updateGradesBtn');

// class vars
var classes = [];

class Course {
    constructor(name) {
        this.name = name;
    }
    addSection() {
        
    }
}

// ---------------- Event Listeners ---------------- //

gradeBtn.addEventListener('click', (e) => {
    gradeInputs.forEach(function(grade, i) {
        if (grade.value != "" && grade.value != null) {
            if (i == 0) aPercent.innerHTML = grade.value + '%';
            else if (i == 1) bPercent.innerHTML = grade.value + '%';
            else if (i == 2) cPercent.innerHTML = grade.value + '%';
            else if (i == 3) dPercent.innerHTML = grade.value + '%';
            else  fPercent.innerHTML = grade.value + '%';
        }
        grade.value = "";
    })
});