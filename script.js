const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imageProudCoder = document.getElementById('img-proud-coder');
const imageFeelingProud = document.getElementById('img-feeling-proud');
const imageConceptualIdea = document.getElementById('img-conceptual-idea');
const textBox = document.getElementById('text-box');

const [toggleIconText, toggleIconIcon] = toggleIcon.children;

function setImagesByMode(mode) {
  imageProudCoder.src = `img/undraw_proud_coder_${mode}.svg`;
  imageFeelingProud.src = `img/undraw_feeling_proud_${mode}.svg`;
  imageConceptualIdea.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function setMode(mode) {
  // Set in localStorage the selected mode
  localStorage.setItem('mode', mode);

  const isDarkMode = mode === 'dark';

  // Set the toggle checked programmaticaly (needed if you enter in dark mode)
  toggleSwitch.checked = isDarkMode;

  document.documentElement.setAttribute('data-theme', mode);
  toggleIconText.textContent = `${isDarkMode ? 'Dark' : 'Light'} Mode`;
  isDarkMode
    ? toggleIconIcon.classList.replace('fa-sun', 'fa-moon')
    : toggleIconIcon.classList.replace('fa-moon', 'fa-sun');
  setImagesByMode(mode);
}

// Switch Theme Dinamically
function swtichTheme(event) {
  const { checked } = event.target;
  const mode = checked ? 'dark' : 'light';
  setMode(mode);
}

if (!localStorage.getItem('mode')) {
  localStorage.setItem('mode', 'light');
}

setMode(localStorage.getItem('mode'));

// Event listeners
toggleSwitch.addEventListener('change', swtichTheme);
