"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import jsPDF for PDF generation
var jspdf_1 = require("jspdf");
// Select DOM elements
var resumeForm = document.getElementById('resume-form');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displaySkills = document.getElementById('display-skills');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLink = document.getElementById('Shareable-link');
var downloadPDFButton = document.getElementById('download-pdf');
// Listen for form submission
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        skills: document.getElementById('skills').value.split(',')
    };

    displayName.innerText = formData.name;
    displayEmail.innerText = formData.email;
    displayPhone.innerText = formData.phone;
    displaySkills.innerText = formData.skills.join(', ');

    generateShareableLink(formData);

    shareableLinkContainer.style.display = 'block';
});

function generateShareableLink(formData) {
    var resumeData = JSON.stringify(formData);
    var blob = new Blob([resumeData], { type: 'application/json' });
    var link = URL.createObjectURL(blob);
  
    shareableLink.href = link;
    shareableLink.download = "resume.json";
    shareableLink.innerText = 'Click to download your resume as JSON';
}
 
downloadPDFButton.addEventListener('click', function () {
    var doc = new jspdf_1.default();
  
    doc.text('Resume', 10, 10);
    doc.text("Name: ".concat(displayName.innerText), 10, 20);
    doc.text("Email: ".concat(displayEmail.innerText), 10, 30);
    doc.text("Phone: ".concat(displayPhone.innerText), 10, 40);
    doc.text("Skills: ".concat(displaySkills.innerText), 10, 50);
   
    doc.save('resume.pdf');
});
