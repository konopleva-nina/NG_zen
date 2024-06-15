const connectionNode = document.querySelector('#connection')

const hendleConnectionNodeChange = (event) => {
  const parentNode = event.target.parentElement
  const spanNode = parentNode.querySelector('span')
  const { value } = event.target
  console.log({ value })

  if (event.target.value) spanNode.style.display = 'none'
  else spanNode.style.display = 'block'
}

document.addEventListener('change', hendleConnectionNodeChange)
