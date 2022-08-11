

    // ULTIMATE JAVASCRIPT FOR INDEX

(() => {

  let elementTargets = [
    '.cursel-center-img', '#count', '#logo', '#job', 'nav', '#cr', '.hover-delay'
  ]

  for (let i = 0; i < elementTargets.length; i++) {
    setTimeout(
        ()=>  document.querySelector(elementTargets[i]).classList.add('load'),
        500
    )
  }

  setTimeout(
      () => {
        let els = document.querySelectorAll('.cursel-center-tit h1')
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add('load')
        }
      },
      500
  )

  setTimeout(
      () => {
        let els = document.querySelectorAll('.cursel-under h1')
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add('load')
        }
      },
      500
  )

  setTimeout(
      () => {
        let els = document.querySelectorAll('.cursel-up h1')
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add('load')
        }
      },
      500
  )

})()


// start hover on image
document.querySelector('.link-hover').addEventListener('mouseleave', function(){
  document.querySelector(".cursel-center-img-before").classList.remove("is_active");
  document.querySelector(".cursel-center-img-after").classList.remove("is_active");
  document.querySelector(".cursel-center-tit").classList.remove("is_active");
  document.querySelector(".cursel-center-tit-base").classList.remove("is_active");
  document.querySelector("body").classList.remove("on");

});

document.querySelector('.link-hover').addEventListener('mouseover', function(){
  document.querySelector(".cursel-center-img-before").classList.add('is_active');
  document.querySelector(".cursel-center-img-after").classList.add('is_active');
  document.querySelector(".cursel-center-tit").classList.add('is_active');
  document.querySelector(".cursel-center-tit-base").classList.add('is_active');
  document.querySelector("body").classList.add("on");
})
// end hover



// click-menu

document.getElementById('menu_about').onclick =( )=> {
  if (document.getElementById('menu_about').classList.contains('on')) {
    document.getElementById('menu_about').classList.remove("on");
    document.getElementById('about').classList.remove('is_active');
    document.getElementById('menu_about').innerText = "ABOUT ME";
  } else {
    document.getElementById('menu_about').classList.add('on');
    document.getElementById('menu_about').classList.add("on");
    document.getElementById("about").classList.add('is_active');
    document.getElementById('menu_about').innerText = "CLOSE";
  }
}

// one page

( () => {
  let ANIMATION_DELAY = 800 // delay scroll for animation
  let IMAGE_CHANGE_DELAY = 400 // time for animate the image
  let LOADING_DELAY = 700 // time for end animation to prepare next animation
  let IMAGE_DIR = 'assets/img/'

  // variable jquery style (for tell that variable more specific)
  //   collect all the selector
  let $countNum = document.querySelector('#count-num')
  let $maxNum = document.querySelector('#max-num')
  let $cursel = document.querySelector('#cursel')
  let $link = document.querySelector('#cursel .link-hover')
  let $centerImg = document.querySelector('.cursel-center-img')
  let $before = document.querySelector('.cursel-center-img-before')
  let $beforeImg = document.querySelector('.cursel-center-img-before img')
  let $after = document.querySelector('.cursel-center-img-after')
  let $afterImg = document.querySelector('.cursel-center-img-after img')
  let $centerTitH1base = document.querySelector('.cursel-center-tit-base h1')
  let $centerTitH1outline = document.querySelector('.cursel-center-tit-outline h1')
  let $curselUpH1 = document.querySelector('.cursel-up h1')
  let $curselUnderH1 = document.querySelector('.cursel-under h1')

  // console.log($curselUpH1)

  let TITLES = [
    ['AFRIZA<br>PORTFOLIO', 'detail/afriza.html'],
    ['ALISHAFAR<br>DIARY', 'detail/alisharaf.html'],
    ['CRISTOPHER<br>AWARDING AGENCY', 'detail/christopher.html'],
  ]
  let IMAGES = [
    ['cooler_afrizagilleon.jpeg', 'afrizagilleon.jpeg'],
    ['02_alisharaf/bnw/0.jpg', '02_alisharaf/0.jpg'],
    ['03_christopherireland/bnw/0.jpg', '03_christopherireland/0.jpg'],
  ]

  let itemCount = TITLES.length
  let clientY = 0
  let isAnimating = false
  let currentIndex = 0

  let setScrollEvents = function() {
    window.addEventListener('touchstart', function(ev) {
      clientY = ev.changedTouches[0].clientY
    })

    window.addEventListener('mousewheel', (ev) => {
      let deltaY = ev.wheelDelta
      let direction = (deltaY < 0) ? 'up' : 'down'
      tryMove(direction)
    } )

    window.addEventListener('wheel', (ev) => {
      let deltaY = ev.wheelDelta
      let direction = (deltaY < 0) ? 'down' : 'up'
      tryMove(direction)
    })

    // I DONT KNOW HOW IT GETTING ERROR !??? Okay fixed :)
    window.ontouchmove = function(ev) {
      let nextClientY = ev.changedTouches[0].clientY
      let direction = (clientY < nextClientY) ? 'up' : 'down'
      clientY = nextClientY
      tryMove(direction)
    }
  }

  // image preload
  let preloadImage = function(path) {
    let img = new Image
    img.src = IMAGE_DIR + path
  }

  let preloadImages = function() {
    IMAGES.forEach(function(item) {
      preloadImage(item[0])
      preloadImage(item[1])
    })
  }

  // make number being 2 digit
  let z2 = function(num) {
    return ('0' + num).slice(-2)
  }

  // enter the event ⇛ make move call
  let tryMove = function(direction /* up | down */) {
    if (isAnimating || (direction !== 'up' && direction !== 'down')) return
    isAnimating = true

    switch(direction) {
      case 'up':
        currentIndex -= 1
        if (currentIndex < 0) {
          currentIndex = itemCount - 1
        }
        // console.log('up')
        break;
      case 'down':
        currentIndex += 1
        if (currentIndex >= itemCount) {
          currentIndex = 0
        }
        // console.log('down')
        break;
      default: return
    }

    move(direction)
    setTimeout(function() { isAnimating = false }, ANIMATION_DELAY)
  }

  // page navigation
  let move = function(direction) {
    // animation start
    $cursel.classList.add(`stop`)
    $cursel.classList.add(direction)
    $cursel.offsetTop
    $cursel.offsetLeft
    $cursel.classList.remove('stop')
    $cursel.classList.add('start')
    $centerImg.classList.remove('load')

    // process text change
    updateNum()
    updateTitle()

    // image switching
    setTimeout(function() {
      $beforeImg.setAttribute('src', IMAGE_DIR + IMAGES[currentIndex][0])
      $afterImg.setAttribute('src', IMAGE_DIR + IMAGES[currentIndex][1])
    }, IMAGE_CHANGE_DELAY)

    // end animation
    setTimeout(function() {
      $cursel.classList.remove('start')
      $cursel.classList.remove(direction)
      $centerImg.classList.add('load')
    }, LOADING_DELAY)
  }

  // counter update
  let updateNum = function() {
    let num = z2(currentIndex + 1)
    $countNum.innerHTML = num
  }

  // title and link update
  let updateTitle = function() {
    let prevIndex = currentIndex - 1
    let nextIndex = currentIndex + 1

    if (prevIndex < 0) {
      prevIndex = itemCount - 1
    }
    if (nextIndex >= itemCount) {
      nextIndex = 0
    }

    $centerTitH1base.innerHTML = TITLES[currentIndex][0]
    $centerTitH1outline.innerHTML = TITLES[currentIndex][0]
    $link.setAttribute('href', TITLES[currentIndex][1])
    $curselUpH1.innerHTML = TITLES[prevIndex][0]
    $curselUnderH1.innerHTML = TITLES[nextIndex][0]
  }

  // initialization process after animation
  preloadImages()
  updateNum()
  updateTitle()
  $maxNum.innerHTML = z2(itemCount)

  // scroll event setting after x seconds
  setTimeout(setScrollEvents, 200)
})();




