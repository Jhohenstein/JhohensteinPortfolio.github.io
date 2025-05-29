# Vibe Code a GitHub Page Personal Portfolio: From Planning to Agent Mode Execution

Creating a personal portfolio is a rite of passage for every developer, but what if you could do it with style, automation, and a touch of your own vibe? In this article, I’ll walk you through how I built my own GitHub Pages portfolio site—showcasing projects, blog posts, and my coding personality—using nothing but HTML, CSS, and JavaScript. No frameworks, no build tools, just pure web magic, a solid plan, and the power of agent mode.

## Step 1: Generate a Portfolio Plan with Copilot Edit Mode

Before writing a single line of code, I used Copilot edit mode to generate a clear, actionable plan. Here’s how:

### 1. Start with Your Goal
Begin by stating your main objective. For me, it was: “Create a personal portfolio site on GitHub Pages that showcases my projects and blog posts.”

### 2. Break Down the Project into Steps
Think about the major milestones needed to reach your goal. In Copilot edit mode, you can simply type a heading like `# Portfolio Site Plan` and then prompt Copilot to suggest logical next steps. For example:
- Project setup
- Choosing a static site generator
- Designing the site structure
- Fetching and displaying content
- Styling and responsiveness
- Deployment
- Automation and maintenance

### 3. Use Copilot to Expand Each Step
For each step, write a short description or bullet point, then let Copilot suggest sub-tasks. For example, under “Fetch and Display GitHub Repositories,” Copilot might suggest:
- Use GitHub API to fetch your public repositories
- Display repository name, description, and link on the Projects page
- Implement with JavaScript (fetch API) or via a Jekyll plugin

### 4. Iterate and Refine
Review Copilot’s suggestions and edit as needed. Add, remove, or reword steps to fit your workflow. The goal is to have a plan that’s both comprehensive and tailored to your needs.

### 5. Output to `plan.md`
Once you’re happy with the plan, save it as `plan.md` in your project root. This file becomes your roadmap, making it easy to track progress and share your approach with others.

#### Example: The Plan Used for This Portfolio
```
# Portfolio Site Plan

1. Project Setup
2. Choose a Static Site Generator (Optional)
3. Design the Site Structure
4. Fetch and Display GitHub Repositories
5. Fetch and Display Medium Blog Articles
6. Styling and Responsiveness
7. Deployment
8. Automation (Optional)
9. Maintenance
```
Each section was then expanded with actionable steps, ensuring nothing was missed during development.

## Step 2: Use Agent Mode to Execute the Plan

With the plan in place, I switched to agent mode to automate and accelerate the build process. Here’s how the plan guided the implementation:

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
- **Plan First, Code Second**: A clear plan (like plan.md) makes the build process smooth and focused.

## Final Thoughts
Vibe coding your GitHub Pages portfolio is about more than just listing projects—it’s about expressing your journey, skills, and personality as a developer. By leveraging Copilot edit mode for planning and agent mode for execution, you can build a site that’s both functional and uniquely you.

Ready to show the world what you can do? Start with a plan, then vibe code your portfolio today!
