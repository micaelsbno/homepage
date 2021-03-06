var openButton = document.querySelector('.button')
openMenu = () => {
  document.querySelector('.menu-hidden').className = 'menu-show'
}
openButton.addEventListener('click', () => openMenu())

var closeButton = document.querySelector('.fa-times')
closeMenu = () => document.querySelector('.menu-show').className = 'menu-hidden'
closeButton.addEventListener('click', () => closeMenu())

random = () => [Math.floor(Math.random() * 2), Math.floor(Math.random() * 9)]
randomScale = () => `${random()[0]}.${random()[1]}`
randomPos = () => [Math.floor(Math.random() * 10), Math.floor(Math.random() * 5)]
randomPosition = () => { return {x: (randomPos()[0]+2).toString() + randomPos()[0], y: randomPos()[1].toString() + randomPos()[1] } }

createClouds = () => {
  for (i = 0; i < 15; i++) {
    createCloud(randomScale(),randomPosition())
  }
}

createCloud = (size, position) => {
  container = document.createElement('div')
  size[2] % 2 === 0 ? container.className = 'cloud__container' : container.className = 'cloud__container-2'
  cloud = document.createElement('div')
  cloud.className = 'cloud'
  cloudTop = document.createElement('div')
  cloudTop.className = 'cloud__top'
  cloudTopLeft = document.createElement('div')
  cloudTopLeft.className = 'cloud__top-left'
  cloudTopRight = document.createElement('div')
  cloudTopRight.className = 'cloud__top-right'
  cloudBottom = document.createElement('div')
  cloudBottom.className = 'cloud__bottom'
  cloudTop.appendChild(cloudTopLeft)
  cloudTop.appendChild(cloudTopRight)
  cloud.appendChild(cloudTop)
  cloud.appendChild(cloudBottom)
  container.style = `top: ${position.y}vh; left: ${position.x}vw; `

  cloud.style = `transform: scale(${size})`

  container.appendChild(cloud)
  document.querySelector('.clouds').appendChild(container)
}

createClouds()