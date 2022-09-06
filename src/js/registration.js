$(document).ready(function () {

    //Обработчик события ввода данных в форму регистрации
    document.querySelector('.reg__form').addEventListener('submit', (e) => {
        e.preventDefault();
        let name = document.getElementById('name');
        const regexp = /^[a-zа-яё]+$/i;
        let isCorrectName = regexp.test(name.value);

        let lastName = document.getElementById('lastName');
        const regexp2 = /^[a-zа-яё]+$/i;
        let isCorrectLastName = regexp2.test(lastName.value);

        let email = document.getElementById('email');
        const regexp3 = /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,6})$/i;
        let isCorrectEmail = regexp3.test(email.value);

        let phone = document.getElementById('phone');
        const regexp4 = /\+7\(\d{3}\)\d{3}-\d{4}/;
        let isCorrectPhone = regexp4.test(phone.value);

        const password = document.getElementById('password');
        const regexp5 = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
        let isCorrectPassword = regexp5.test(password.value);

        const textValid = document.querySelectorAll('.reg__form-text');
        const textPasswordValid = document.querySelector('.reg__form-text-password');

        if (!isCorrectName) {
            textValid[0].classList.remove('invisible-text');
            name.style.outline = "2px solid red";
        } else {
            textValid[0].classList.add('invisible-text');
            name.style.outline = "1px solid #A4A4A4";
        }
        if (!isCorrectLastName) {
            textValid[1].classList.remove('invisible-text');
            lastName.style.outline = "2px solid red";
        } else {
            textValid[1].classList.add('invisible-text');
            lastName.style.outline = "1px solid #A4A4A4";
        }
        if (!isCorrectEmail) {
            textValid[2].classList.remove('invisible-text');
            email.style.outline = "2px solid red";
        } else {
            textValid[2].classList.add('invisible-text');
            email.style.outline = "1px solid #A4A4A4";
        }
        if (!isCorrectPhone) {
            textValid[3].classList.remove('invisible-text');
            phone.style.outline = "2px solid red";
        } else {
            textValid[3].classList.add('invisible-text');
            phone.style.outline = "1px solid #A4A4A4";
        }
        if (!isCorrectPassword) {
            textPasswordValid.style.color = "red";
            password.style.outline = "2px solid red";
        } else {
            textPasswordValid.style.color = "#B1B1B1";
            password.style.outline = "1px solid #A4A4A4";
        }
    });


});
