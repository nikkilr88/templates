const navbar = document.querySelector('nav')

window.addEventListener('scroll', changeNav)

function changeNav(e) {
   if(this.scrollY > 50) {
      navbar.style.background = '#fff'
   } else {
      navbar.style.background = 'none'
   }
}