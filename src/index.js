const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion__header')

  header.addEventListener('click', () => {
    accordion.classList.toggle('is-open')
  })
})