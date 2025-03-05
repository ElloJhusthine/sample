document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("subjects-container");
            data.forEach(semester => {
                const semesterDiv = document.createElement("div");
                semesterDiv.classList.add("semester");
                
                const title = document.createElement("h2");
                title.textContent = `${semester.year} - ${semester.semester}`;
                semesterDiv.appendChild(title);
                
                semester.subjects.forEach(subject => {
                    const subjectCard = document.createElement("div");
                    subjectCard.classList.add("subject-card");
                    subjectCard.innerHTML = `<strong>${subject.code}</strong>: ${subject.title} (${subject.credit} credits)`;
                    semesterDiv.appendChild(subjectCard);
                });
                
                container.appendChild(semesterDiv);
            });
        })
        .catch(error => console.error("Error loading subjects:", error));
});
