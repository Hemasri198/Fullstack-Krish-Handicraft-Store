document.addEventListener('DOMContentLoaded',()=> {
    const sr = ScrollReveal({
        distance:'60px',
        duration:2500,
        delay:400,
        reset:true
    })
    sr.reveal('.text',{delay:200,origin:'top'});

    sr.reveal('.form-container form',{delay:800,origin:'left'});

    sr.reveal('.heading',{delay:800,origin:'top'});

    sr.reveal('.service-container .box',{delay:600,origin:'top'});

    sr.reveal('.Products-container .box',{delay:800,origin:'top'});

    sr.reveal('.about-container .about-text',{delay:800,origin:'top'});

    sr.reveal('.reviews-container .box',{delay:400,origin:'bottom'});
});

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
    });
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    alert(data.message);
    if (response.ok) {
    authForm.style.display = 'block';
    registerForm.style.display = 'none';
    orderForm.style.display = 'none';
    }
    } catch (error) {
    console.error('Error during signup:', error);
    alert(`An error occurred during signup: ${error.message}`);
    }
   });