document.addEventListener('DOMContentLoaded', function () {
    
    // Define an array of job experiences
    const jobExperiences = [
        {
            jobTitle: "RTS Associate",
            employer: "Amazon",
            date: "2022-2023",
            description: "Played a key role in enhancing operations at Amazon DSE-8 in Bremerton, Washington. Proficiently managed inventory accuracy and provided essential support to cross-functional teams. Adhered to stringent safety protocols, adapted adeptly to evolving procedures, and consistently exceeded productivity benchmarks. Fostered a collaborative and communicative team dynamic, providing valuable assistance to colleagues."
        },
        {
            jobTitle: "FT Division Supervisor",
            employer: "USS Louisiana SSBN 743(G)",
            date: "2012-2017",
            description: "Coordinated hundreds of jobs between four maintenance facility shops during arduous maintenance periods, ensuring Louisiana's Data Processing and Underwater Acoustic Monitoring were ready for strategic tasking. Supervised and maintained the overall operations and security of a division of personnel standing 5 stations on board a Nuclear Submarine. Counseled personnel on their career incentives and future employments."
        },
        {
            jobTitle: "IT Division Supervisor",
            employer: "Commander Submarine Force, U. S. Pacific Fleet",
            date: "March 2010 - July 2012",
            description: "Trained and groomed eight sailors and twenty-five civilians and contractors in the structural rehabilitation of the staff headquarters building. Managed the reporting and tracking process of 58 spillages throughout the Pacific Theater of Operation. Coordinated the upgrading of 783 assets in the 2011 tech refresh. The partnering with civilian counterparts resulted in the procurement and replacement of staff network and peripheral upgrades with minimal downtime."
        },
        {
            jobTitle: "Correction Officer",
            employer: "Camp Taji, Iraq (Government Service)",
            date: "December 2008-March 2010",
            description: "Supervised every element of overall operations and security of 12 personnel in charge of Camp Taji's procedures to include escort operations, restraint application, forced cell extractions, Detainee Information Management System (DIMS), Islamic cultural awareness. Provided safe humane care and custody of enemy combatants, collected intelligence for law enforcement and war crime investigations in support of Operation Iraqi Freedom."
        }
    ];

    // Define an array of education experiences
    const educationExperiences = [
        {
            school: "<strong>Mary M. Knight High School</strong>",
            degree: "High School Diploma (1993)"
        },
        {
            school: "<strong>Olympic College</strong>",
            degree: "Associate of Applied Science-Transfer Software Development (2023)"
        }
    ];

    // Select the "Work Experience" section to append job experiences
    const workExperienceSection = document.getElementById("work-experience");

    // Select the "Education" section to append education experiences
    const educationSection = document.getElementById("education");

    // Loop through job experiences and create and append paragraphs
    jobExperiences.forEach(experience => {
        const jobTitleParagraph = document.createElement("p");
        jobTitleParagraph.innerHTML = `<strong>${experience.jobTitle}</strong>`;
        workExperienceSection.appendChild(jobTitleParagraph);

        const employerParagraph = document.createElement("p");
        employerParagraph.textContent = `${experience.employer} (${experience.date})`;
        workExperienceSection.appendChild(employerParagraph);

        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = experience.description;
        workExperienceSection.appendChild(descriptionParagraph);

        const dividerParagraph = document.createElement("p");
        dividerParagraph.innerHTML = "<br>";
        workExperienceSection.appendChild(dividerParagraph);
    });

    // Loop through education experiences and create and append paragraphs
    educationExperiences.forEach(education => {
        const educationParagraph = document.createElement("p");
        educationParagraph.innerHTML = `${education.school} - ${education.degree}`;
        educationSection.appendChild(educationParagraph);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactInformation = [
    ];

    const contactSection = document.getElementById("contact");

    // Create and append address elements for contact information
    contactInformation.forEach(info => {
        const addressElement = document.createElement("address");
        addressElement.textContent = info;
        contactSection.appendChild(addressElement);
    });
});