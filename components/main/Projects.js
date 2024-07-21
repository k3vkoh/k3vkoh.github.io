export default function renderProjects(projects) {
  return `<div class="projects" id="projects">
        <h2>Projects</h2>
        <div class="search">
          <input type="search" name='projects' placeholder="Search Projects...">
        </div>
        <div class="projectlist">
          ${projects.map((p) => renderProject(p)).join("")}
        </div> 
        </div>`;
}

export function renderProject(project) {
  return `<div class="project">
          <a href="?project=${project.id}">${project.title}</a>
          <p>
            ${project.summary}
          </p>
        </div>
        <br />`;
}