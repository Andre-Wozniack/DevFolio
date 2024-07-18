// Simulated database
const projects = [
    {
        title: "Project One",
        description: "Description for project one.",
        image: "images/project-details-large.jpg"
    },
    {
        title: "Project Two",
        description: "Description for project two.",
        image: "images/project-details-small.jpg"
    },
    // Add more projects as needed
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const projectItem = `
            <div class="col-lg-12">
                <img class="img-fluid mt-5 mb-3" src="${project.image}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </div>
        `;
        projectList.innerHTML += projectItem;
    });
}

// Display projects on page load
document.addEventListener("DOMContentLoaded", displayProjects);
