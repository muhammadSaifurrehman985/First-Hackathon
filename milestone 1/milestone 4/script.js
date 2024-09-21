// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('resume-container');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var skillsInput = document.getElementById('skills');
    var displayName = document.getElementById('display-name');
    var displayEmail = document.getElementById('display-email');
    var displayPhone = document.getElementById('display-phone');
    var displaySkills = document.getElementById('display-skills');
    if (form) {
        var handleFormSubmit = function (event) {
            event.preventDefault();
            if (nameInput && emailInput && phoneInput && skillsInput && resumeContainer && displayName && displayEmail && displayPhone && displaySkills) {
                var name_1 = nameInput.value;
                var email = emailInput.value;
                var phone = phoneInput.value;
                var skills = skillsInput.value;
                resumeContainer.style.display = 'block';
                displayName.textContent = name_1;
                displayEmail.textContent = email;
                displayPhone.textContent = phone;
                displaySkills.textContent = skills;
            }
        };
        form.addEventListener('submit', handleFormSubmit);
    }
});
