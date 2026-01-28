// --- CONFIGURATION ---
const defaultPage = 'about';

// --- CONTENT DATA ---
// You can edit the text inside these backticks (``) to update your website content.
const pages = {
    
    // 1. ABOUT PAGE
    about: `
        <h1>About Me</h1>
        <p>
            Hello, I'm <strong>Kush Patel</strong>, a first year Master's in Artificial Intelligence and Information Security at the Information Networking Institute at <strong>Carnegie Mellon University</strong>.
        </p>
        <p>
            I recently graduated as the Institute <strong>SCS Honors</strong> from Rutgers University - Newbrunswick where I majored in Computer Science and Minor in Business Administration.
        </p>
        
        <p style="color: var(--accent-color); margin-top: 30px;">
            > Feel free to reach out to discuss potential collaborations.
        </p>
    `,

    // 2. PROJECTS PAGE
    projects: `
        <h1>Projects</h1>
        <p>Here is a selection of my recent work in NLP and Machine Learning.</p>
        
        <div class="project-card">
            <span class="project-title">Project - 1 TESTING </span>
            <span class="tech-stack">[HTML, CSS, JS]</span>
            <p>an testing description to projects</p>
            <a href="#">[View Code]</a> <a href="#">[Read Paper]</a>
        </div>
    `,

    // 3. COURSES PAGE
    courses: `
        <h1>Courses</h1>
        <p>Relevant coursework completed during my Master's and Undergraduate studies.</p>
        
        <h2 style="margin-top: 20px; color: var(--dim-color);">Carnegie Mellon University</h2>
        <ul class="course-list">
            <h4 style="margin-top: 20px; color: var(--dim-color);">Spring 2026</h4>

            <li><strong>[11711]</strong> Advanced Natural Language Processing</li>
            <li><strong>[18786]</strong> Introduction to Deep Learning</li>
            <li><strong>[14760]</strong> Advanced Real World Data Networks</li>
            <li><strong>[14795]</strong> AI Applications in Information Security</li>
            
            <h4 style="margin-top: 20px; color: var(--dim-color);">Fall 2025</h4>
            <li><strong>[95746]</strong> Cloud Security</li>
            <li><strong>[14757]</strong> Introduction to Machine Learning with Adversaries in Mind</li>
            <li><strong>[14763]</strong> Systems and Tool Chain in AI Engineering</li>
            <li><strong>[14741]</strong> Intro to Information Security</li>
            
        </ul>

        <h2 style="margin-top: 20px; color: var(--dim-color);">Rutgers University</h2>
        <ul class="course-list">
            <h4 style="margin-top: 20px; color: var(--dim-color);">Fall 2022</h4>
            <li><strong>[CS214]</strong> Systems Programming</li>
            <li><strong>[CS314]</strong> Principle Of Programming Languages</li>
            <li><strong>[CS336]</strong> Principle Information & Data Management</li>
            <li><strong>[CS344]</strong> Design and Analysis of Computer Algorithms</li>
            <li><strong>[CS416]</strong> Operating Systems</li>
            <li><strong>[CS419]</strong> Computer Security</li>
            <li><strong>[CS462]</strong> Deep Learning</li>
            <li><strong>[CS440]</strong> Intro to Artificial Intelligence</li>
        </ul>
    `,

    // 4. RESUME PAGE
    resume: `
        <h1>Resume</h1>
        <p>You can view my resume below or open it in a new tab.</p>
        
        <iframe 
            src="kushPatel_resume_2026.pdf" 
            width="100%" 
            height="800px" 
            style="border: var(--border-style); background-color: white; margin-bottom: 20px;">
        </iframe>

        <div style="text-align: center;">
            <a href="kushPatel_resume_2026.pdf" target="_blank" style="background: var(--accent-color); color: var(--bg-color); padding: 12px 24px; font-weight: bold; display: inline-block; border-radius: 4px; text-decoration: none;">
                <i class="fas fa-external-link-alt"></i> Open PDF in New Tab
            </a>
        </div>
    `
};

// --- LOGIC ---

// Function to handle switching pages
function showSection(pageId) {
    const contentDiv = document.getElementById('content-area');
    
    // Check if the page exists in our data object
    if (pages[pageId]) {
        contentDiv.innerHTML = pages[pageId];
    } else {
        contentDiv.innerHTML = '<h1>404 Error</h1><p>Page not found.</p>';
    }
}

// Function to handle Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    // Save preference
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize on Load
window.onload = function() {
    // 1. Load the default page (About)
    showSection(defaultPage);

    // 2. Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}