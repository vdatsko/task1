// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfBWSkQKpQvBLsTcAmCK0Mk12R8ojfok0",
  authDomain: "task1-36fac.firebaseapp.com",
  databaseURL: "https://task1-36fac.firebaseio.com",
  projectId: "task1-36fac",
  storageBucket: "",
  messagingSenderId: "676561918947"
};
firebase.initializeApp(config);


// Referance letters collection
var letterRef = firebase.database().ref('letters');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

// get values
  var name = getInputVal('name');
  var surname = getInputVal('surname');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var country = getInputVal('country');
  var city = getInputVal('city');
  var code = getInputVal('code');
  var address = getInputVal('address');
  var number = getInputVal('number');
  var date = getInputVal('date');
  var cvc = getInputVal('cvc');

  // Save letter
  saveLetter(name, surname, company, email, phone, 
    country, city, code, address, number, date, cvc);

    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
}


// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save letter to Firebase
function saveLetter(name, surname, company, email, phone, country, city, code, address, number, date, cvc){
  var newLetterRef = letterRef.push();
  newLetterRef.set({
    name: name,
    surname: surname,
    company: company,
    email: email,
    phone: phone,
    country: country,
    city: city,
    code: code,
    address: address,
    number: number,
    date: date,
    cvc: cvc
  });
}