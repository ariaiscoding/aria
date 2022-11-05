const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }else {
            entry.target.classList.remove('show');
          }  
        });
});

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => observer.observe(el));

