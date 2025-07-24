const darkModeSwitch = document.getElementById('darkModeSwitch');
const htmlElement = document.documentElement;

darkModeSwitch.addEventListener('change', () => {
  if (darkModeSwitch.checked) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Optional: Persist the preference in local storage
  } else {
    htmlElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light'); // Optional: Persist the preference in local storage
  }
});

// Optional: Check for saved preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  if (savedTheme === 'dark') {
    darkModeSwitch.checked = true;
  }
}