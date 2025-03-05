function displaySubjects(data) {
    let container = document.getElementById("subjectsContainer");
    container.innerHTML = "";

    data.forEach(entry => {
        let section = document.createElement("div");
        section.innerHTML = `<h2>${entry.year} - ${entry.semester}</h2>`;
        
        entry.subjects.forEach(subject => {
            let item = document.createElement("div");
            item.className = "subject-card";  // Updated class for styling
            item.textContent = `${subject.title} (${subject.code})`;
            section.appendChild(item);
        });

        container.appendChild(section);
    });
}
