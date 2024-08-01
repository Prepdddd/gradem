document.addEventListener('DOMContentLoaded', () => {
  // Populate the school dropdown
  const schoolSelect = document.getElementById('school-select');
  schools.forEach(school => {
    const option = document.createElement('option');
    option.value = school.id;
    option.textContent = school.name;
    schoolSelect.appendChild(option);
  });

  document.getElementById('view-school').addEventListener('click', () => {
    const selectedSchoolId = schoolSelect.value;
    if (selectedSchoolId) {
      window.location.href = `school.html?school=${selectedSchoolId}`;
    } else {
      alert('Please select a school');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const schoolId = params.get('school');
  const school = schools.find(s => s.id === schoolId);
  
  if (school) {
    document.getElementById('school-name').textContent = school.name;
    loadProfessors(schoolId);
    loadReviews(schoolId);
  } else {
    alert('School not found');
    window.location.href = 'index.html';
  }

  document.getElementById('review-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your review! Currently, this is just a demo, so the review will not be saved.');
    // Here, you would normally submit the review to the backend for processing
  });
});

function loadProfessors(schoolId) {
  // Load professors for the selected school
  const professorList = document.getElementById('professors');
  reviews[schoolId].forEach(review => {
    const li = document.createElement('li');
    li.textContent = review.professor;
    professorList.appendChild(li);
  });
}

function loadReviews(schoolId) {
  // Load reviews for the selected school
  const reviewList = document.getElementById('review-list');
  reviews[schoolId].forEach(review => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${review.professor}:</strong> ${review.comment}<br>
                    Teaching: ${review.ratings.teaching}, Grading: ${review.ratings.grading}, Availability: ${review.ratings.availability}`;
    reviewList.appendChild(li);
  });
}
