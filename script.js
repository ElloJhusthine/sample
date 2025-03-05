document.addEventListener("DOMContentLoaded", function () {
    const subjectsData = [
        {
            "year": "1st Year",
            "semester": "1st Semester",
            "subjects": [
                { "code": "IT111", "title": "Introduction to Computing" },
                { "code": "IT112", "title": "Computer Programming 1", "credit": 3 },
                { "code": "PurCom", "title": "Purposive Communication", "credit": 3 },
                { "code": "RPH", "title": "Readings in Philippine History", "credit": 3 },
                { "code": "TCW", "title": "The Contemporary World", "credit": 3 },
                { "code": "MMW", "title": "Mathematics in the Modern World", "credit": 3 },
                { "code": "PATH FIT 1", "title": "Movement Enhancement", "credit": 3 },
                { "code": "NSTP101", "title": "ROTC/CWTS/LTS I", "credit": 3 }
            ]
        },
        {
            "year": "1st Year",
            "semester": "2nd Semester",
            "subjects": [
                { "code": "IT121", "title": "Computer Programming 2", "credit": 3 },
                { "code": "IT122", "title": "Data Structures and Algorithms", "credit": 3 }
            ]
        }
    ];

    const container = document.getElementById("subjects-container"); // Ensure you have a div with this ID

    subjectsData.forEach((semesterData) => {
        // Create a heading for the semester
        const semesterHeading = document.createElement("h2");
        semesterHeading.textContent = `${semesterData.year} - ${semesterData.semester}`;
        container.appendChild(semesterHeading);

        // Loop through subjects and create cards
        semesterData.subjects.forEach((subject) => {
            const subjectCard = document.createElement("div");
            subjectCard.classList.add("subject-card"); // Apply the CSS class
            subjectCard.textContent = `${subject.title} (${subject.code})`;
            container.appendChild(subjectCard);
        });
    });
});
