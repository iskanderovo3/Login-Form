const loginBtn = document.getElementById('login-btn'),
    signupBtn = document.getElementById('signup-btn'),
    formFirst = document.querySelector('.block__form'),
    formSecond = document.querySelector('.block__second__form');

function addF() {
    formFirst.classList.add('active');
    formSecond.classList.add('active');
    signupBtn.style.background = 'linear-gradient( to right, #CC00FF 30%,  #FF3399 100% )';
    signupBtn.style.color = '#fff';
    loginBtn.style.background = 'none';
    loginBtn.style.border = '1px solid gray';
    loginBtn.style.color = '#000';
}
function removeF() {
    formFirst.classList.remove('active');
    formSecond.classList.remove('active');
    loginBtn.style.background = 'linear-gradient( to right, #CC00FF 30%,  #FF3399 100% )';
    loginBtn.style.color = '#fff';
    signupBtn.style.background = 'none';
    signupBtn.style.border = '1px solid gray';
    signupBtn.style.color = '#000';
}


signupBtn.addEventListener('click', addF)
loginBtn.addEventListener('click', removeF)