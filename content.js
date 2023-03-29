window.onscroll = function() {scrollFunction()};
let logo = document.getElementsByClassName("logo")[0];

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementsByClassName("navbar")[0].classList.add("sticky");
    logo.style.display= 'none';
  } else {
    document.getElementsByClassName("navbar")[0].classList.remove("sticky");
    logo.style.display= 'block';
  }
}

const image = document.querySelector('.logo');
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) {
    image.style.display = 'none';
    nav.style.position = 'fixed';
    nav.style.top = '29px';
   
  } else {
    image.style.display = 'none';
    nav.style.position = 'static';
    setTimeout(() => {
      image.style.display = 'block';
    }, 50);
  }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

const form = document.querySelector('#love-form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fname = document.querySelector('#fname').value;
  const sname = document.querySelector('#sname').value;
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'bdb1a8e490msh73e0ebc6926c275p12c863jsn7f45f2eb697c',
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      result.textContent = `Your love percentage is ${data.percentage} and your love is: ${data.result}.`;
    })
    .catch(error => console.error(error));
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}