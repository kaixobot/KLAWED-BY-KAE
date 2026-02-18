// Mobile menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav ul');
if (burger && menu){
  burger.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
},{ threshold: 0.12 });
revealEls.forEach(el=> io.observe(el));

// Booking form -> mailto fallback for static hosting
const bookingForm = document.querySelector('#booking-form');
if(bookingForm){
  bookingForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = bookingForm.querySelector('[name="name"]').value.trim();
    const email = bookingForm.querySelector('[name="email"]').value.trim();
    const phone = bookingForm.querySelector('[name="phone"]').value.trim();
    const service = bookingForm.querySelector('[name="service"]').value;
    const date = bookingForm.querySelector('[name="date"]').value;
    const time = bookingForm.querySelector('[name="time"]').value;
    const notes = bookingForm.querySelector('[name="notes"]').value.trim();

    const to = "your@email.address"; // TODO: replace with your real email
    const subject = encodeURIComponent(`KBK Nails Booking: ${name} - ${service}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Preferred date: ${date}
Preferred time: ${time}

Notes:
${notes}
`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    bookingForm.reset();
  });
}
