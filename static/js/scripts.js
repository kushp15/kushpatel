function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

function runCode() {
    // Logic to handle the "Run" button
    const activeSection = document.querySelector('.section-content.active');
    if (activeSection) {
        document.getElementById('output').textContent = `Running: ${activeSection.textContent}`;
    } else {
        document.getElementById('output').textContent = 'Please select a section to run.';
    }
}
