function myFunction() {
  var x = document.getElementById('Menu')
  if (x.className === 'nav__list') {
    x.className += '__responsive'
  } else {
    x.className = 'nav__list'
  }
}
