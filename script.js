document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const location = document.querySelector('#location').value;
        const password2 = document.querySelector('#password2').value;


        if (username == "") {

            alert('Fill in your Name');
            return false;

        };


        if (password.length < 8) {

            alert('Password must be must be atleast 8 characters');
            return false;

        } else {
            // alert(`Hello, ${username},\n How is ${location}? \n Welcome to SIR Felix Akan,\n Select your birthday and recieve your Akan Name.`);
        };

        if (password2 == "" || password !== password2) {

            alert('Password does not Match!!!!');
            return false;

        } else {

            alert(`Hello, ${username},\n How is ${location}? \n Welcome to SIR Felix Akan,\n Select your birthday and recieve your Akan Name.`);
        };

    }
});





//const form = document.getElementById('form');
//const username = document.getElementById('username');
//const password = document.getElementById('password');
//const password2 = document.getElementById('password2');
//const location = document.getElementById('location');


//form.addEventListener('submit', (e) => {

//e.preventDefault();

//validateInputs();


//});

//function validateInputs() {
//const usernameValue = username.value.trim();
//const passwordValue = password.value.trim();
//const password2Value = password2.value.trim();
//if (usernameValue === "") {
//setErrorFor(username, 'Fill your Name')

//}
//else { setSuccessFor(username); }

//};

//function setErrorFor(input, message) {
//const containerForm = input.parentElement;
//const small = containerForm.querySelector('small')
//small.innerText = message;


//containerForm.className = 'controlForm error'


//};

//function setSuccessFor(input) {
//const containerForm = input.parentElement;

//containerForm.className = 'controlForm error'


//};