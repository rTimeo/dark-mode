



const darkModeToggle = document.querySelector('#dark-mode-toggle');

//function that activates the dark mode
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}
//function that deactivates dark mode
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
//retrieves the value stored in local storage
let darkMode = localStorage.getItem('darkMode'); 

//Activate dark mode on loading (if previously activated):
if (darkMode === 'enabled') {
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
  //retrieves the current value of "darkmode".
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

