/*// Grabbing form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const graduationInput = document.getElementById('graduation') as HTMLInputElement;
const intermediateInput = document.getElementById('intermediate') as HTMLInputElement;
const matriculationInput = document.getElementById('matriculation') as HTMLInputElement;
const currentJobInput = document.getElementById('current-job') as HTMLInputElement;
const previousJobInput = document.getElementById('previous-job') as HTMLInputElement;
const skillInput = document.getElementById('skill-input') as HTMLInputElement;
const addSkillBtn = document.getElementById('add-skill-btn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

// Grabbing display elements
const displayName = document.getElementById('display-name') as HTMLParagraphElement;
const displayEmail = document.getElementById('display-email') as HTMLParagraphElement;
const displayContact = document.getElementById('display-contact') as HTMLParagraphElement;
const displayProfilePic = document.getElementById('display-profile-pic') as HTMLImageElement;
const displayGraduation = document.getElementById('display-graduation') as HTMLParagraphElement;
const displayIntermediate = document.getElementById('display-intermediate') as HTMLParagraphElement;
const displayMatriculation = document.getElementById('display-matriculation') as HTMLParagraphElement;
const displayCurrentJob = document.getElementById('display-current-job') as HTMLParagraphElement;
const displayPreviousJob = document.getElementById('display-previous-job') as HTMLParagraphElement;
const displaySkillsList = document.getElementById('display-skills-list') as HTMLUListElement;

let skills: string[] = [];

// Function to dynamically add skills
addSkillBtn.addEventListener('click', () => {
    const skill = skillInput.value.trim();
    if (skill !== '') {
        skills.push(skill);
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        skillInput.value = '';
    }
});

// Form submit event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Update personal information
    displayName.textContent = `Name: ${nameInput.value}`;
    displayEmail.textContent = `Email: ${emailInput.value}`;
    displayContact.textContent = `Contact: ${contactInput.value}`;
    displayProfilePic.src = profilePicInput.value || 'images/pic.jpg';

    // Update education
    displayGraduation.textContent = `Graduation: ${graduationInput.value}`;
    displayIntermediate.textContent = `Intermediate: ${intermediateInput.value}`;
    displayMatriculation.textContent = `Matriculation: ${matriculationInput.value}`;

    // Update work experience
    displayCurrentJob.textContent = `Current Job: ${currentJobInput.value}`;
    displayPreviousJob.textContent = `Previous Job: ${previousJobInput.value}`;

    // Update skills
    displaySkillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        displaySkillsList.appendChild(li);
    });
});
// Editable Resume: Adding interactivity to make sections editable without page reload
function makeEditable(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', () => {
            const originalText = element.innerText;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = originalText;
            element.innerHTML = '';
            element.appendChild(input);

            input.focus();

            // Save the new content when pressing Enter or clicking outside
            const saveContent = () => {
                const newText = input.value;
                element.innerHTML = newText;
            };

            input.addEventListener('blur', saveContent);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveContent();
                }
            });
        });
    }
}

// Apply edit functionality to all sections
document.addEventListener('DOMContentLoaded', () => {
    makeEditable('display-name');
    makeEditable('display-email');
    makeEditable('display-contact');
    makeEditable('display-graduation');
    makeEditable('display-intermediate');
    makeEditable('display-matriculation');
    makeEditable('display-current-job');
    makeEditable('display-previous-job');
    
    // Skills List (special handling for lists)
    const skillItems = document.querySelectorAll('#display-skills-list li');
    skillItems.forEach((item) => {
        item.addEventListener('click', () => {
            makeEditable(item.id);  // Make each skill editable
        });
    });
});




// Function to make a section editable
function makeSectionEditable(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        const inputs = section.querySelectorAll('p, li'); // For paragraphs and list items
        inputs.forEach((input) => {
            const currentText = input.textContent;
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.value = currentText || '';
            input.replaceWith(inputElement); // Replace with input field
        });
    }
}

// Function to save changes made to a section
function saveChanges(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        const inputs = section.querySelectorAll('input'); // For editable inputs
        inputs.forEach((input) => {
            const newText = input.value;
            const listItem = document.createElement('li');
            listItem.textContent = newText;
            input.replaceWith(listItem); // Replace with list item (for skills) or paragraph
        });
    }
}

// Add event listeners for making sections editable and saving changes
document.addEventListener('DOMContentLoaded', () => {
    // Make Skills section editable
    document.getElementById('edit-skills-btn')?.addEventListener('click', () => {
        makeSectionEditable('display-skills-list'); // Editable skills list
    });

    // Save button functionality
    document.getElementById('save-btn')?.addEventListener('click', () => {
        saveChanges('display-skills-list'); // Save skills list changes

        // Also add save functionality for other sections if needed
        saveChanges('display-name');
        saveChanges('display-education');
        saveChanges('display-work-experience');
    });
});








// Function to save content after editing
function saveContent(input: HTMLInputElement, sectionId: string) {
    const parent = document.getElementById(sectionId);
    if (parent) {
        const newText = input.value;

        // Check if the input's parent is still part of the DOM before replacing it
        if (input.parentElement === parent) {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = newText;
            input.replaceWith(paragraphElement); // Replace input field with paragraph
        } else {
            console.error("Input's parent has been removed or changed in the DOM.");
        }
    }
}

// Event listener for saving content
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-btn');
    saveBtn?.addEventListener('click', () => {
        const inputs = document.querySelectorAll('input');
        inputs.forEach((input) => {
            saveContent(input, 'section-id'); // Provide correct section ID
        });
    });
});*/
// Grabbing form elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var contactInput = document.getElementById('contact');
var profilePicInput = document.getElementById('profile-pic');
var graduationInput = document.getElementById('graduation');
var intermediateInput = document.getElementById('intermediate');
var matriculationInput = document.getElementById('matriculation');
var currentJobInput = document.getElementById('current-job');
var previousJobInput = document.getElementById('previous-job');
var skillInput = document.getElementById('skill-input');
var addSkillBtn = document.getElementById('add-skill-btn');
var skillsList = document.getElementById('skills-list');
var skills = [];
// Grabbing display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayContact = document.getElementById('display-contact');
var displayProfilePic = document.getElementById('display-profile-pic');
var displayGraduation = document.getElementById('display-graduation');
var displayIntermediate = document.getElementById('display-intermediate');
var displayMatriculation = document.getElementById('display-matriculation');
var displayCurrentJob = document.getElementById('display-current-job');
var displayPreviousJob = document.getElementById('display-previous-job');
var displaySkillsList = document.getElementById('display-skills-list');
// Function to dynamically add skills in form
addSkillBtn.addEventListener('click', function () {
    var skill = skillInput.value.trim();
    if (skill !== '') {
        skills.push(skill);
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        skillInput.value = '';
    }
});
// Function to dynamically update the resume
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Update personal information
    displayName.textContent = "Name: ".concat(nameInput.value);
    displayEmail.textContent = "Email: ".concat(emailInput.value);
    displayContact.textContent = "Contact: ".concat(contactInput.value);
    displayProfilePic.src = profilePicInput.value || 'images/pic.jpg';
    // Update education
    displayGraduation.textContent = "Graduation: ".concat(graduationInput.value);
    displayIntermediate.textContent = "Intermediate: ".concat(intermediateInput.value);
    displayMatriculation.textContent = "Matriculation: ".concat(matriculationInput.value);
    // Update work experience
    displayCurrentJob.textContent = "Current Job: ".concat(currentJobInput.value);
    displayPreviousJob.textContent = "Previous Job: ".concat(previousJobInput.value);
    // Update skills - ONLY after "Generate Resume" is clicked
    displaySkillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        displaySkillsList.appendChild(li);
    });
    // Make all sections editable including the skills list
    makeEditable('display-name');
    makeEditable('display-email');
    makeEditable('display-contact');
    makeEditable('display-graduation');
    makeEditable('display-intermediate');
    makeEditable('display-matriculation');
    makeEditable('display-current-job');
    makeEditable('display-previous-job');
    // Make skills editable after the resume is generated
    makeSkillsEditable();
});
// Function to make skills editable
function makeSkillsEditable() {
    var skillItems = document.querySelectorAll('#display-skills-list li');
    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var originalText = item.textContent;
            var input = document.createElement('input');
            input.type = 'text';
            input.value = originalText || '';
            item.innerHTML = ''; // Clear the item content
            item.appendChild(input);
            input.focus();
            // Save the new content when pressing Enter or clicking outside
            input.addEventListener('blur', function () {
                var newText = input.value;
                item.innerHTML = newText;
            });
            input.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    var newText = input.value;
                    item.innerHTML = newText;
                }
            });
        });
    });
}
// Function to make a section editable
function makeEditable(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function () {
            var originalText = element.innerText;
            var input = document.createElement('input');
            input.type = 'text';
            input.value = originalText;
            element.innerHTML = '';
            element.appendChild(input);
            input.focus();
            // Save the new content when pressing Enter or clicking outside
            var saveContent = function () {
                var newText = input.value;
                element.innerHTML = newText;
            };
            input.addEventListener('blur', saveContent);
            input.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    saveContent();
                }
            });
        });
    }
}
