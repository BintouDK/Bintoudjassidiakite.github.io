# 🌸 Personal Portfolio — Customization Guide

## Folder Structure

```
portfolio/
├── index.html                        ← Main HTML file (edit content here)
├── css/
│   └── style.css                     ← All styles + CSS variables (colors, fonts)
├── js/
│   └── main.js                       ← All JavaScript (animations, interactions)
├── assets/
│   ├── images/
│   │   ├── profile.jpg               ← YOUR PROFILE PHOTO (replace this)
│   │   ├── about-main.jpg            ← About section large image
│   │   └── about-accent.jpg          ← About section small image
│   ├── certificates/
│   │   ├── microsoft-office-specialist.jpg   ← Certificate image
│   │   ├── meta-digital-marketing.jpg        ← Certificate image
│   │   └── lean-six-sigma-white-belt.jpg     ← Certificate image
│   └── resume.pdf                    ← YOUR CV/RESUME file
└── README.md                         ← This file
```

---

## ✏️ Quick Customization Checklist

### 1. YOUR NAME
Search and replace **"Your Name"** in `index.html` everywhere it appears (navbar logo, hero, footer copyright).

### 2. PROFILE PHOTO
In `index.html` around line 140, find the `profile-placeholder` div and replace with:
```html
<img class="profile-img" src="assets/images/profile.jpg" alt="Your Name" />
```
Then place your photo at `assets/images/profile.jpg`.

### 3. ABOUT IMAGES
Find `.about-img-accent` and `.about-img-main` in `index.html` (~line 230). Uncomment the `<img>` tags and place your images at:
- `assets/images/about-accent.jpg`
- `assets/images/about-main.jpg`

### 4. SOCIAL MEDIA LINKS
In `index.html`, find the comment `SOCIAL LINKS — CHANGE URLs HERE` (~line 165). Replace each `href="#"` with your actual profile URLs:
- LinkedIn: `href="https://linkedin.com/in/yourprofile"`
- GitHub: `href="https://github.com/yourusername"`
- Instagram: `href="https://instagram.com/yourusername"`
- Behance: `href="https://behance.net/yourusername"`
- Email: `href="mailto:yourname@email.com"`

### 5. CONTACT DETAILS
Find the comment `CONTACT INFO — CHANGE DETAILS HERE` (~line 600):
- Email address
- Phone number
- Location/City

### 6. RESUME / CV
Replace `assets/resume.pdf` with your actual CV file.

### 7. PROJECT LINKS
For each project card, replace `href="#"` with:
- Live Demo URL: `href="https://yourproject.com"`
- GitHub Repo: `href="https://github.com/you/project"`

### 8. PROJECT IMAGES
In `css/style.css`, find `.project-img-1`, `.project-img-2`, `.project-img-3`:
```css
.project-img-1 { background-image: url('../assets/images/project-portfolio.jpg'); background-size: cover; }
```
Or in `index.html`, replace the emoji `<div class="project-img-inner">` with an `<img>` tag.

### 9. CERTIFICATE IMAGES
Place your certificate images at:
- `assets/certificates/microsoft-office-specialist.jpg`
- `assets/certificates/meta-digital-marketing.jpg`
- `assets/certificates/lean-six-sigma-white-belt.jpg`

They will automatically load. The placeholder emoji shows if the image is missing.

### 10. COLORS
Open `css/style.css` and edit the `:root` variables at the very top:
```css
:root {
  --rose:    #D9878A;   /* Main accent / buttons */
  --gold:    #C9A96E;   /* Secondary accent / labels */
  --lavender:#D6CCE8;   /* Soft purple tones */
  --cream:   #FDF8F3;   /* Main background */
  /* ... */
}
```

### 11. EDUCATION INFO
Find the `EDUCATION SECTION` in `index.html`. Edit the `.edu-period`, `.edu-degree`, `.edu-school`, and `.edu-desc` content for each timeline item.

### 12. SKILLS PERCENTAGES
In the Skills section, each `<div class="skill-fill" data-width="90">` has a `data-width` value (0–100). Change the numbers and the matching label text.

### 13. TYPING ROLES
In `js/main.js`, find the `roles` array (~line 23) and edit the text values:
```javascript
const roles = [
  'Web Developer',
  'Digital Marketer',
  // add or change roles here
];
```

### 14. CONTACT FORM BACKEND
The form currently simulates sending. To make it real, replace the `setTimeout` in `js/main.js` (~line 115) with:
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', {...})`
- **EmailJS**: follow emailjs.com setup
- **Your own backend**: `fetch('/api/contact', {...})`

---

## 🌐 How to Run Locally
1. Open the `portfolio/` folder
2. Open `index.html` in any browser
3. Or use VS Code with **Live Server** extension for auto-reload

## 🚀 How to Deploy
- **GitHub Pages**: Push to GitHub, enable Pages in repo settings → point to `main` branch / root
- **Netlify**: Drag and drop the `portfolio/` folder to netlify.com/drop
- **Vercel**: `vercel deploy` from the portfolio folder

---

*Built with pure HTML, CSS & JavaScript — no frameworks required.*
