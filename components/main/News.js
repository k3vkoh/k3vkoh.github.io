export default function renderNews(news) {
  return `<div class="news" id="news">
        <h2>News</h2>
        <div class="search">
          <input type="search" name='news' placeholder="Search News...">
        </div>
        ${renderNewsItems(news)}
      </div>`;
}

export function renderNewsItems(news) {
  let lines = ``;
  for (let n of news) {
    lines += `<li>${n.title}: ${n.date}</li>`;
  }
  return `<div class="newslist">
        <ul>
          ${lines}
        </ul>
      </div>`;
}