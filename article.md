# Vibe Code a GitHub Page Personal Portfolio: A Modern Developer’s Guide

Creating a personal portfolio is a rite of passage for every developer, but what if you could do it with style, automation, and a touch of your own vibe? In this article, I’ll walk you through how I built my own GitHub Pages portfolio site—showcasing projects, blog posts, and my coding personality—using nothing but HTML, CSS, and JavaScript. No frameworks, no build tools, just pure web magic and a plan.

## Why GitHub Pages?
GitHub Pages is a free, reliable, and easy way to host static sites directly from your GitHub repository. It’s perfect for portfolios, documentation, and project landing pages. Plus, it integrates seamlessly with your code and version control workflow.

## The Plan: From Idea to Live Portfolio
Here’s the high-level plan I followed (and you can too):

1. **Project Setup**: Create a new repository named `your-username.github.io` and clone it locally.
2. **Site Structure**: Design a simple site with Home, Projects, Blog, and About/Contact pages.
3. **Dynamic Content**: Use the GitHub API to fetch and display your latest repositories, and pull in your Medium blog posts via RSS.
4. **Styling & Responsiveness**: Craft a modern, responsive look with custom CSS.
5. **Deployment**: Push to GitHub and go live!

## Step-by-Step: Vibe Coding Your Portfolio

### 1. Scaffold the Site
Start with a basic folder structure:

```
index.html
projects.html
blog.html
about.html
style.css
main.js
```

Each HTML file shares a navigation bar and a sticky footer with social links. The CSS ensures a clean, card-like layout and mobile responsiveness.

### 2. Fetch and Display Your GitHub Repositories
On the Projects page, use JavaScript’s `fetch` API to call the GitHub API and dynamically list your public repositories. Each repo displays its name, description, and a link to the code. This keeps your portfolio always up-to-date with your latest work.

### 3. Pull in Your Medium Blog
On the Blog page, fetch your Medium RSS feed (using a service like rss2json) and display the latest articles with titles, summaries, and a “Read more” button. This way, your portfolio doubles as a content hub, showing your technical writing and thought leadership.

### 4. Home Page Previews
The home page features preview blocks for your five most recent projects and blog posts, each with a “View More” button to encourage deeper exploration.

### 5. Add a Sticky Footer with Social Links
A sticky footer appears on every page, linking to your GitHub, LinkedIn, and Medium profiles. SVG icons and subtle hover effects keep it modern and accessible.

### 6. Polish the Vibe
Custom CSS brings it all together: card layouts, hover effects, and a color palette that matches your personality. The site is fully responsive, looking great on both desktop and mobile.

## Lessons Learned & Tips
- **Keep It Simple**: You don’t need a framework to make a beautiful, dynamic site.
- **Automate Content**: Fetching from APIs means your portfolio updates itself as you grow.
- **Show Your Personality**: Add a hero section, skills, and a bit about you—let visitors know who you are beyond the code.
- **Make It Easy to Connect**: Prominent social links and a contact section invite collaboration and opportunities.

## Final Thoughts
Vibe coding your GitHub Pages portfolio is about more than just listing projects—it’s about expressing your journey, skills, and personality as a developer. With a little planning and some creative coding, you can build a site that’s both functional and uniquely you.

Ready to show the world what you can do? Start vibe coding your portfolio today!
