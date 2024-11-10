// Function to add Education fields
function addEducation() {
    var educationList = document.getElementById("education-list");
    var newEducation = document.createElement("li");
    newEducation.innerHTML = "\n        <input type=\"text\" placeholder=\"Time Period\" required>\n        <input type=\"text\" placeholder=\"Degree\" required>\n        <input type=\"text\" placeholder=\"University Name\" required>\n    ";
    educationList.appendChild(newEducation);
}
// Function to add Experience fields
function addExperience() {
    var experienceList = document.getElementById("experience-list");
    var newExperience = document.createElement("li");
    newExperience.innerHTML = "\n        <input type=\"text\" placeholder=\"Time Period\" required>\n        <input type=\"text\" placeholder=\"Company Name\" required>\n        <input type=\"text\" placeholder=\"Position\" required>\n        <textarea placeholder=\"Responsibility\" required></textarea>\n    ";
    experienceList.appendChild(newExperience);
}
// Function to add Skill fields
function addSkill() {
    var skillsList = document.getElementById("skills-list");
    var newSkill = document.createElement("li");
    newSkill.innerHTML = "<input type=\"text\" placeholder=\"Skill\" required>";
    skillsList.appendChild(newSkill);
}
// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var objective = document.getElementById("objective").value;
    var educationItems = document.querySelectorAll("#education-list input");
    var experienceItems = document.querySelectorAll("#experience-list input, #experience-list textarea");
    var skillsItems = document.querySelectorAll("#skills-list input");
    var imageInput = document.getElementById("image");
    var imageUrl = imageInput.files && imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : "default-image.jpg"; // Default if no image selected
    var formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";
    var resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.innerHTML = "\n        <div class=\"leftside\">\n            <div class=\"image\">\n                <img src=\"".concat(imageUrl, "\" alt=\"Profile Image\" contenteditable=\"true\">\n            </div>\n            <h2 contenteditable=\"true\">").concat(name, "<br><span>").concat(profession, "</span></h2>\n            <ul>\n                <li contenteditable=\"true\">Phone: ").concat(phone, "</li>\n                <li contenteditable=\"true\">Email: ").concat(email, "</li>\n                <li contenteditable=\"true\">LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></li>\n            </ul>\n        </div>\n        <div class=\"rightside\">\n            <div class=\"about\">\n                <h2>Objective</h2>\n                <p contenteditable=\"true\">").concat(objective, "</p>\n            </div>\n            <div class=\"education\">\n                <h3>Education</h3>\n                <ul>").concat(Array.from(educationItems).map(function (item) { return "<li contenteditable=\"true\">".concat(item.value, "</li>"); }).join(''), "</ul>\n            </div>\n            <div class=\"experience\">\n                <h3>Experience</h3>\n                <ul>").concat(Array.from(experienceItems).map(function (item) { return "<li contenteditable=\"true\">".concat(item.value, "</li>"); }).join(''), "</ul>\n            </div>\n            <div class=\"skills\">\n                <h3>Skills</h3>\n                <ul>").concat(Array.from(skillsItems).map(function (item) { return "<li contenteditable=\"true\">".concat(item.value, "</li>"); }).join(''), "</ul>\n            </div>\n        </div>\n    ");
    resumeContainer.style.display = "grid";
}
document.getElementById("resumeForm").addEventListener("submit", generateResume);
