# Joel Portfolio

A personal cybersecurity portfolio website built with Node.js, Express, and EJS. The site highlights my background, technical skills, education, projects, certifications, and contact details in a clean cyber-themed interface.

## About

This portfolio is designed to present my journey as a B.Tech Cybersecurity student and ethical hacking learner. It focuses on security interests, development work, certifications, and practical projects across web, mobile, and cybersecurity domains.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile screens
- Fixed navigation bar with mobile hamburger menu
- Home section with profile introduction
- About page with professional summary, career objective, interests, and strengths
- Skills page covering programming, security tools, development, and soft skills
- Education timeline with coursework tags
- Projects page with featured and GitHub-linked projects
- Certifications page with certificate cards and credential details
- Contact page with email, phone, location, and message form

## Tech Stack

- Node.js
- Express.js
- EJS templating
- CSS3
- express-ejs-layouts
- Helmet
- Morgan
- dotenv

## Project Structure

```text
cyber-portfolio-node/
+-- public/
|   +-- css/
|   |   +-- style.css
|   +-- images/
+-- routes/
+-- views/
|   +-- layouts/
|   +-- pages/
|   +-- partials/
+-- server.js
+-- package.json
+-- README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

Open the website:

```text
http://localhost:3000
```

To run on another port:

```bash
PORT=3001 node server.js
```

On Windows PowerShell:

```powershell
$env:PORT=3001
node server.js
```

## Pages

- `/` - Home
- `/about` - About me
- `/skills` - Technical and soft skills
- `/education` - Academic background
- `/projects` - Portfolio projects
- `/certifications` - Certifications and achievements
- `/contact` - Contact information

## Author

Joel Augustine  
GitHub: [JoelAugustine-92](https://github.com/JoelAugustine-92)
