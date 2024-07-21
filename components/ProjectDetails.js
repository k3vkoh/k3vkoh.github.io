export default function renderProjectDetails(project) {
  const main = document.querySelector("main");
  let links = ``;
  for (let l of project.links) {
    links += `<a href=${l.link}>${l.name}</a><br />`;
  }
  main.innerHTML = `<div class="project-detail">
      <h1>${project.title}</h1>
      <p>
        ${project.description}
      </p>
      <br />
      <p>
        <strong>Team:</strong> ${project.team}
      </p>
      <br />
      <p><strong>Backend:</strong> ${project.backend}</p>
      <br />
      <p><strong>Frontend:</strong> ${project.frontend}</p>
      <br />
      ${links}
    </div>`;
}