const accordionContainer = document.querySelector('.accordion-container')

const IS_OPEN_CLASS = 'is-open'

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')

  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement
  accordion.classList.toggle(IS_OPEN_CLASS)

  const accordionContent = accordionHeader.nextElementSibling
  const accordionInner = accordionContent.children[0]
  const { height } = accordionInner.getBoundingClientRect()

  accordionContent.style.height = accordion.classList.contains(IS_OPEN_CLASS)
    ? `${height}px`
    : 0
})