
document.addEventListener("DOMContentLoaded", () => {
 
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeContainer = document.getElementById('resume-container') as HTMLDivElement | null;
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
    const displayName = document.getElementById('display-name') as HTMLSpanElement | null;
    const displayEmail = document.getElementById('display-email') as HTMLSpanElement | null;
    const displayPhone = document.getElementById('display-phone') as HTMLSpanElement | null;
    const displaySkills = document.getElementById('display-skills') as HTMLSpanElement | null;

    if (form) {

        const handleFormSubmit = (event: Event): void => {
            event.preventDefault();

        
            if (nameInput && emailInput && phoneInput && skillsInput && resumeContainer && displayName && displayEmail && displayPhone && displaySkills) {
        
                const name = nameInput.value.toUpperCase();
                const email = emailInput.value;
                const phone = phoneInput.value;
                const skills = skillsInput.value;

             
                resumeContainer.style.display = 'block';

              
                displayName.textContent = name;
                displayEmail.textContent = email;
                displayPhone.textContent = phone;
                displaySkills.textContent = skills;
            }
        };

        form.addEventListener('submit', handleFormSubmit);
    }
});
