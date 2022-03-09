let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateDate();

});


function validateDate() {

    const gender = document.getElementById('gender').value;
    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let date = document.getElementById("date").value;
    if (!date) {
        return alert("Please select Your Date to continue!!!");
    }

    if (gender === "none") {
        return alert("Please select your gender to continue!!!")

    }


    let bornDate = new Date(date);
    let maleNameValue = getmaleAkanNames(maleAkanNames, bornDate.getDay());
    let femaleNameValue = getfemaleAkanNames(femaleAkanNames, bornDate.getDay());



    if (date && maleNameValue !== "none") {
        let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < daysOfTheWeek.length; i++) {

            if (bornDate.getDay() === i) {
                alert(`Born on ${daysOfTheWeek[i]},\n your Akan name is ${maleNameValue}`);

                document.querySelector("#gender").value = "none";
                document.querySelector("#date").value = "";
            }
        }
    }
    if (date && femaleNameValue !== "none") {
        let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < daysOfTheWeek.length; i++) {

            if (bornDate.getDay() === i) {
                alert(`Born on ${daysOfTheWeek[i]},\n your Akan name is ${femaleNameValue}`);

                document.querySelector("#gender").value = "none";
                document.querySelector("#date").value = "";
            }
        }
    }

};