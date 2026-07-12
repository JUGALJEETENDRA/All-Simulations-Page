# 🎓 Simulation Hub

> An interactive academic learning portal featuring **130 syllabus-aligned learning resources** — **65 simulations** and **65 case studies** — across **UI Programming**, **Python Programming**, and **Digital Business & Transformation**.

Simulation Hub transforms conventional syllabus topics into interactive, browser-based learning experiences. Instead of relying only on static notes, students can explore concepts through simulations and connect theory with practice through structured case studies.

## ✨ Highlights

- 🧪 **65 Interactive Simulations**
- 📚 **65 Academic Case Studies**
- 🎯 **130 Topic-Level Learning Resources**
- 📖 **3 Subjects**
- 🧩 **5 Modules per Subject**
- 🔎 **Searchable subject and module navigation**
- 📱 **Responsive interface**
- ♿ **Semantic and accessible navigation**
- ⚡ **No framework, build step, backend, or installation required**
- 🌐 **Ready for static hosting and GitHub Pages**

## 📚 Subjects

| Subject | Simulations | Case Studies | Focus Areas |
| --- | ---: | ---: | --- |
| **UI Programming** | 20 | 20 | User understanding, screen design, web interfaces, data-handling interfaces, and mobile UI |
| **Python Programming** | 21 | 21 | Data structures, decision making, functions, exceptions, file handling, Pandas, Seaborn, GUI, and database connectivity |
| **Digital Business & Transformation** | 24 | 24 | Digital business foundations, business models, infrastructure, adoption factors, and digital strategy |
| **Total** | **65** | **65** | **130 learning resources** |

## 🚀 What Makes This Repository Different?

Most academic repositories contain notes, PDFs, or isolated code examples. **Simulation Hub** organizes an entire multi-subject syllabus into a consistent learning experience:

1. **Choose a learning mode** — explore an interactive simulation or study a real-world case.
2. **Select a subject** — UI Programming, Python Programming, or Digital Business & Transformation.
3. **Navigate by module** — every subject follows its five-module syllabus structure.
4. **Open a topic** — each topic has its own standalone page, making the repository easy to browse, maintain, and extend.

The result is a single academic portal that supports both **concept exploration** and **applied understanding**.

## 🗂️ Project Structure

```text
.
├── index.html                         # Main Simulation Hub landing page
├── style.css                          # Shared global styles
├── script.js                          # Shared search and interaction logic
├── .nojekyll                          # GitHub Pages configuration
│
├── simulations/
│   ├── ui-programming/
│   │   ├── index.html                 # Subject overview
│   │   ├── module-1-.../
│   │   │   └── 1-1.1/
│   │   │       └── index.html         # Individual simulation
│   │   └── ...
│   ├── python-programming/
│   │   └── ...
│   └── digital-business-transformation/
│       └── ...
│
└── case-studies/
    ├── index.html                     # Case Studies portal
    ├── ui-programming/
    │   └── ...
    ├── python-programming/
    │   └── ...
    └── digital-business-transformation/
        └── ...
```

Each learning resource is intentionally stored as a standalone `index.html` page inside a predictable **subject → module → topic** hierarchy.

## 🧭 Portal Architecture

```text
Simulation Hub
│
├── Interactive Simulations
│   ├── UI Programming
│   │   └── 5 Modules → 20 Simulations
│   ├── Python Programming
│   │   └── 5 Modules → 21 Simulations
│   └── Digital Business & Transformation
│       └── 5 Modules → 24 Simulations
│
└── Academic Case Studies
    ├── UI Programming
    │   └── 5 Modules → 20 Case Studies
    ├── Python Programming
    │   └── 5 Modules → 21 Case Studies
    └── Digital Business & Transformation
        └── 5 Modules → 24 Case Studies
```

## 🛠️ Built With

| Technology | Purpose |
| --- | --- |
| **HTML5** | Page structure and individual learning experiences |
| **CSS3** | Responsive layouts, components, and visual design |
| **JavaScript** | Search, filtering, tabs, and interactive behavior |
| **SVG** | Lightweight interface icons |
| **GitHub Pages compatible structure** | Simple static deployment |

The project deliberately uses **vanilla web technologies**, keeping it lightweight, portable, and easy to run on virtually any modern browser.

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd All-Simulations-Page-main
```

### 2. Run the project

Because this is a static website, you can open `index.html` directly in a browser.

For a better local-development experience, run a local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use a local development extension such as **Live Server**.

## 🧪 Simulations

The simulation section is designed for **learning by interaction**. Individual topic pages use visual demonstrations, controls, scenarios, and other browser-based interactions to make syllabus concepts easier to explore.

- **UI Programming** — 20 simulations
- **Python Programming** — 21 simulations
- **Digital Business & Transformation** — 24 simulations

**Total: 65 simulations**

## 📖 Case Studies

The case-study section complements the simulations by connecting academic concepts with **practical scenarios, design decisions, software architectures, business challenges, and real-world applications**.

- **UI Programming** — 20 case studies
- **Python Programming** — 21 case studies
- **Digital Business & Transformation** — 24 case studies

**Total: 65 case studies**

## 🔍 Key Features

### Unified Academic Portal
All three subjects are available from a single, consistent interface.

### Dual Learning Modes
Students can switch between **interactive simulations** and **case-study-based learning**.

### Syllabus-Aligned Organization
Content is organized by subject, module, and topic for straightforward academic navigation.

### Search and Filtering
Shared JavaScript provides real-time discovery across module and learning-resource cards where search is available.

### Responsive Design
The portal is designed to work across desktop, tablet, and mobile screen sizes.

### Accessible Navigation
Semantic HTML, descriptive labels, breadcrumbs, and structured navigation improve usability and accessibility.

### Zero-Dependency Core
No package manager, framework, database, or backend is required to run the portal.

## ➕ Adding a New Learning Resource

Follow the existing naming convention to keep the repository consistent.

### Add a simulation

```text
simulations/
└── <subject>/
    └── module-<number>-<module-name>/
        └── <module>-<topic>/
            └── index.html
```

### Add a case study

```text
case-studies/
└── <subject>/
    └── module-<number>-<module-name>/
        └── <module>-<topic>/
            └── index.html
```

After adding the page:

1. Add or update its card/link on the relevant subject page.
2. Verify all relative paths.
3. Test the page on desktop and mobile.
4. Confirm that navigation and breadcrumbs return to the correct parent pages.
5. Keep titles, numbering, and folder names consistent with the existing syllabus structure.

## 🌐 Deployment

The repository can be deployed on any static hosting platform.

### GitHub Pages

1. Push the repository to GitHub.
2. Open the repository **Settings**.
3. Go to **Pages**.
4. Select the branch containing the website.
5. Choose the repository root as the publishing source.
6. Save and wait for deployment to complete.

The included `.nojekyll` file helps GitHub Pages serve the static project structure directly.

## 🤝 Contributing

Contributions that improve the learning experience are welcome.

```bash
# Fork the repository, then clone your fork
git clone <your-fork-url>

# Create a feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add: description of your change"

# Push the branch
git push origin feature/your-feature-name
```

Then open a pull request describing what was changed, which subject/module/topic is affected, how the change improves the learning experience, and any testing performed.

## 🧹 Contribution Guidelines

- Preserve the **subject → module → topic** directory structure.
- Use clear and descriptive page titles.
- Keep navigation and breadcrumbs consistent.
- Prefer semantic HTML and accessible controls.
- Maintain responsive behavior.
- Avoid unnecessary dependencies when a lightweight solution is sufficient.
- Test all relative links before submitting changes.

## 🗺️ Future Enhancements

- [ ] Global search across all 130 learning resources
- [ ] Progress tracking and completion indicators
- [ ] Bookmarks and recently viewed topics
- [ ] Dark mode
- [ ] Topic-level quizzes and self-assessment
- [ ] Improved keyboard accessibility
- [ ] Automated link validation
- [ ] Reusable templates for faster content creation
- [ ] Progressive Web App support
- [ ] Analytics for understanding learning-resource usage

## 📊 Repository at a Glance

```text
3 Subjects
15 Subject Modules
65 Interactive Simulations
65 Academic Case Studies
130 Total Learning Resources
1 Unified Learning Portal
```



### Learn concepts. Explore interactions. Study real-world applications.

**Simulation Hub — turning syllabus topics into interactive learning experiences.**

</div>
