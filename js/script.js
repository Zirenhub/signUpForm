const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordMessage = document.getElementById('message');
const passwordReq = document.getElementById('passwordReq');

function getPasswordLength() {
  let passLength = password.value.length;
  return passLength;
}

function changePasswordReqStatus() {
  if (getPasswordLength() >= 8) {
    passwordReq.classList.remove('password-req-special');
    passwordReq.classList.add('password-req-special-check');
  } else {
    passwordReq.classList.remove('password-req-special-check');
    passwordReq.classList.add('password-req-special');
  }
}

function check() {
  if (confirmPassword.value === '' || password.value === '') {
    if (confirmPassword.value === '' && password.value === '') {
      passwordMessage.textContent = '';
    }
    return;
  } else {
    if (password.value === confirmPassword.value) {
      passwordMessage.style.color = 'green';
      passwordMessage.textContent = 'Matching';
    } else {
      passwordMessage.style.color = 'red';
      passwordMessage.textContent = "Password's don't match";
    }
  }
}

function passwordReqDesc() {
  passwordReq.textContent = 'Password must be at least 8 characters';
  passwordReq.classList.add('password-req-special');
}
