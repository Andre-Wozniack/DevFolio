// Simulated database of projects
const projects = [
    {
        id: 1,
        title: "Project One",
        description: "Description for project one.",
        image: "images/project-1.jpg"
    },
    {
        id: 2,
        title: "Project Two",
        description: "Description for project two.",
        image: "images/project-2.jpg"
    },
    {
        id: 3,
        title: "Project Three",
        description: "Description for project three.",
        image: "images/project-3.jpg"
    }
];

// Function to get URL parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Function to load project details
function loadProjectDetails() {
    const projectId = getParameterByName('id');
    const project = projects.find(p => p.id == projectId);

    if (project) {
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-title').innerText = project.title;
        document.getElementById('project-description').innerText = project.description;
    } else {
        document.getElementById('project-title').innerText = "Project not found";
        document.getElementById('project-description').innerText = "";
    }
}

// Load project details on page load
document.addEventListener("DOMContentLoaded", loadProjectDetails);
