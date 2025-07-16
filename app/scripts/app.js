const burgerMenu = document.querySelector('.mnu-button__menu');

if (burgerMenu) {
  const menuBackground = document.querySelector('.main-menu-background');
  const mainMenu = document.querySelector('.main-menu');

  burgerMenu.addEventListener('click', menu => {
    burgerMenu.classList.toggle('active');

    if (burgerMenu.classList.contains('active')) {
      lenis.stop();
      menuBackground.classList.add('active');
      mainMenu.classList.add('active');
    } else {
      lenis.start();
      menuBackground.classList.remove('active');
      mainMenu.classList.remove('active');
    }
  });
}

gsap.utils.toArray('[data-parallax-wrapper]').forEach(container => {
  const img = container.querySelector('[data-parallax-target]');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true
    }
  });

  tl.fromTo(img, {
    yPercent: -15,
    ease: 'none'
  }, {
    yPercent: 15,
    ease: 'none'
  })
});

const accordionCol = document.querySelectorAll('.accordion__col')

accordionCol.forEach(col => {
  col.addEventListener('mouseenter', () => {
    accordionCol.forEach(c => {
      c.classList.remove('active')
      col.classList.add('active')
    })
  })
});

// adding smooth scrolling
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
