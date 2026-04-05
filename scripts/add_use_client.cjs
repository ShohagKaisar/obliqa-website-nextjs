const fs = require('fs');

const files = [
    'WorkProcess/WorkProcess.tsx', 
    'Testimonials/Testimonials.tsx', 
    'TeamSection/TeamSection.tsx', 
    'ServiceDetails/ServiceDetails.tsx', 
    'Projects/Projects.tsx', 
    'Projects/ProjectDemo.tsx', 
    'PricingPlans/PricingPlans.tsx', 
    'MobileMenu/Mobilemenu.tsx', 
    'Hero/Hero.tsx', 
    'GetStartedSection/GetStartedSection.tsx', 
    'ErrorPage/ErrorPage.tsx', 
    'ContactForm/ContactForm.tsx', 
    'AgencyDifference/AgencyDifference.tsx', 
    'AboutObliqa/AboutObliqa.tsx'
];

files.forEach(f => {
    const p = 'src/components/' + f;
    try {
        let content = fs.readFileSync(p, 'utf8');
        if (!content.includes('use client')) {
            fs.writeFileSync(p, '"use client";\n' + content);
            console.log('Added use client to ' + p);
        } else {
            console.log('Already has use client: ' + p);
        }
    } catch (e) {
        console.log('Error reading ' + p + ': ' + e.message);
    }
});
