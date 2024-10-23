function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    document.getElementById(sectionId).style.display = 'block'; // Show selected section
}

// Form validation for story creation
document.getElementById('storyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const title = document.getElementById('storyTitle').value;

    // Basic validation
    if (title.length < 3) {
        document.getElementById('storyMessage').innerText = "Title must be at least 3 characters long.";
        document.getElementById('storyMessage').classList.add("text-danger");
        document.getElementById('storyMessage').classList.remove("text-success");
        return;
    }

    // If valid, you can send the data to the server or update the UI
    document.getElementById('storyMessage').innerText = "Story created successfully!";
    document.getElementById('storyMessage').classList.add("text-success");
    document.getElementById('storyMessage').classList.remove("text-danger");
    document.getElementById('storyTitle').value = ''; // Clear input
});
