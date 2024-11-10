// Function to add Education fields
function addEducation(): void {
    const educationList = document.getElementById("education-list") as HTMLUListElement;
    const newEducation = document.createElement("li");
    newEducation.innerHTML = `
        <input type="text" placeholder="Time Period" required>
        <input type="text" placeholder="Degree" required>
        <input type="text" placeholder="University Name" required>
    `;
    educationList.appendChild(newEducation);
}

// Function to add Experience fields
function addExperience(): void {
    const experienceList = document.getElementById("experience-list") as HTMLUListElement;
    const newExperience = document.createElement("li");
    newExperience.innerHTML = `
        <input type="text" placeholder="Time Period" required>
        <input type="text" placeholder="Company Name" required>
        <input type="text" placeholder="Position" required>
        <textarea placeholder="Responsibility" required></textarea>
    `;
    experienceList.appendChild(newExperience);
}

// Function to add Skill fields
function addSkill(): void {
    const skillsList = document.getElementById("skills-list") as HTMLUListElement;
    const newSkill = document.createElement("li");
    newSkill.innerHTML = `<input type="text" placeholder="Skill" required>`;
    skillsList.appendChild(newSkill);
}

// Function to generate the resume
function generateResume(event: Event): void {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
    const educationItems = document.querySelectorAll("#education-list input") as NodeListOf<HTMLInputElement>;
    const experienceItems = document.querySelectorAll("#experience-list input, #experience-list textarea") as NodeListOf<HTMLInputElement>;
    const skillsItems = document.querySelectorAll("#skills-list input") as NodeListOf<HTMLInputElement>;

    const imageInput = document.getElementById("image") as HTMLInputElement;
    const imageUrl = imageInput.files && imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : "default-image.jpg"; // Default if no image selected

    const formContainer = document.getElementById("form-container") as HTMLDivElement;
    formContainer.style.display = "none";

    const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
    resumeContainer.innerHTML = `
        <div class="leftside">
            <div class="image">
                <img src="${imageUrl}" alt="Profile Image" contenteditable="true">
            </div>
            <h2 contenteditable="true">${name}<br><span>${profession}</span></h2>
            <ul>
                <li contenteditable="true">Phone: ${phone}</li>
                <li contenteditable="true">Email: ${email}</li>
                <li contenteditable="true">LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></li>
            </ul>
        </div>
        <div class="rightside">
            <div class="about">
                <h2>Objective</h2>
                <p contenteditable="true">${objective}</p>
            </div>
            <div class="education">
                <h3>Education</h3>
                <ul>${Array.from(educationItems).map(item => `<li contenteditable="true">${item.value}</li>`).join('')}</ul>
            </div>
            <div class="experience">
                <h3>Experience</h3>
                <ul>${Array.from(experienceItems).map(item => `<li contenteditable="true">${item.value}</li>`).join('')}</ul>
            </div>
            <div class="skills">
                <h3>Skills</h3>
                <ul>${Array.from(skillsItems).map(item => `<li contenteditable="true">${item.value}</li>`).join('')}</ul>
            </div>
        </div>
    `;
    resumeContainer.style.display = "grid";
}

document.getElementById("resumeForm")!.addEventListener("submit", generateResume);
