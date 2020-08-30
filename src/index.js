const accordionContainer = document.querySelector('.accordion-container')

const IS_OPEN_CLASS = 'is-open'

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    accordion.classList.toggle(IS_OPEN_CLASS)
  }
})