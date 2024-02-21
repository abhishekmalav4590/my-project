document.getElementById('myForm').addEventListener('submit', function(event) {
    var age = document.getElementById('age');
    if (age.value < 1 || age.value > 80) {
      alert('Age should be between 1 to 80');
      event.preventDefault();
    }
  });