function showSection(sectionId) {
    if (sectionId === 'about') {
        fetch('About.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('code-content').textContent = data;
                document.getElementById('about').classList.add('active');
                updateLineNumbers(data);
            });
    } else {
        document.getElementById('code-content').textContent = 'Content goes here...';
    }
}

function runCode() {
    const activeSection = document.getElementById('code-content').textContent;
    if (activeSection) {
        document.getElementById('output').innerHTML = activeSection;
    } else {
        document.getElementById('output').textContent = 'Please select a section to run.';
    }
}

function updateLineNumbers(code) {
    const lineCount = code.split('\n').length;
    const lineNumbersContainer = document.getElementById('line-numbers');
    lineNumbersContainer.innerHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        lineNumbersContainer.innerHTML += `<span>${i}</span>`;
    }
}
