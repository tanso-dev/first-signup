function setTheme() {


    //grabs root theme
    const root = document.documentElement;

    //
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    
    //assigns class name to the new theme
    root.className = newTheme;

    //adds required class to all inputs
    allInputs.forEach((inputBox) => {
      if (!inputBox.classList.contains('required')){
        inputBox.classList.add('required');
      }
    });
  }
  
//adds event listener to the correct button
document.querySelector('.theme-toggle').addEventListener('click', setTheme)

document.getElementById('datePicker').valueAsDate = new Date();

const allInputs = document.querySelectorAll('input');