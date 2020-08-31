const accordionContainer = document.querySelector('.accordion-container')

const IS_OPEN_CLASS = 'is-open'

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')

  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    const accordionContent = accordionHeader.nextElementSibling
    const accordionInner = accordionContent.children[0]

    const height = accordionInner.getBoundingClientRect().height

    accordion.classList.toggle(IS_OPEN_CLASS)

    if (accordion.classList.contains(IS_OPEN_CLASS)) {
      accordionContent.style.height = height + 'px'
    } else {
      accordionContent.style.height = 0;
    }

  }
})