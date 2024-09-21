// Import jsPDF for PDF generation
import jsPDF from 'jspdf';

// Select DOM elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLElement;
const shareableLink = document.getElementById('Shareable-link') as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

interface FormData {
  name: string;
  email: string;
  phone: string;
  skills: string[];
}


resumeForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();


  const formData: FormData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value,
    skills: (document.getElementById('skills') as HTMLInputElement).value.split(',')
  };

  
  displayName.innerText = formData.name;
  displayEmail.innerText = formData.email;
  displayPhone.innerText = formData.phone;
  displaySkills.innerText = formData.skills.join(', ');


  generateShareableLink(formData);


  shareableLinkContainer.style.display = 'block';
});



function generateShareableLink(formData: FormData) {
  const resumeData = JSON.stringify(formData);
  const blob = new Blob([resumeData], { type: 'application/json' });
  const link = URL.createObjectURL(blob);

  

  shareableLink.href = link;
  shareableLink.download = "resume.json"; 
  shareableLink.innerText = 'Click to download your resume as JSON';
}

// Listen for the Download PDF button click
downloadPDFButton.addEventListener('click', () => {
  const doc = new jsPDF();
  
  // Set up the PDF content
  doc.text('Resume', 10, 10);
  doc.text(`Name: ${displayName.innerText}`, 10, 20);
  doc.text(`Email: ${displayEmail.innerText}`, 10, 30);
  doc.text(`Phone: ${displayPhone.innerText}`, 10, 40);
  doc.text(`Skills: ${displaySkills.innerText}`, 10, 50);
  
  
  doc.save('resume.pdf');
});
