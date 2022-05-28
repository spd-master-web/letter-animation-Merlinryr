// //////////////////////////////////////////////////////////////
// FETCHING LETTERS
const title = document.querySelector('.title')
const letterArray = []


// For each letter -> store it inside an array
for(let i = 0; i < title.children.length; i++){
  letterArray.push(title.children[i])
}


// ////////////////////////////////////////////////////////////
// FETCHING MOUSE AND SCROLL VALUES
const mouse = {}
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const scrollPos = {}


window.addEventListener('resize', () => {
  sizes.width = window.innerWidth,
  sizes.height = window.innerHeight
})


// On mouse move -> get mouseX and mouseY + animate single letters
window.addEventListener('mousemove', element => {
  mouse.x = element.clientX / sizes.width - 0.5
  mouse.y = - (element.clientY / sizes.height) + 0.5

  mouseFX()
})

window.addEventListener('scroll', element => {
  scrollPos.y = Math.round((window.scrollY / sizes.height) + 1)
  console.log(scrollPos.y)

  scrollFX()
})


// //////////////////////////////////////////////////////////////
// ANIMATING


const mouseFX = () => {
  const color = '#0003'
  console.log((mouse.x * 10)+'px ' + (mouse.y * 10)+'px ' + '5px ' + color)

  gsap.to(title, {
    duration: 1,
    x: mouse.x * 100,
    y: - mouse.y * 100,
    textShadow: -(mouse.x * 200)+'px ' + (mouse.y * 200)+'px ' + (mouse.x * mouse.y + 10) + 'px ' + color
  })
}


const scrollFX = () => {
  for(let i = 0; i < letterArray.length; i++){
    gsap.to(letterArray[i], {
      duration: 1,
      rotation: scrollPos.y * 180
    });
  }
}

const bounceLetter = () => {
  switch(scrollPos.y) {
    case 1:
      gsap.fromTo(letterArray[0], {
        duration: 1,
        scale: 1,
      },
      {
        scale: 1.5,
        ease: 'bounce'
      }
      )
      break;

    case 2:
      gsap.fromTo(letterArray[1], {
        duration: scrollPos.y,
        scale: 1,
      },
      {
        scale: 1.5,
        ease: 'bounce'
      }
      )
      break;

    case 3:
      gsap.fromTo(letterArray[2], {
        duration: scrollPos.y,
        scale: 1,
      },
      {
        scale: 1.5,
        ease: 'bounce'
      }
      )
      break;

    case 4:
      gsap.fromTo(letterArray[3], {
        duration: scrollPos.y,
        scale: 1,
      },
      {
        scale: 1.5,
        ease: 'bounce'
      }
      )
      break;

  }
}


