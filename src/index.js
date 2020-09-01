const accordionContainer = document.querySelector('.accordion-container')

const IS_OPEN_CLASS = 'is-open'

/**
 * Finds the height of accordion content
 * @param {HTMLElement} accordion The accordion
 * @returns {Number} Height of accordion content in px
 */
const getContentHeight = accordion => {
  const accordionInner = accordion.querySelector('.accordion__inner')

  if (!accordion.classList.contains(IS_OPEN_CLASS)) return 0
  return accordionInner.getBoundingClientRect().height
}

/**
 * Set height of accordion
 * @param {*} accordion The accordion
 * @param {*} height Height of accordion inner content in px
 */
const setContentHeight = (accordion, height) => {
  const accordionContent = accordion.querySelector('.accordion__content')
  accordionContent.style.height = `${height}px`
}

// CODE

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement

  // toggle open class
  accordion.classList.toggle(IS_OPEN_CLASS)

  // set content height
  const height = getContentHeight(accordion)
  setContentHeight(accordion, height)
})