let icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

icon.onclick = () => {
  icon.classList.toggle('bx-chevrons-up');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
      });
      
      sec.classList.add('show-animate');
    }

    else{
      sec.classList.remove('show-animate');
    }

  });

  var head = document.querySelector('.header');
  head.classList.toggle('scrolled', window.scrollY > 100);
  

  icon.classList.remove('bx-x');
  navbar.classList.remove('active');
}


var typingEffect = new Typed(".multiText", {
  strings: ["Frontend Developer", "Coder", "Student"],
  loop: true,
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000
});

