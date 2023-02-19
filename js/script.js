// Variables .. 
const toggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');


if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    lightIcon.classList.remove('hidden')
  } else {
    darkIcon.classList.remove('hidden')
  }

// toggleBtn Click ..
toggleBtn.addEventListener('click' , toggleMode)

function toggleMode() {

    lightIcon.classList.toggle('hidden')
    darkIcon.classList.toggle('hidden')

    if(localStorage.getItem('color-theme')) {
        // if light , make it dark and save it to local storage
        if(localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme' , 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme' , 'light')
        }
    } else {
        if(document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme' , 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme' , 'dark')

        }
    }
}

