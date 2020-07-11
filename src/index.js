import './style.scss'

const menuToggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active')
  menu.classList.toggle('md:-translate-x-full')
})
