document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper1');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btn = document.querySelector('.btnLogin');
    const iconClose = document.querySelector('.icon-close');
  
    registerLink.addEventListener('click', function (event) {
      event.preventDefault();
      wrapper.classList.add('active');
    });
  
    loginLink.addEventListener('click', function (event) {
      event.preventDefault();
      wrapper.classList.remove('active');
    });
    btn.addEventListener('click', function (event) {
    event.preventDefault();
    wrapper.classList.add('active-login');
  });
  iconClose.addEventListener('click', function (event) {
    event.preventDefault();
    wrapper.classList.remove('active-login');
  });
  });
  
  