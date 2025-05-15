# ApostropheCMS Thesis Project

This repository contains the complete source code for the thesis project **“Evaluation and Implementation of a Modern Node.js-based CMS for SMEs”**, which explores the transition from WordPress to ApostropheCMS in a small business context.

## 📌 Project Overview

The aim of this project is to implement a modern, modular, and maintainable website for an Austrian SME using ApostropheCMS with a headless frontend architecture based on [Astro](https://astro.build/).

Key features implemented in this project include:

- ✅ ApostropheCMS setup with MongoDB and Node.js
- ✅ Astro frontend with SSR and integration to ApostropheCMS backend
- ✅ Custom global header and footer modules
- ✅ Responsive navigation component
- ✅ Dynamic content management via built-in and custom widgets
- ✅ GDPR-compliant cookie consent banner (Osano integration)
- ✅ Fully functional contact form with reCAPTCHA validation
- ✅ MailHog email testing integration
- ✅ SEO metadata rendering in the frontend

## 🧱 Technologies Used

- **ApostropheCMS** (v3) – Headless CMS backend
- **Astro** – Frontend framework for building static and server-rendered pages
- **Node.js** – Runtime for backend
- **MongoDB** – NoSQL document store for ApostropheCMS
- **MailHog** – Local SMTP server for testing form emails
- **Osano CookieConsent** – GDPR cookie banner integration

## 📁 Project Structure

```
/backend         → ApostropheCMS backend project
/frontend        → Astro frontend project
/code-snippets   → Referenced code blocks from thesis
/screenshots     → UI screenshots used in thesis documentation
```

## ⚙️ Setup Instructions

> **Prerequisites:** Node.js ≥ 18, npm, MongoDB, Git

1. Clone the repository:
   ```bash
   git clone https://github.com/TheFiler/apos_thesis_project.git
   cd apos_thesis_project
   ```

2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Load starter content:
   ```bash
   cd ../backend
   npm run load-starter-content
   ```

4. Start development servers (in two terminals):
   ```bash
   # Terminal 1 (backend)
   cd backend
   npm run dev

   # Terminal 2 (frontend)
   cd frontend
   npm run dev
   ```

5. Access the application:
   - **Frontend**: [http://localhost:4321](http://localhost:4321)
   - **Backoffice login**: [http://localhost:4321/login](http://localhost:4321/login)

6. (Optional) Start MailHog for email testing:
   - Access: [http://localhost:8025](http://localhost:8025)

## 🧪 Features and Demonstrations

- Fully customizable page structure using widgets and layout containers
- Rich content editing via ApostropheCMS backoffice
- Contact form with email delivery and confirmation messages
- reCAPTCHA-protected form submission
- SEO meta integration for better search visibility
- Mobile-responsive design and navigation

## 📚 Related Thesis Chapters

This repository supports Chapters 5.0–5.10 of the corresponding bachelor thesis. Each implementation corresponds directly to a major requirement, from CMS setup to GDPR compliance.

## 📄 License

This project is open-source and provided under the MIT License.

---

**Author**: [@TheFiler](https://github.com/TheFiler)  
**Thesis Year**: 2025
