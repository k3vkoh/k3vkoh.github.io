import renderMainPage from "./components/MainPage.js";
import renderNavbar from "./components/Navbar.js";
import renderProjectDetails from "./components/ProjectDetails.js"

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";
    if (page === "main") {
      renderNavbar();
      renderMainPage(data);
    } else {
      const p = data.projects.find((p) => p.id == projectId);
      renderProjectDetails(p);
    }
  });
