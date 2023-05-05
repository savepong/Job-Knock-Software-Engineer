function cancel() {
  document.querySelector('#fname').value = '';
  document.querySelector('#lname').value = '';
  document.querySelector('input[name="role"]:checked').value = '';
  alert('cancelled');
}

function confirm () {
  // get all the input values
  const firstName = document.querySelector('#fname').value;
  const lastName = document.querySelector('#lname').value;
  const role = document.querySelector('input[name="role"]:checked').value;
  const languages = Array.from(document.querySelectorAll('input[name="fav_language"]:checked')).map(language => language.value);
 
  // create the message to display
  let message = `First name: ${firstName}\nLast name: ${lastName}\nRole: ${role}\nLanguages: ${languages.join(', ')}`;
 
  // display the message in an alert box
  alert(message);
}