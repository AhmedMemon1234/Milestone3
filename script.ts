document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    const profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;

    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const name = nameElement.value
    const email = emailElement.value
    const phone = phoneElement.value 
    const education = educationElement.value 
    const experience = experienceElement.value 
    const skills = skillsElement.value 

    const profilepictureFile = profilepictureinput.files?.[0]
const profilepictureURL = profilepictureFile? URL.createObjectURL(profilepictureFile) : '';



  const resumeOutput = `
  <h2>Resume</h2>
   ${profilepictureURL ? `<img src ="${profilepictureURL}" alt="Profile Picture" class="profilepicture">` : ""}
  <p><strong>Name:</strong> ${name} </p>
  <p><strong>Email:</strong> ${email} </p>
  <p><strong>Phone Number:</strong> ${phone} </p>

  <h3>Education</h3>
  <p>${education}</p>

<h3>Experience</h3>
  <p>${experience}</p>

  <h3>Skills</h3>
  <p>${skills}</p>
  `;


  const resumeOutputElement = document.getElementById('resumeOutput')
  if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
  } else{
    console.error('The Resume Output Elements Are Missing')
  }
}else{
    console.error('One Or More Output Elements Are Missing');
    
}
})