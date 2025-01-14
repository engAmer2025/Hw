const imageContainer = document.getElementById("imageContainer");
const images = imageContainer.querySelectorAll("img");
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100; // تعديل: استخدام عرض الصورة بدلاً من 400
  imageContainer.style.transform = `translateX(${offset}%)`; // تعديل: استخدام النسبة المئوية للتحريك
}

function prevImage() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  updateSlider();
}

function nextImage() {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        // Show response message
        document.getElementById("response-message").textContent = "Thank you for reaching out, " + name + ". We will get back to you soon!";
        document.getElementById("response-message").style.color = "green";

        // Optionally, send the data using an API or Email service
        // Example: Use Fetch or AJAX to send data to a server here

        // Reset the form
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response-message").textContent = "Please fill in all fields!";
        document.getElementById("response-message").style.color = "red";
    }
});
