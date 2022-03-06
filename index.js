document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function validateForm() {

        const day = document.querySelector('#day').value;

        const male = document.querySelector('#male').value;
        const female = document.querySelector('#female').value;




        if (day <= 0 || day > 31) {

            alert('Your date is invalid,\n please enter the valid date');
            return false;
        }

        if (male !== "" || female !== "") {
            alert('Your Akan name is,Koffi')
            return false;
        }
    };



    const result = document.getElementById('result');

    function validateForm() {

        const dates = new Date(day.value, mont.value, year.value);

        const days = dates.getDay();

        switch (days) {
            case 0:
                result.innerHTML = "Sunday,kwasi";
                break;
            case 1:
                result.innerHTML = "Monday";
                break;
            case 2:
                result.innerHTML = "Tuesday";
                break;
            case 3:
                result.innerHTML = "Wednesday";
                break;
            case 4:
                result.innerHTML = "Thursday";
                break;
            case 5:
                result.innerHTML = "Friday";
                break;
            case 6:
                result.innerHTML = "Saturday";
                break;

        }



    }
});
newFunction();

function newFunction() {

    const male = document.querySelector('#male').value;
    const female = document.querySelector('#female').value;
    const maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', ' Kofi', 'Kwame'];
    const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];






}