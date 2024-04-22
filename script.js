document.getElementById('admissionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const studentData = {};
  formData.forEach((value, key) => {
    studentData[key] = value;
  });

  fetch('/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  })
  .then(response => response.json())
  .then(data => {
    alert('Student data saved successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error saving student data. Please try again.');
  });
});
