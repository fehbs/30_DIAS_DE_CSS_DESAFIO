const curtain = document.querySelector('.curtain')
const spans = []
const spanAmount = 15
let direction = 1

for (let i = 0; i < spanAmount; i++) {
  const span = document.createElement('span')
  span.style.width = `${100 / spanAmount}%`
  curtain.appendChild(span)
  spans.push(span)
}

function showCurtainEffect(start, end, current) {
  const gap = (end - start) / spanAmount

  spans.forEach((span, i) => {
    const s = start + (gap * i)
    const e = s + gap * 10
    const ratio = (current - s) / (e - s)
    const value = ratio > 1 ? 1.05 : ratio < 0 ? 0 : ratio

    span.style.transform = `scale(1.05, ${value})`
    span.style.transition = `transform 200ms ease-in-out ${
    direction > 0 ? 13 * i : 13 * spanAmount - 13 * i
  }ms`
  })
}

let oldScrollY = 0
function scrollHandler() {
  const scrollY = window.scrollY
  if (oldScrollY < scrollY) direction = 1
  else direction = -1
  showCurtainEffect(1000, 1700, scrollY)
  oldScrollY = scrollY
}

window.addEventListener('scroll', scrollHandler) 