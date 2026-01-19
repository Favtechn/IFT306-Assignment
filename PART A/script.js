const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('courseTable');

// Loads saved data when page refrresh
let courses = JSON.parse(localStorage.getItem('courses')) || [];
displayCourses();

// Corrects matric format
function validMatric(m) {
  const pattern = /^LCU\/UG\/\d{4}\/\d{3}$/i;
  return pattern.test(m);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const matric = document.getElementById('matric').value.trim();
  const code = document.getElementById('code').value.trim();
  const title = document.getElementById('title').value.trim();

  if (!validMatric(matric)) {
    alert('Matric format incorrect: LCU/UG/2023/001');
    return;
  }

  const course = { name, matric, code, title };
  courses.push(course);

  // Saves to localStorage
  localStorage.setItem('courses', JSON.stringify(courses));

  displayCourses();
  form.reset();
});

function displayCourses() {
  tableBody.innerHTML = "";
  courses.forEach(c => {
    const row = `<tr>
      <td>${c.name}</td>
      <td>${c.matric}</td>
      <td>${c.code}</td>
      <td>${c.title}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
