const studentBtn = document.querySelector('.student-btn');
const librarianBtn = document.querySelector('.librarian-btn');
const studentForm = document.querySelector('.student-form');
const librarianForm = document.querySelector('.librarian-form');
const studentName = document.querySelector('#studentName');
const studentId = document.querySelector('#studentId');
const librarianName = document.querySelector('#librarianName');
const librarianId = document.querySelector('#librarianId');
const loginBtn = document.querySelector('.login-btn');
const hyperlink = document.querySelector('.login-btn a');

let role = 'student';

studentBtn.addEventListener('click', toggleStudent);
librarianBtn.addEventListener('click', toggleLibrarian);
loginBtn.addEventListener('click', login);

[studentName, studentId, librarianName, librarianId].forEach(input => {
    input.addEventListener('keydown', checkFields);
});

function toggleStudent() {
    if (!studentForm.classList.contains('active')) {
        studentForm.classList.add('active');
        studentBtn.classList.add('active');
        librarianForm.classList.remove('active');
        librarianBtn.classList.remove('active');
    }

    role = 'student';
    hyperlink.href = './student/index.html';

    checkFields();
}

function toggleLibrarian() {
    if (!librarianForm.classList.contains('active')) {
        librarianForm.classList.add('active');
        librarianBtn.classList.add('active');
        studentForm.classList.remove('active');
        studentBtn.classList.remove('active');
    }

    role = 'librarian';
    hyperlink.href = './librarian/index.html';

    checkFields();
}

function checkFields() {
    function enableLoginBtn() {
        loginBtn.classList.remove('disabled');
        loginBtn.disabled = false;
    }

    function disableLoginBtn() {
        loginBtn.classList.add('disabled');
        loginBtn.disabled = true;
    }

    if (studentForm.classList.contains('active')) {
        if (!studentName.value == '' && !studentId.value == '') {
            enableLoginBtn();
        } else {
            disableLoginBtn();
        }
    } else if (librarianForm.classList.contains('active')) {
        if (librarianName.value && librarianId.value) {
            enableLoginBtn();
        } else {
            disableLoginBtn();
        }
    }
}

function login() {
    if (role === 'student') {
        localStorage.setItem('studentName', studentName.value);
        localStorage.setItem('studentId', studentId.value);
    } else if (role === 'librarian') {
        localStorage.setItem('librarianName', librarianName.value);
        localStorage.setItem('librarianId', librarianId.value);
    }
}
