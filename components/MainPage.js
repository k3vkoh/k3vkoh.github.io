import renderAbout from "./main/About.js";
import renderNews, {renderNewsItems} from "./main/News.js";
import renderProjects, {renderProject} from "./main/Projects.js";


export default function renderMainPage(data) {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.className = "container";

  container.innerHTML = renderNews(data.news);
  container.innerHTML += renderAbout(data.about);
  container.innerHTML += renderProjects(data.projects);

  main.appendChild(container);

  const searchNews = document.querySelector('.search input[name="news"]');
  console.log(searchNews);
  searchNews.addEventListener("input", (e) => {
    console.log("currentTarget = ", e.currentTarget);
    console.log("target = ", e.target);
    console.log("target value = ", e.target.value);

    const value = e.target.value;
    const filtered = data.news.filter((newsitem) =>
      newsitem.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filtered = ", filtered);

    const list = document.querySelector(".newslist");
    console.log(list);

    list.innerHTML = renderNewsItems(filtered);
  });
  

  const searchProjects = document.querySelector(
    '.search input[name="projects"]'
  );
  console.log(searchProjects);
  searchProjects.addEventListener("input", (e) => {
    console.log("currentTarget = ", e.currentTarget);
    console.log("target = ", e.target);
    console.log("target value = ", e.target.value);

    const value = e.target.value;
    const filtered = data.projects.filter((projectItem) =>
      projectItem.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filtered = ", filtered);

    const list = document.querySelector(".projectlist");
    console.log(list);
    
    list.innerHTML = filtered.map((p) => renderProject(p)).join("")
  });
}