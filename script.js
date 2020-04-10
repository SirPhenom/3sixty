loginBtn = document.getElementById('login-btn');
signupBtn = document.getElementById('signup-btn')
loginForm = document.getElementById('login-form');
signupForm = document.getElementById('signup-form')
loginClose = document.getElementById('login-close-button');
signupClose = document.getElementById('signup-close-button');
homeBtn = document.getElementsByClassName('home-btn')[0];

(function() {
  var menus = document.getElementById('menuDisplay');
  var menuButton = document.getElementById('menu')
  menuButton.addEventListener('click', function() {
    if (menus.classList.contains("menuNone")) {
      menus.classList.remove("menuNone");
      menus.classList.add("menuShow");
      menus.classList.add("fadeInDown");
    } else {
      menus.classList.add("menuNone");
      menus.classList.remove("menuShow")
    }
  })
})();


loginBtn.addEventListener('click', () => {
  if (signupForm.style.display = 'block'){
    signupForm.style.display = 'none';
  }
  if (loginForm.style.display = 'none'){
    loginForm.style.display = 'block';
  }
})

signupBtn.addEventListener('click', () => {
  if (loginForm.style.display = 'block') {
    loginForm.style.display = 'none';
  }
  if (signupForm.style.display = 'none'){
    signupForm.style.display = 'block';
  }
})

homeBtn.addEventListener('click', () => {
  if (loginForm.style.display = 'block') {
    loginForm.style.display = 'none';
  }
  if (signupForm.style.display = 'none'){
    signupForm.style.display = 'block';
  }
})

loginClose.addEventListener('click', () => {
  if (loginForm.style.display = 'block') {
    loginForm.style.display = 'none';
  };
  
})

signupClose.addEventListener('click', () => {
  if (signupForm.style.display = 'block'){
    signupForm.style.display = 'none';
  }
})