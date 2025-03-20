

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('student-button').addEventListener('click', function() {
        window.open('student.html','_blank');
    });

    document.getElementById('teacher-button').addEventListener('click', function() {
        window.open('login.html','_blank');
    });
});