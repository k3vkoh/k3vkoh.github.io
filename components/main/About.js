export default function renderAbout(about) {
  return `<div class="about" id="about">
        <img
          src=${about.photo}
          alt=${about.name}
          class="profile-img"
        />
        <br />
        <h1>${about.name}</h1>
        <h3>${about.title}</h3>
        <h4>${about.major}</h4>
        <p>
          ${about.bio}
        </p>
        <br />
        <a
          href=${about.resume}
          ><i class="fa-solid fa-file"></i> Resume</a
        >
        |
        <a href=${about.linkedin}
          ><i class="fa-brands fa-linkedin"></i> LinkedIn</a
        >
        |
        <a href=${about.github}
          ><i class="fa-brands fa-github"></i> Github</a
        >
      </div>`;
}