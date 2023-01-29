let sideNav = document.querySelector('aside');
let closeBtn = document.getElementById('close')
let openBtn = document.getElementById('burger')
let cards = document.querySelectorAll('section .box figure')


sideNav.addEventListener('transitionend', (e) => {
    if (e.propertyName != 'transform') return;

    let isOpen = document.location.hash == 'slide-nav';
    isOpen
    ? closeBtn.focus()
    : openBtn.focus();
})

sideNav.addEventListener('keyup', e => {
    if (e.key == 'Escape') {
        document.location.hash = '';
    }
})



function check(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(check);
cards.forEach((card) => observer.observe(card));