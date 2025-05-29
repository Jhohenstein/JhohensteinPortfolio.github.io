// main.js
// Placeholder for dynamic features (fetching GitHub repos, blog articles, etc.)

// You can add DOMContentLoaded event listeners and functions here for each page.

document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display GitHub repositories on the Projects page
  if (window.location.pathname.endsWith('projects.html')) {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '<p>Loading repositories...</p>';
    fetch('https://api.github.com/users/Jhohenstein/repos?sort=updated')
      .then(response => response.json())
      .then(repos => {
        if (!Array.isArray(repos) || repos.length === 0) {
          projectsList.innerHTML = '<p>No repositories found.</p>';
          return;
        }
        projectsList.innerHTML = '';
        repos.forEach(repo => {
          const repoDiv = document.createElement('div');
          repoDiv.className = 'repo';
          repoDiv.innerHTML = `
            <h2><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h2>
            <p>${repo.description ? repo.description : 'No description provided.'}</p>
          `;
          projectsList.appendChild(repoDiv);
        });
      })
      .catch(error => {
        projectsList.innerHTML = '<p>Error loading repositories.</p>';
        console.error('GitHub API error:', error);
      });
  }

  // Fetch and display Medium blog articles on the Blog page
  if (window.location.pathname.endsWith('blog.html')) {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '<p>Loading blog articles...</p>';
    // Use rss2json to convert Medium RSS feed to JSON
    const rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jacob.hohenstein';
    fetch(rss2jsonUrl)
      .then(response => response.json())
      .then(data => {
        if (!data.items || data.items.length === 0) {
          blogList.innerHTML = '<p>No blog articles found.</p>';
          return;
        }
        blogList.innerHTML = '';
        data.items.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'blog-article';
          articleDiv.innerHTML = `
            <h2><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h2>
            <p>${article.pubDate ? new Date(article.pubDate).toLocaleDateString() : ''}</p>
            <p>${article.description ? article.description.replace(/<[^>]+>/g, '').slice(0, 200) + '...' : ''}</p>
            <a class="read-more-btn" href="${article.link}" target="_blank" rel="noopener">Read more →</a>
          `;
          blogList.appendChild(articleDiv);
        });
      })
      .catch(error => {
        blogList.innerHTML = '<p>Error loading blog articles.</p>';
        console.error('Medium RSS error:', error);
      });
  }

  // Home page previews for recent GitHub repos and Medium articles
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    // GitHub repos preview
    const main = document.querySelector('main');
    const reposPreviewDiv = document.createElement('section');
    reposPreviewDiv.innerHTML = '<h2>Recent Projects</h2><div id="repos-preview"><p>Loading...</p></div>';
    main.appendChild(reposPreviewDiv);
    fetch('https://api.github.com/users/Jhohenstein/repos?sort=updated')
      .then(response => response.json())
      .then(repos => {
        const preview = document.getElementById('repos-preview');
        if (!Array.isArray(repos) || repos.length === 0) {
          preview.innerHTML = '<p>No repositories found.</p>';
          return;
        }
        preview.innerHTML = '';
        repos.slice(0, 5).forEach(repo => {
          const repoDiv = document.createElement('div');
          repoDiv.className = 'repo repo-preview';
          repoDiv.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
            <p>${repo.description ? repo.description : 'No description provided.'}</p>
          `;
          preview.appendChild(repoDiv);
        });
      })
      .catch(() => {
        const preview = document.getElementById('repos-preview');
        preview.innerHTML = '<p>Error loading repositories.</p>';
      });

    // Add 'View More' button for projects
    const viewMoreProjects = document.createElement('a');
    viewMoreProjects.href = 'projects.html';
    viewMoreProjects.className = 'view-more-btn';
    viewMoreProjects.textContent = 'View More Projects →';
    reposPreviewDiv.appendChild(viewMoreProjects);

    // Medium articles preview
    const articlesPreviewDiv = document.createElement('section');
    articlesPreviewDiv.innerHTML = '<h2>Recent Blog Articles</h2><div id="articles-preview"><p>Loading...</p></div>';
    main.appendChild(articlesPreviewDiv);
    const rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jacob.hohenstein';
    fetch(rss2jsonUrl)
      .then(response => response.json())
      .then(data => {
        const preview = document.getElementById('articles-preview');
        if (!data.items || data.items.length === 0) {
          preview.innerHTML = '<p>No blog articles found.</p>';
          return;
        }
        preview.innerHTML = '';
        data.items.slice(0, 5).forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'blog-article article-preview';
          articleDiv.innerHTML = `
            <h3><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h3>
            <p>${article.pubDate ? new Date(article.pubDate).toLocaleDateString() : ''}</p>
            <p>${article.description ? article.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...' : ''}</p>
            <a class="read-more-btn" href="${article.link}" target="_blank" rel="noopener">Read more →</a>
          `;
          preview.appendChild(articleDiv);
        });
      })
      .catch(() => {
        const preview = document.getElementById('articles-preview');
        preview.innerHTML = '<p>Error loading blog articles.</p>';
      });

    // Add 'View More' button for blog
    const viewMoreBlog = document.createElement('a');
    viewMoreBlog.href = 'blog.html';
    viewMoreBlog.className = 'view-more-btn';
    viewMoreBlog.textContent = 'View More Articles →';
    articlesPreviewDiv.appendChild(viewMoreBlog);
  }
});
