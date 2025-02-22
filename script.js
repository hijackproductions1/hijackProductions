document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    let params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    const serviceID = "service_yjxq022";
    const templateID = "template_tlm2zdo";

    emailjs.send(serviceID, templateID, params)
    .then(response => {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
        
        // Clear form fields after successful submission
        document.getElementById("contact-form").reset();
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
    });
});


    const sliderItems = document.querySelectorAll('.slider-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    let intervalId;

    // Function to show a specific slide
    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    // Auto-rotation every 10 seconds
    function startSlider() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            showSlide(currentIndex);
        }, 10000); // 10 seconds
    }

    // Stop auto-rotation temporarily on manual interaction
    function resetSlider() {
        clearInterval(intervalId);
        startSlider();
    }

    // Arrow navigation
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
        resetSlider();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
        resetSlider();
    });

    // Start the slider on page load
    showSlide(currentIndex); // Show the first slide immediately
    startSlider();
