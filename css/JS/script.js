console.log("js/script.js");

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


const toggleSkills = document.getElementById("toggleSkills");

const skillsSection = document.getElementById("skillsSection")
skillsSection.classList.add("hidden");
toggleSkills.addEventListener("click", () => {
    skillsSection.classList.toggle("hidden");
});


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});